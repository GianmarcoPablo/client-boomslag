import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

// Layout
import { useAuthStore } from "../store/auth-store";
import DashBoardRoutes from "@/dashboard/routes/DashBoardRoutes";

// Pages

const HomeRouter = lazy(() => import("../(public)/home/routes/HomeRoutes"));
// Auth
const AuthRoutes = lazy(() => import("../auth/routes/AuthRoutes"));


export const Loading = () => {
    return (
        <div className="flex justify-center items-center bg-slate-950 h-screen">
            <svg
                className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
            </svg>
        </div>
    )
}


export default function AppRoutes() {

    return (
        <Routes>

            <Route
                path="/*"
                element={
                    <React.Suspense
                        fallback={<Loading />}
                    >
                        <HomeRouter />
                    </React.Suspense>
                }
            />


            <Route
                path="auth/*"
                element={
                    <React.Suspense
                        fallback={<Loading />}
                    >
                        <AuthRoutes />
                    </React.Suspense>
                }
            />

            <Route
                path="dashboard/*"
                element={
                    <RequireAuth roles={["user","admin"]}>
                        <React.Suspense
                            fallback={<Loading />}
                        >
                            <DashBoardRoutes />
                        </React.Suspense>
                    </RequireAuth>
                }
            />

        </Routes>
    );
}

interface RequireAuthProps {
    children: React.ReactNode;
    roles?: string[];
}


function RequireAuth({ children, roles }: RequireAuthProps) {

    const { isAuth, role } = useAuthStore();

    console.log("isAuth", isAuth);
    console.log("rol", role);

    if (isAuth === "not-authenticated") {
        return <Navigate to="/auth/login" replace />;
    }

    if (roles && !roles.includes(role!)) {
        return <Navigate to="/auth/login" replace />;
    }

    return children;
}