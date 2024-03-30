"use client"
import { Building2, Heart, Map } from 'lucide-react'
import { Job } from '@/interfaces/jobs/get-all-jobs.response'
import FavoriteJob from '../favorite-job/FavoriteJob'
import { Link } from 'react-router-dom'
import { getFavoritesJobs } from '@/actions/jobs/get-favorites-jobs'
import { useQuery } from 'react-query'

interface Props {
    job: Job
}



export default function ContainerOneJob({ job }: Props) {

    const { data } = useQuery({ queryKey: ['favorites'], queryFn: getFavoritesJobs })

    const isFavorite = data?.some(data => data.jobId === job.id)


    return (
        <div className="bg-gray-100 p-3 md:p-5 rounded-md my-6 shadow-md hover:shadow-xl hover:shadow-color transition-all">
            <div className='xl:grid xl:grid-cols-8'>
                <div className='xl:col-span-6'>
                    <Link to={`/jobs/${job.id}`}>
                        <div className="flex justify-between">
                            <h1 className="font-bold text-lg md:text-2xl text-darkColorSecondary">{job.jobTitle}</h1>
                            <Heart className="md:hidden w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-subtitle font-semibold text-lg">{job.Company.nameCompany}</p>
                            <p className="text-sm">Publicado hace 2 semana</p>
                        </div>
                        <p className='text-textSecondary'>{job.jobDescription}</p>
                    </Link>
                </div>
                <div className='xl:col-span-2 '>
                    <div className='flex justify-between'>
                        <div>
                            <div className="flex items-center gap-3">
                                <Building2 className="w-6 h-6" />
                                <p>{job.jobModality ? job.jobModality : 'No especificado'}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Map className="w-6 h-6" />
                                <p>{job.jobLocation ? job.jobLocation : 'No especificado'}</p>
                            </div>
                        </div>
                        <FavoriteJob
                            isFavorite={isFavorite}
                            jobId={job.id}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}