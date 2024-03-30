import { getAllJobs } from "@/actions/jobs/get-all-jobs"
import ContainerOneJob from "@/components/my-components/container-one-job/ContainerOneJob"
import FilterJobsDesktop from "@/components/my-components/filter-job-desktop/FilterJobDesktop"
import FilterJobsMobile from "@/components/my-components/filter-job-mobile/FilterJobMobile"
import SkeletonJob from "@/components/my-components/skeleton-job/SkeletonJob"
import { useQuery } from "react-query"
import ErrorBoundary from "@/ErrorBoundary"
import { GetAllJobsResponse } from "@/interfaces/jobs/get-all-jobs.response"



export default function JobsPage() {

    const { data, isLoading, isError } = useQuery({ queryKey: ['jobs'], queryFn: getAllJobs })
    if (isError) return <div>Error al cargar los datos</div>

    return (
        <ErrorBoundary>
            <div className="2xl:mx-14">
                <aside className=" my-5 xl:hidden">
                    <FilterJobsMobile />
                </aside>
                <div className="xl:grid grid-cols-8 mt-4">
                    <aside className="hidden xl:block xl:col-span-2">
                        <FilterJobsDesktop />
                    </aside>
                    <main className="px-5 xl:col-span-6 overflow-y-auto max-h-screen">
                        <h1 className={` text-2xl font-bold uppercase `}>Encuentra el trabajo que buscas</h1>
                        {isLoading && !data ? (
                            Array.from({ length: 10 }).map((_, index) => (
                                <SkeletonJob key={index} />
                            ))
                        ) : (
                            data?.jobs.map(job => (
                                <ContainerOneJob key={job.id} job={job} />
                            ))
                        )}
                    </main>
                </div>
            </div>
        </ErrorBoundary>
    )
}
