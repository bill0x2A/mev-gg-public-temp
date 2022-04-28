//SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "hardhat/console.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import './Renderer.sol';


/**
 * @title A MEV game
*/
contract MevGG is ERC721A {
    using Strings for uint256;

    // Store renderer as separate contract so we can update it if needed
    Renderer public renderer;

    address public developer;
    uint public giveToJackpot;
    uint public startTime;
    uint public totalTime;
    uint public timeLeft;

    address winning;
    uint public balanceReceived;
    uint public keyPrice = 0 wei;
    uint public multiplier = 100;
    uint public increment;

    uint public totalKeys;
    uint public divPool;
    uint public jackpot;
    uint public counter;
    uint public developerOnePercent;
    uint public giveToDeveloper;
    // string private baseURI = "baseUri";
    
    struct Divvies {
        uint _keyBalance;
        uint _divBalance;
        uint _withdrawnAmount;
    }

    mapping(address => Divvies) public divTracker;

    event keysPurchased(uint _amount, address _winning);

    /// @notice Thrown when trying to purchase keys after the game is over
    error WinnerAlreadyDeclared();
    /// @notice Thrown if player does not have enough ETH for their purchase
	error InsufficientFunds();
    /// @notice Thrown if player does not have any dividends to claim
	error NoDivviesToClaim();
    /// @notice Thrown if jackpot claimed while game is still active
	error GameActive();
    /// @notice Thrown if jackpot is empty when claimed
	error JackpotEmpty();
    /// @notice Thrown if jackpot is claimed by a player that is not the winner
	error NotWinner();
    /// @notice Thrown if developer percentage is claimed by a player that is not the developer
	error NotDeveloper();

    constructor(uint _startTime, uint _increment, uint _keyPrice) ERC721A("mevgg", unicode"♞") {
        /**
        * @notice developer address is used to withdraw 1% depending on the outcome
        * of the vote. Developer address has NO more privileges than any other address.  
        */
        developer = msg.sender;
        startTime = _startTime;
        increment = _increment;
        keyPrice = _keyPrice;
        totalTime = block.timestamp + startTime;
    }

    /**
     * @dev put 24 (or 86,400 seconds) hours on the clock to start the game
     */
    function letTheGamesBegin() private {
        totalTime = block.timestamp + startTime;
    }

    /**
     * @notice source of truth for the time keeping. 
     * This function will resync the clock after every block.
     */
    function getTimeLeft() public view returns(uint) {
        if (totalKeys == 0) {
            return startTime;
        }
        if (totalTime >= block.timestamp) {
            return totalTime - block.timestamp;
        }
        return 0;
    }
    /**
     * @dev holds a logic for key price increase, adding time per key,
     * updating player's key balance, allocating funds, and setting the current winning player.
     * @notice If multiple key purchases are made a the end of the game, 
     * the winner will be the address who gets included FIRST in the game ending block.
    */
    function purchaseKeys(uint _numKeys) public payable {
        /// @notice Not sure why anyone would, but you can't buy keys after the game ends.
        if (getTimeLeft() == 0) revert WinnerAlreadyDeclared();
        if (msg.value != keyPrice*_numKeys) revert InsufficientFunds();

        uint devShareNumerator = msg.value*100;
        uint devShare = devShareNumerator/10000;
        uint gameShare = msg.value - devShare;
        uint floor = gameShare/2;
        developerOnePercent += devShare;
        jackpot += floor;
        divPool += gameShare - floor; 
        divTracker[msg.sender]._keyBalance += _numKeys;
        totalKeys += _numKeys;
        /// @notice In case the game has a slow start (no players), or the clock goes over 24 hours, set the clock to 24 hours.
        if (_numKeys * increment > startTime - (totalTime-block.timestamp) || (totalKeys < 5)) {
            letTheGamesBegin();
        } else {
            totalTime += _numKeys * increment;
        }

        winning = msg.sender;
        
        _safeMint(msg.sender, _numKeys);
        
        emit keysPurchased(_numKeys, winning);

    } 
    /**
     * @dev returns which address is currently winning. 
    */
    function getWinner() public view returns(address) {
        return winning;
    }

    /**
     * @dev returns which address is currently winning. 
    */
    function getTotalKeysPurchased() public view returns(uint) {
        return totalKeys;
    }

    /**
     * @notice Tracks each player's claimable dividends.
     * EXAMPLE: (UserKeys/TotalKeys)*TotalDividendPool - UserPreviousWithdrawals
     * The ratio of a user's keys to all keys purchased determines the proportion of the entire
     * dividend pool the user is entitled to. Subtracting any amount the user has already withdrawn.
    */
    function getClaimableDivvies(address _userAddress) public view returns(uint) {
        if (totalKeys == 0 ) {
            return 0;
        }
        uint claimableDivvies;
        uint tempNumerator;
        tempNumerator = divTracker[_userAddress]._keyBalance * divPool;
        claimableDivvies = tempNumerator/totalKeys - divTracker[_userAddress]._withdrawnAmount;
        return claimableDivvies;
    }
    /**
     * @dev Withdraw caller's dividends
    */
    function withdrawDivvies() public {
        uint claimableDivvies = getClaimableDivvies(msg.sender);
        if (claimableDivvies <= 0) revert NoDivviesToClaim();
        address payable to = payable(msg.sender);
        to.transfer(claimableDivvies);
    }

    /**
     * @notice Criteria to claim jackpot:
     * 1.) The game must be over (i.e. timer at zero).
     * 2.) User must be the winner (only winner can withdraw jackpot).
     * 3.) Jackpot must have a non-zero balance.
    */
    function jackpotPayout() public {
        if (getTimeLeft() != 0) revert GameActive();
        if (jackpot == 0) revert JackpotEmpty();
        if (msg.sender != winning) revert NotWinner();
        address payable to = payable(winning);
        to.transfer(jackpot);
        /**
         * @dev Yes I know the solidity static analyzer flags this as being susceptible
         * to a reentry attack, but look at the require statements.
        */  
        jackpot = 0;
    }

    function whoWon() public view returns(address winner){
        if (getTimeLeft() == 0) {
            return winning;
        }
        revert GameActive();
    }
    /**
     * @notice The developer can call this function IFF the game is over.
    */
    function developerOnePercentAllocation(address _developerAddress) public {
        if (msg.sender != developer) revert NotDeveloper();
        if (getTimeLeft() != 0) revert GameActive();
        address payable to = payable(_developerAddress);
        to.transfer(developerOnePercent);
        developerOnePercent = 0;
    }

    function setRenderer(Renderer _renderer) public {
        if (msg.sender != developer) revert NotDeveloper();
        renderer = _renderer;
    }

    // save bytecode by removing implementation of unused method
    function _baseURI() internal view virtual override returns (string memory) {}

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return renderer.render(tokenId);
    }

    function numberMinted(address owner) public view returns (uint256) {
        return _numberMinted(owner);
    }

    /** 
     * @notice [REMOVE] testing function to mine a block in hardhat.
    */
    function incrementCounter() public payable returns(uint){
        counter += 1;
        return counter;
    }
}
