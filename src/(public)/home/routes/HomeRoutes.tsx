import { Routes, Route, Navigate } from "react-router-dom"
import JobsPage from "@/(public)/jobs/pages/JobsPage"
import HomePage from "../pages/HomePage"
import HomeLayout from "../layout/HomeLayout"
import OneJobPage from "@/(public)/jobs/pages/OneJobPage"

export default function HomeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<HomePage />} />
                <Route path="jobs" element={<JobsPage />} />
                <Route path="companies" element={<h1>Apartamento</h1>} />
                <Route path="jobs/:id" element={<OneJobPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}