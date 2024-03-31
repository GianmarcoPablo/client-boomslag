import {
    Activity,
    CreditCard,
    DollarSign,
    Users,
} from "lucide-react"



import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ApplyJob } from "@/interfaces/jobs/get-apply-jobs"

interface Props {
    favorites: FavoriteJobs[] | undefined
    applyJobs: ApplyJob[] | undefined
}

export default function UserInfo({ favorites, applyJobs }: Props) {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card className="bg-darkColorPrimary text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Trabajos Publicados
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">4</div>
                    <p className="text-xs text-white">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>
            <Card className="bg-darkColorPrimary text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Empresas Registradas
                    </CardTitle>
                    <Users className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-white">
                        +180.1% from last month
                    </p>
                </CardContent>
            </Card>
            <Card className="bg-darkColorPrimary text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Trabajos Favoritos
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        {favorites?.length ? favorites.length : 0}
                    </div>
                    <p className="text-xs text-white">
                        +19% from last month
                    </p>
                </CardContent>
            </Card>
            <Card className="bg-darkColorPrimary text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Trabajos Postulados
                    </CardTitle>
                    <Activity className="h-4 w-4 text-white" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        {applyJobs?.length ? applyJobs.length : 0}
                    </div>
                    <p className="text-xs text-white">
                        +201 since last hour
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
