import instance from "@/config/axios";
import { useAuthStore } from "@/store/auth-store";
import { ApplyJob } from "@/interfaces/jobs/get-apply-jobs";
export const getApplyJobs = async () => {
    try {
        const { perfil } = useAuthStore.getState();
        const response = await instance.get(`/jobs/action/apply/${perfil.id}`);
        return response.data as ApplyJob[];
    } catch (error) {
        throw error;
    }
};