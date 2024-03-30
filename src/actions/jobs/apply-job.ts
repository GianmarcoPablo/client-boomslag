import { useAuthStore } from "@/store/auth-store"
import instance from "@/config/axios"
export const applyJobPost = async (jobId: string | undefined) => {
    try {
        const { token } = useAuthStore.getState()
        const response = await instance.post('/jobs/action/apply', {
            jobId,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}