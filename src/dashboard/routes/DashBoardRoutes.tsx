import { Routes, Route, Navigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import DashBoardPage from "../pages/DashBoardPage";
import AddNewJobPage from "../pages/AddNewJobPage";

export default function DashBoardRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashBoardLayout />}>
                <Route index element={<DashBoardPage />} />
                <Route path="/profile" element={<h1>prueba</h1>} />
                <Route path="/jobs" element={<h1>prueba</h1>} />
                <Route path="/jobs/create" element={<AddNewJobPage />} />
                <Route path="/jobs/edit/:id" element={<h1>prueba</h1>} />
                <Route path="/companies" element={<h1>Prueba compañias</h1>} />
                <Route path="/companies/create" element={<h1>Hola</h1>} />
                <Route path="/companies/edit/:id" element={<h1>Prueba editar compañias</h1>} />
                <Route path="/jobs/favorites" element={<h1>Prueba Favorites</h1>} />
                <Route path="/jobs/apply" element={<h1>Prueba Posutalods</h1>} />
                <Route path="/*" element={<Navigate to="/dashboard" />} />
            </Route>
        </Routes>
    )
}