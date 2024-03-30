import { TriangleAlert } from "lucide-react";
import FavoriteJob from "../favorite-job/FavoriteJob";
import { Job } from "@/interfaces/jobs/get-all-jobs.response";

interface Props {
    data: Job | undefined,
    isFavorite: boolean | undefined
}

export default function JobInfo({ data, isFavorite }: Props) {
    return (
        <div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <p className='text-lg font-semibold md:text-2xl'>Descripción</p>
                    <div className="flex gap-3 items-center">
                        <TriangleAlert className="cursor-pointer h-6 w-6" />
                        <FavoriteJob
                            jobId={data?.id}
                            isFavorite={isFavorite}
                        />
                    </div>
                </div>
                <p className='text-base'>
                    {data?.jobDescription}
                </p>
            </div>
            <div className='mt-2'>
                <div className="flex items-center justify-between">
                    <p className='text-lg font-semibold'>Skills:</p>
                </div>
                <ul className='text-base list-disc pl-5'>
                    {
                        data?.jobSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='mt-2'>
                <div className="flex items-center justify-between">
                    <p className='text-lg font-semibold'>Beneficios</p>
                </div>
                <ul className='text-base list-disc pl-5'>
                    {
                        data?.jobBenefits.length
                            ? data?.jobBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))
                            : 'No especificado'
                    }
                </ul>
            </div>

            <div className='mt-2'>
                <div className="flex items-center justify-between">
                    <p className='text-lg font-semibold'>Responsabilidades</p>
                </div>
                <ul className='text-base list-disc pl-5'>
                    {
                        data?.jobBenefits.length
                            ? data?.jobResponsabilities.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))
                            : 'No especificado'
                    }
                </ul>
                <div className='mt-2'>
                    <div className="flex items-center justify-between">
                        <p className='text-lg font-semibold'>Habilidades</p>
                    </div>
                    <ul className='text-base list-disc pl-5'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. incidunt velit neque architecto</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. incidunt velit neque architecto</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. incidunt velit neque architecto</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. incidunt velit neque architecto</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
