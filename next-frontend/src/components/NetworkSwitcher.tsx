import * as React from 'react'
import {
  Box,
  Stack,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { useNetwork } from 'wagmi'

export const NetworkSwitcher = () => {
  const [{ data: networkData, error: switchNetworkError }, switchNetwork] =
    useNetwork()

  return (
    <Box p='10px'>
      <Box>
        Connected to {networkData.chain?.name ?? networkData.chain?.id}{' '}
        {networkData.chain?.unsupported && '(unsupported)'}
      </Box>
      <MenuDivider/>
      <Stack>
        {switchNetwork &&
          networkData.chains.map((x) =>
            x.id === networkData.chain?.id ? null : (
              <MenuItem key={x.id} onClick={() => switchNetwork(x.id)}>
                Switch to {x.name}
              </MenuItem>
            ),
          )}
      </Stack>
      {switchNetworkError && switchNetworkError?.message}
    </Box>
  )
}
