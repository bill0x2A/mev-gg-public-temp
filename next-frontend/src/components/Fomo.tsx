import * as React from 'react';
import { useContractRead } from 'wagmi'
import { Box, Flex } from '@chakra-ui/react';
import { BsFillClockFill } from 'react-icons/bs';
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import * as dayjs from 'dayjs'
import * as duration from 'dayjs/plugin/duration' // import plugin
import * as relativeTime from 'dayjs/plugin/relativeTime' // import plugin

dayjs.extend(duration.default)
dayjs.extend(relativeTime.default)

export const Fomo: React.FC = () => {
    const [{ data, error, loading }] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "getTimeLeft",
        {
            watch: true,
    })

    const timeLeftText = React.useMemo(() => {
        if (loading) return <Box>Fetching time left...</Box>
        if (error || !data ) return <Box>Error fetching time left</Box>
        const timeRemaining = dayjs.duration(data.toNumber(), 'seconds').humanize()
        return `Time left: ${timeRemaining}`;
    }, [loading, error, data]);

    return (
        <Box>
            <Flex
                width='100%'
                alignItems={'center'}
                justifyContent='space-between'>
                <Box marginRight='10px'><BsFillClockFill fill='white'/></Box>
                <strong>{timeLeftText}</strong>
            </Flex>
        </Box>
    )
}