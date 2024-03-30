import instance from "@/config/axios"
import { Job } from "@/interfaces/jobs/get-all-jobs.response"

export const getOneJob = async (jobId: string | undefined): Promise<Job | undefined> => {
    try {
        const { data } = await instance.get(`/jobs/${jobId}`)
        return data as Job
    } catch (error) {
        throw error
    }
}