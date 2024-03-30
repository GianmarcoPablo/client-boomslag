import instance from "@/config/axios";
import { useAuthStore } from "@/store/auth-store";
export const getFavoritesJobs = async () => {

    const { perfil, isAuth } = useAuthStore.getState()
    try {
        if (isAuth == 'authenticated') {
            const { data } = await instance.get(`/jobs/action/favorite/${perfil.id}`)
            return data as FavoriteJobs[]
        }

    } catch (error) {
        console.error(error)
    }
}