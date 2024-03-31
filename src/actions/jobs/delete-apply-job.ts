import instance from "@/config/axios";

export const deleteApplyJob = async (id: string | undefined) => {
    try {
        const rpta = await instance.delete(`/jobs/action/apply/${id}`);
        return rpta.data;
    } catch (error) {
        throw error;
    }
};