import * as React from 'react'
import {
  Box,
  Button,
  Image,
} from '@chakra-ui/react';
import { useAccount } from 'wagmi'

export const Account: React.FC = () => {
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  })

  if (!accountData) return <Box>No account connected</Box>

  return (
    <Box>
      <Box
        p='5px 12px'
        background='rgba(255,255,255,0.1)'
        textDecoration='none'
        borderRadius={'5px'}
        _hover={{
          background: 'rgba(255,255,255,0.2)',
        }}>
        {accountData?.ens?.name ?? accountData?.address}
        {accountData?.ens ? ` (${accountData?.address})` : null}
      </Box>

      {accountData?.ens?.avatar && (
        <Image src={accountData.ens.avatar} height={'40px'} width={'40px'} />
      )}
    </Box>
  )
}
