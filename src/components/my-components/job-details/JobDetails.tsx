import { Building2, Cuboid, DollarSign, ExpandIcon, MapPin, Medal, Timer, User } from 'lucide-react'
import { useMutation, useQueryClient } from 'react-query'
import { applyJobPost } from '@/actions/jobs/apply-job'
import { deleteApplyJob } from '@/actions/jobs/delete-apply-job'
import { Job } from '@/interfaces/jobs/get-all-jobs.response'

interface Props {
    data: Job | undefined
    isApply: boolean | undefined
}

export default function JobDetails({ data, isApply }: Props) {

    const { mutate: applyJob, isLoading, isSuccess } = useMutation({ mutationFn: () => applyJobPost(data?.id) })
    const { mutate: deleteApply, isSuccess: deleleteSucess } = useMutation({ mutationFn: () => deleteApplyJob(data?.id) })
    const queryClient = useQueryClient()

    if (isSuccess) {
        queryClient.invalidateQueries('applyJobs')
    }

    if (deleleteSucess) {
        queryClient.invalidateQueries('applyJobs')
    }

    return (
        <div className="mt-5 p-3 md:p-5">

            <div>
                <h3 className='text-xl font-semibold mb-2'>Detalles de la oferta</h3>
            </div>

            <div className="flex gap-3 items-center mb-3">
                <DollarSign />
                <div className="flex items-center">
                    <p className="text-witheColorSecondary">
                        S/.{data?.jobMinSalary ? data?.jobMinSalary : 'No especificado'}
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-witheColorSecondary">
                        -
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-witheColorSecondary">
                        S/.{data?.jobMaxSalary ? data?.jobMaxSalary : 'No especificado'}
                    </p>
                </div>
            </div>



            <div className="flex gap-3 items-center mb-3">
                <Building2 />
                <p>
                    {data?.jobModality ? data?.jobModality : 'No especificado'}
                </p>
            </div>
            <div className="flex gap-3 items-center mb-3">
                <MapPin />
                <p>
                    {data?.jobLocation ? data?.jobLocation : 'No especificado'}
                </p>
            </div>
            <div className="flex gap-3 items-center mb-3">
                <Cuboid />
                <p>
                    {data?.Area?.nameArea ? data.Area.nameArea : 'No especificado'}
                </p>
            </div>
            <div className="flex gap-3 items-center mb-3">
                <ExpandIcon />
                <p>
                    {data?.jobYearsExp ? data.jobYearsExp : 'No especificado'}
                </p>
            </div>
            <div className="flex gap-3 items-center mb-3">
                <Timer />
                <p>
                    {data?.jobWorkLoad ? data.jobWorkLoad : 'No especificado'}
                </p>
            </div>
            <div className="flex gap-3 items-center mb-3">
                <Medal />
                <p>
                    {data?.jobLevel ? data.jobLevel : 'No especificado'}
                </p>
            </div>
            <div className="flex gap-3 items-center mb-3">
                <User />
                <p>
                    {data?.jobVacancies ? data.jobVacancies : 'No especificado'}
                </p>
            </div>
            <div className="mt-5">

                <div>
                    <h3 className='text-xl font-semibold mb-2'>Idiomas</h3>
                </div>

                <div className="flex gap-3 items-center mb-3">
                    <p>Ingles</p>
                </div>
                <div>
                    <button
                        onClick={() => isApply ? deleteApply() : applyJob()}
                        // className='bg-darkColorSecondary uppercase hover:bg-colorSecondary transition-colors text-white w-full py-2 rounded-md'
                        className={`uppercase w-full py-2 rounded-md ${isApply ? 'bg-red-500' : 'bg-darkColorSecondary'} hover:bg-colorSecondary transition-colors text-white`}
                    >
                        {
                            isLoading ? 'Aplicando...' : isApply ? 'Ya te postulaste' : 'Postularme'
                        }
                    </button>
                </div>
            </div>
        </div>

    )
}
