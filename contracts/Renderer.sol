//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import './SVG.sol';
import './Utils.sol';
import "@openzeppelin/contracts/utils/Base64.sol";

contract Renderer {
    function render(uint256 _tokenId) public pure returns (string memory) {
        string memory returnedSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 25 28" shape-rendering="crispEdges" background="#000">';
        returnedSvg = string.concat(returnedSvg,
                '<path stroke="#000000" d="M11 1h2M14 1h2M10 2h1M16 2h1M14 4h1M15 5h1M10 7h1M15 7h1M10 8h1M13 8h1M10 9h1M10 10h1M13 10h1M10 11h1M13 11h1M10 12h1M10 13h1M13 13h1M13 14h1M10 15h1M13 15h1M13 16h1M10 17h1M9 19h1M11 20h2M15 20h1M10 21h1M8 22h1M10 22h1M13 22h1M15 22h1M10 23h1M13 23h1M8 24h1M15 24h1M14 25h1M10 26h3"/>',
                '<path stroke="#010000" d="M13 1h1M10 5h1M10 6h1M10 14h1M8 21h1M15 21h1"/>',
                '<path stroke="#f2d756" d="M11 2h1M11 5h1M11 9h1M11 14h1M11 18h1M9 24h1"/>',
                '<path stroke="#f2d656" d="M12 2h2M11 3h2M11 4h1M11 7h1M11 8h1M11 10h1M11 11h1M11 13h1M11 15h1M11 16h1M11 17h1M9 20h1M9 21h1M9 22h1M9 23h1"/>',
                '<path stroke="#d4aa0d" d="M14 2h2M13 3h2M12 4h2M13 5h2M12 6h4M12 8h1M12 9h1M12 10h1M12 11h1M12 12h1M12 15h1M12 16h1M12 17h1M12 18h1M10 19h4M10 20h1M13 20h1M14 23h1M10 24h1M13 24h2M10 25h1M13 25h1"/>',
                '<path stroke="#000001" d="M10 3h1M13 7h1M10 16h1M13 18h1M14 19h1M8 20h1M13 21h1M12 24h1M9 25h1"/>',
                '<path stroke="#000100" d="M15 3h1M10 4h1M16 6h1M10 18h1M8 23h1M15 23h1M11 24h1M13 26h1"/>',
                '<path stroke="#d4ab0d" d="M12 5h1M12 14h1M14 20h1"/>',
                '<path stroke="#f3d656" d="M11 6h1"/>',
                '<path stroke="#d4aa0c" d="M12 7h1M12 13h1M14 22h1"/>',
                '<path stroke="rgba(0,1,0,0.9529411764705882)" d="M14 7h1"/>',
                '<path stroke="#000101" d="M13 9h1"/>',
                '<path stroke="#f3d657" d="M11 12h1"/>',
                '<path stroke="#010001" d="M13 12h1M13 17h1"/>',
                '<path stroke="#d5aa0d" d="M14 21h1M11 25h2" />',
                '</svg>'
            );
        bytes memory attributes = generateAttributesJSON(_tokenId);
        return
            string(
                abi.encodePacked(
                    'data:application/json;base64,',
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"description":"A unique Shield, designed and built on-chain. 1 of 5000.", "image": "data:image/svg+xml;base64,',
                                Base64.encode(bytes(returnedSvg)),
                                '", "attributes": ',
                                attributes,
                                '}'
                            )
                        )
                    )
                )
            );   
    }

    function generateAttributesJSON(uint256 _tokenId) internal pure returns (bytes memory attributesJSON) {
        attributesJSON = abi.encodePacked(
            '[{"trait_type":"Key number", "value":"',
            _tokenId,
            '"}, {"trait_type":"Hardware", "value":"',
            "key"
        );
        return attributesJSON;
    }

}


    // function example() external pure returns (string memory) {
    //     return render(1);
    // }