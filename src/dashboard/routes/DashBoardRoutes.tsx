import { Routes, Route, Navigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";


export default function DashBoardRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoardLayout />}>
                <Route index element={<h1>Dashboard</h1>} />
                <Route path="/prueba" element={<h1>prueba</h1>} />
                <Route path="/*" element={<Navigate to="/dashboard" />} />
            </Route>
        </Routes>
    )
}