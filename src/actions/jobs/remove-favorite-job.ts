import instance from "@/config/axios"
export const removeFavoriteJob = async (jobId: string | undefined) => {
    try {
        const { data } = await instance.delete(`/jobs/action/favorite/${jobId}`)
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}