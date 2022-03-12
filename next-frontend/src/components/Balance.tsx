import * as React from 'react'
import { Flex, Box } from '@chakra-ui/react';
import { IoMdWallet } from 'react-icons/io';
import { useBalance } from 'wagmi'
import { useAccount } from 'wagmi'


export const Balance = () => {

  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })

  const [{ data: balance, error: e, loading: l }, getBalance] = useBalance({
    addressOrName: accountData?.address,
  })

  return (
    <Flex alignItems={'center'}>
      <Box marginRight='10px'><IoMdWallet fill={'white'}/></Box>
      <strong>Your Balance: {Number(balance?.formatted).toFixed(4)} {balance?.symbol}</strong>
    </Flex>
  )
}