import * as React from 'react'
import { useConnect, useAccount } from 'wagmi'
import { Box, Button } from '@chakra-ui/react'; 

import { useError, useIsMounted } from '../hooks'

export const Connect = () => {
  const isMounted = useIsMounted()
  const [
    {
      data: { connectors },
      error,
      loading,
    },
    connect,
  ] = useConnect()

  useError(error);

  return (
      <Box>
        {connectors.map((connector) => (
          <Button
            disabled={isMounted && !connector.ready}
            key={connector.name}
            marginLeft={'5px'}
            onClick={() => connect(connector)}
          >
            {connector.id === 'injected' ? (isMounted ? connector.name : connector.id) : connector.name}
            {isMounted && !connector.ready && ' (unsupported)'}
            {loading && connector.name === connector?.name && '…'}
          </Button>
        ))}
      </Box>
  )
}
