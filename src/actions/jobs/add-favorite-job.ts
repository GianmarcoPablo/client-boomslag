import { useAuthStore } from "@/store/auth-store"
import instance from "@/config/axios"

export const addFavoriteJob = async (jobId: string | undefined) => {
    try {
        const { perfil } = useAuthStore.getState()
        const { data } = await instance.post(`/jobs/action/favorite`, { jobId, userId: perfil.id })
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}