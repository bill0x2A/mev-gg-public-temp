import * as React from 'react'
import { useBlockNumber } from 'wagmi'
import { useBalance } from 'wagmi'
import contractAddress from "../contracts/fomo-contract-address.json";
import { useAccount } from 'wagmi'


export const Balance = () => {
  const [{ data, error, loading }, getBlockNumber] = useBlockNumber({
    watch: true
  })
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })

  const [{ data: balance, error: e, loading: l }, getBalance] = useBalance({
    addressOrName: accountData?.address,
  })


  if (loading) return <div>Fetching balance…</div>
  if (error) return <div>Error fetching balance</div>
  return (
    <div>
      {balance?.formatted} {balance?.symbol}
      <div>Block number: {data}</div>
    </div>
  )
}