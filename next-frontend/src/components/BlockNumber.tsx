import * as React from 'react'
import { Box, Flex } from '@chakra-ui/react';
import { SiHiveBlockchain } from 'react-icons/si';
import { useBlockNumber } from 'wagmi'

export const Blocknumber = () => {
  const [{ data: blockData, error, loading }, getBlockNumber] = useBlockNumber({
    watch: false
  })

  const blockNumberText = React.useMemo(() => {
    if (loading) return 'Fetching blocknumber...'
    if (error) return 'Error fetching blocknumber'
    if (!blockData) return 'Error fetching blocknumber'
    return `Block number: ${blockData}`
}, [loading, error, blockData])

  return (
    <Box>
        <Flex
            width='100%'
            alignItems={'center'}
            justifyContent='space-between'>
            <Box marginRight='10px'><SiHiveBlockchain fill='white'/></Box>
            <strong>{blockNumberText}</strong>
        </Flex>
    </Box>
)
}