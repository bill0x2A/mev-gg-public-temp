//SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "hardhat/console.sol";

/**
 * @title A rugpull opportunity for anyone
*/
contract FomoOE {
    address public developer;
    uint public developerOnePercent;
    uint public giveToDeveloper;
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
    uint public keyPurchases;
    uint public divPool;
    uint public jackpot;
    uint public counter;
    
    struct Divvies {
        uint _keyBalance;
        uint _divBalance;
        uint _withdrawnAmount;
    }
    mapping(address => Divvies) public divTracker;

    event keysPurchased(uint _amount, address _winning);
    
    constructor(uint _startTime, uint _increment, uint _keyPrice) {
        /**
        * @notice developer address is used to withdraw 1% depending on the outcome
        * of the vote. Developer address has NO more privileges than any other address.  
        */
        developer = msg.sender;
        startTime = _startTime;
        increment = _increment;
        keyPrice = _keyPrice;
    }

    /**
     * @dev put 24 (or 86,400 seconds) hours on the clock to start the game
     */
    function letTheGamesBegin() private {
        // console.log("Starting games");
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
        } else {
            return 0;
        }
    }
    /**
     * @dev holds a logic for key price increase, adding time per key,
     * updating player's key balance, allocating funds, and setting the current winning player.
     * @notice If multiple key purchases are made a the end of the game, 
     * the winner will be the address who gets included FIRST in the game ending block.
    */
    function purchaseKeys(uint _amount) public payable {
        /// @notice Incase the game has a slow start (no players), the first 5 key purchases set the clock to 24 hours. 
        if (totalKeys == 0 || keyPurchases < 5) {
            letTheGamesBegin();
        } 
        /// @notice Not sure why anyone would, but you can't buy keys after the game ends.
        require(getTimeLeft() > 0, "there is already a winner");
        console.log(getTimeLeft());
        /** 
         * @dev Key price can only increase once per block. Without this if/else
         * statement, there could only be one key purchase per block.
         * Example: Alice and Bob purchase keys at the exact same time, thus paying the
         * same price for their keys. Both transactions get mined in the same block. Due to
         * the sequential nature of transactions in the EVM, Alice's transaction gets processed,
         * she gets her keys, and updates the key price. Bob's transaction gets processed next which
         * fails because the key price has been updated by Alice, despite both paying the correct price. 
        */
        // console.log("Ether sent", msg.value);
        // console.log("Ether cost", keyPrice*_amount);
        require(msg.value >= keyPrice*_amount, "Not enough to buy the key(s)");

        uint devShareNumerator = msg.value*100;
        uint devShare = devShareNumerator/10000;
        uint gameShare = msg.value - devShare;
        uint floor = gameShare/2;
        developerOnePercent += devShare;
        jackpot += floor;
        divPool += gameShare - floor; 
        divTracker[msg.sender]._keyBalance += _amount;
        totalKeys += _amount;
        console.log(totalKeys);
        if (_amount * increment > startTime - (totalTime-block.timestamp)) {
            letTheGamesBegin();
        } else {
            totalTime += _amount * increment;
        }

        keyPurchases += 1;
        winning = msg.sender;
        emit keysPurchased(_amount, winning);

    } 
    /**
     * @dev returns which address is currently winning. 
     * I know this is redundant but it just needs to be here.
    */
    function getWinner() public view returns(address) {
        return winning;
    }
    /**
     * @notice Tracks each player's dividends.
     * EXAMPLE: (UserKeys/TotalKeys)*TotalDividendPool - UserPreviousWithdrawls
     * The ratio of a user's keys to all keys purchased determines the proportion of the entire
     * dividend pool the user is entitled to. Subtracting any amount the user has already withdrawn.
    */
    function updateDivvies(address _userAddress) public view returns(uint) {
        uint tempUserWithdrawAmount;
        uint tempNumerator;
        if (totalKeys == 0 ) {
            tempUserWithdrawAmount = 0;
        } else {
            tempNumerator = divTracker[_userAddress]._keyBalance * divPool;
            tempUserWithdrawAmount = tempNumerator/totalKeys - divTracker[_userAddress]._withdrawnAmount;  
        }  
        return tempUserWithdrawAmount;
    }
    /**
     * @dev Contains the same 'on-the-fly' calculations as the updateDivvies function,
     * as well as setting that user's withdrawn amount.
     * Ah crap, I've been using "withdraw" instead of "withdrawal" throughout the code.
    */
    function withdrawDivvies() public {
        address payable to = payable(msg.sender);
        uint tempUserWithdrawAmount;
        uint tempNumerator;
        if (totalKeys == 0 ) {
            tempUserWithdrawAmount = 0;
        } else {
            tempNumerator = divTracker[msg.sender]._keyBalance * divPool;
            tempUserWithdrawAmount = tempNumerator/totalKeys - divTracker[msg.sender]._withdrawnAmount;
            divTracker[msg.sender]._withdrawnAmount += tempUserWithdrawAmount;
        }  
        require(tempUserWithdrawAmount > 0, "You have no divvies to claim");
        to.transfer(tempUserWithdrawAmount);
    }

    /**
     * @notice Criteria to claim jackpot:
     * 1.) The game must be over (i.e. timer at zero).
     * 2.) User must be the winner (only winner can withdraw jackpot).
     * 3.) Jackpot must have a non zero balance (I can't blame you for trying to withdraw it twice).
    */
    function jackpotPayout() public {
        require(getTimeLeft() == 0, "game is still in play");
        require(jackpot > 0, "No money in jackpot");
        require(msg.sender == winning, "you are not the winner");
        address payable to = payable(winning);
        to.transfer(jackpot);
        /**
         * @dev Yes I know the solidity static analyzer flags this as being susceptible
         * to a reentry attack, but look at the require statements.
        */  
        jackpot = 0;
    }

    function whoWon(address _userAddress) public view returns(address winner){
        if (getTimeLeft() == 0 && _userAddress == winning) {
            winner = _userAddress;
            return winner;
        }
    }
    /**
     * @notice The game must be over and then I can call this function.
    */
    function developerOnePercentAllocation(address _developerAddress) public {
        require(msg.sender == developer, "you aren't the developer of this contract.");
        require(getTimeLeft() == 0, "game is still in play");
        address payable to = payable(_developerAddress);
        to.transfer(developerOnePercent);
        developerOnePercent = 0;
    }
    /** 
     * @notice [REMOVE] testing function to mine a block in hardhat.
    */
    function incrementCounter() public payable returns(uint){
        counter += 1;
        return counter;
    }
}
