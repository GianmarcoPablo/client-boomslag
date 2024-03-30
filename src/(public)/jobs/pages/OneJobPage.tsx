import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { getOneJob } from "@/actions/jobs/get-one-job"
import { getFavoritesJobs } from "@/actions/jobs/get-favorites-jobs"
import { ExternalLink } from "lucide-react"
import Loading from "@/components/my-components/loading/Loading"
import JobDetails from "@/components/my-components/job-details/JobDetails"
import JobInfo from "@/components/my-components/job-info/JobInfo"

export default function OneJobPage() {

    const { id } = useParams()

    const { data, isLoading, isFetching } = useQuery({ queryKey: ["job"], queryFn: () => getOneJob(id) })
    const { data: favoriteJobs } = useQuery({ queryKey: ['favorites'], queryFn: getFavoritesJobs })

    const isFavorite = favoriteJobs?.some(data => data.jobId === id)

    if (isLoading || isFetching) return <Loading />

    return (
        <main className="2xl:mx-14">
            <div className="bg-gray-100 mt-2 md:my-3 p-3 md:p-5 mx-4 shadow-lg">
                <h1 className="font-bold text-xl md:text-4xl md:font-black text-darkColorSecondary">
                    {data?.jobTitle}
                </h1>
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-darkColorPrimary md:text-2xl md:font-bold">
                        {data?.Company?.nameCompany}
                    </h2>
                    <ExternalLink size={20} className="text-darkColorPrimary font-semibold md:font-bold" />
                </div>
            </div>

            <div className="md:my-7 mx-4">
                <aside className=' rounded-md '>
                    <div className="lg:grid md:grid-cols-6 lg:gap-10">
                        <div className="md:col-span-4 bg-gray-100 p-3 md:p-5 shadow-lg">
                            <JobInfo data={data} isFavorite={isFavorite} />
                        </div>

                        <div className="md:col-span-2 bg-gray-100 shadow-lg">
                            <JobDetails data={data} />
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}
