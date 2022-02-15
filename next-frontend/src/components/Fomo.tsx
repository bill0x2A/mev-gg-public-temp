import { useContractRead } from 'wagmi'
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";

export const Fomo = () => {
    const [{ data, error, loading }, read] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
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