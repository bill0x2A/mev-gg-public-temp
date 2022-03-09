import { useContractWrite } from 'wagmi'
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { useIsMounted } from '../hooks'
import { ethers } from "ethers";

export const FomoBuyKey = () => {
    const isMounted = useIsMounted()

    const [{ data, error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "purchaseKeys",
    {
        args: [1],
        overrides: { value: ethers.utils.parseEther(".05")}
    })

    if (loading) return <div>Fetching time left...</div>
    if (error) return <div>Error buying key {JSON.stringify(error)}</div>
    console.log(data)
    console.log(error)
    return (
        <div>
            <div>
                <button
                onClick={() => write()}
            >
                {isMounted ? "Buy key" : "Mounting"}
                {loading && '…'}
            </button>
            </div>
        </div>
    )
}