import { useContractRead, useBlockNumber } from 'wagmi'
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import * as dayjs from 'dayjs'
import * as duration from 'dayjs/plugin/duration' // import plugin
import * as relativeTime from 'dayjs/plugin/relativeTime' // import plugin

dayjs.extend(duration)
dayjs.extend(relativeTime)


export const Fomo = () => {
    const [{ data, error, loading }, read] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "getTimeLeft",
        {
            watch: true,
    })

    if (loading) return <div>Fetching time left...</div>
    if (error) return <div>Error fetching time left</div>
    if (!data) return <div>Error fetching time left</div>
    console.log(data.toNumber())
    return (
        <div>
            <div>Time left: {dayjs.duration(data.toNumber(), 'seconds').humanize()}</div>
        </div>
    )
}