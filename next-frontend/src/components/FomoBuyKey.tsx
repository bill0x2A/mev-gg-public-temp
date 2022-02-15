import { useContractWrite } from 'wagmi'
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/fomoOE.json";
import { useIsMounted } from '../hooks'

export const FomoBuyKey = () => {
    const isMounted = useIsMounted()

    const [{ data, error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "purchaseKeys")

    if (loading) return <div>Fetching time left...</div>
    if (error) return <div>Error fetching time left</div>
    console.log(data)
    return (
        <div>
            <div>
                <button
                onClick={() => write({args: [1]})}
            >
                {isMounted ? "Buy key" : "Mounting"}
                {loading && '…'}
            </button>
            </div>
        </div>
    )
}