import { create } from "zustand";
import { persist } from "zustand/middleware";

type StatusAuth = "authenticated" | "not-authenticated" | "checking"
type UserRole = "user" | "admin" | null

interface Profile {
    id: number,
    name: string,
    role: string,
    email: string,
}

type State = {
    token: string,
    perfil: Profile,
    isAuth: StatusAuth,
    role: UserRole,
}

type Actions = {
    setToken: (token: string) => void,
    setProfile: (profile: Profile) => void,
    setRole: (role: UserRole) => void,
    logout: () => void,
}

export const useAuthStore = create(persist<State & Actions>((set) => ({
    token: "",
    perfil: {} as Profile,
    isAuth: "not-authenticated",
    role: null,


    setToken: (token: string) => set(() => ({
        checking() {
            return "checking"
        },
        token,
        isAuth: "authenticated",
    })),

    setProfile: (perfil: Profile) => set((state) => ({

        perfil,
        isAuth: state.token ? "authenticated" : "not-authenticated",
    })),

    setRole: (role: UserRole) => set(() => ({

        role,
    })),

    logout: () => set(() => ({
        token: "",
        perfil: {} as Profile,
        isAuth: "not-authenticated",
        rol: null
    })),



}), {
    name: "auth-storage-persist"
}))