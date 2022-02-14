import * as React from 'react'
import { useAccount } from 'wagmi'

import { Account, Connect, NetworkSwitcher, TokenBalance, Fomo, FomoBuyKey } from '../components'

const Page = () => {
  const [{ data: accountData }] = useAccount()

  if (accountData?.address)
    return (
      <>
        <Account />
        <NetworkSwitcher />
        <Fomo />
        <TokenBalance />
        <FomoBuyKey />

      </>
    )

  return <Connect />
}

export default Page
