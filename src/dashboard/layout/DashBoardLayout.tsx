import { Outlet } from "react-router-dom"
import MenuDashBoard from "@/components/my-components/menu-dashboard/MenuDashBoard"
export default function DashBoardLayout() {
    return (
        <div>
            <MenuDashBoard />
            <main className="  md:px-24">
                <Outlet />
            </main>
        </div>
    )
}
