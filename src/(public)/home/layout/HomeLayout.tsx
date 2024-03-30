import { Outlet } from "react-router-dom"
import Navbar from "@/components/my-components/navbar/Navbar"
export default function HomeLayout() {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    )
}
