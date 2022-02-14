import { useContractRead } from 'wagmi'
import contractAddress from "../contracts/fomo-contract-address.json";
import FomoOEArtifact from "../contracts/fomoOE.json";

export const Fomo = () => {
    const [{ data, error, loading }, read] = useContractRead({
        addressOrName: contractAddress.FomoOE,
        contractInterface: FomoOEArtifact.abi,
    },
        "getTimeLeft")

    if (loading) return <div>Fetching time left...</div>
    if (error) return <div>Error fetching time left</div>
    console.log(data)
    return (
        <div>
            <div>Time left: {data?.toString()}</div>
        </div>
    )
}