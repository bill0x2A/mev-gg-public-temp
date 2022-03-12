import { useContractWrite } from 'wagmi'
import { Box, Flex, Text, keyframes } from '@chakra-ui/react';
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { useIsMounted, useError } from '../hooks'
import { ethers } from "ethers";
import { GiBossKey } from 'react-icons/gi';

export const FomoBuyKey: React.FC = () => {
    const isMounted = useIsMounted()

    const [{ data, error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "purchaseKeys",
    {
        args: [1],
        overrides: { value: ethers.utils.parseEther(".05")}
    });

    useError(error);

    const spin = keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }`

    const float = keyframes`
        from { transform: translateY(0px); }
        to { transform: translateY(-8px); }`
    
    const loadingAnimation = `${spin} infinite 0.75s ease-in-out`;
    const idleAnimation = `${float} infinite alternate 1.2s ease-in-out`;

    return (
        <Box>
            <Box>
                <Flex
                    transition='all 150ms ease-in-out'
                    marginBottom='25px'
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent='center'
                    onClick={() => write()}
                    background='#C20114'
                    borderRadius={'100%'}
                    width='180px'
                    height='180px'
                    cursor={'pointer'}
                    border='5px solid white'
                    _hover={{
                        background: 'rgba(255,255,255,0.4)'
                    }}>
                    <Box animation={loading ? loadingAnimation : idleAnimation}>
                        <GiBossKey color='gold' fill='gold' size='100px'/>
                    </Box>
                    <Text fontWeight={600}>{loading ? 'Buying... ': 'Buy Key'}</Text>
                </Flex>

            </Box>
        </Box>
    )
}