import TableComponent from "@/components/my-components/table/Table"
import UserInfo from "@/components/my-components/user-info/UserInfo"
import InfoCard from "@/components/my-components/info-card/InfoCard"
import { useQuery } from "react-query"
import { getFavoritesJobs } from "@/actions/jobs/get-favorites-jobs"
import { getApplyJobs } from "@/actions/jobs/get-apply-jobs"

export default function DashBoardPage() {

    const { data: favoriteJobs, isLoading: loadingFavorites } = useQuery({ queryKey: ['favorites'], queryFn: getFavoritesJobs })

    const { data: applyJobs, isLoading: loadingApplyJobs } = useQuery({ queryKey: ['applyJobs'], queryFn: getApplyJobs })

    if (loadingFavorites || loadingApplyJobs) return <div>Loading...</div>

    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <UserInfo 
                    favorites={favoriteJobs}
                    applyJobs={applyJobs}
                />
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <TableComponent />
                    <InfoCard />
                </div>
            </main>
        </div>
    )
}
