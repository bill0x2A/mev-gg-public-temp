import * as React from 'react'
import { useAccount } from 'wagmi'

import { Account, Connect, NetworkSwitcher, Balance, Fomo, FomoBuyKey } from '../components'

const Page = () => {
  const [{ data: accountData }] = useAccount()

  if (accountData?.address)
    return (
      <>
        <Account />
        <NetworkSwitcher />
        <Balance/>
        <Fomo/>
        <FomoBuyKey/>
      </>
    )

  return <Connect />
}

export default Page
