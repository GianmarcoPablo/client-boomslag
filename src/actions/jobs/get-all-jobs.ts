import { GetAllJobsResponse } from "@/interfaces/jobs/get-all-jobs.response"
import instance from "@/config/axios"
export const getAllJobs = async (): Promise<GetAllJobsResponse> => {
    try {
        const { data } = await instance.get("/jobs")
        return data as GetAllJobsResponse
    } catch (error) {
        throw error
    }
}