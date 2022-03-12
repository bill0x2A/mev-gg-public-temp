import * as React from 'react'
import { useAccount } from 'wagmi'
import {
  Flex,
  Center,
} from '@chakra-ui/react';

import {
  Card,
  Navbar
} from '../components'

const Page = () => {
  const [{ data: accountData }] = useAccount();

  return (
    <>
      <Navbar/>
      {accountData?.address
        ? <Flex
          my='20px'
          minHeight={'calc(100vh - 100px)'}
          justifyContent='center'>
          <Center>
            <Card/>
          </Center>
        </Flex>
        : null}
      </>
  );
}

export default Page
