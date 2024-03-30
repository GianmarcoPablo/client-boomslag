import Sidebar from "../sidebar/Sidebar"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useAuthStore } from "@/store/auth-store"


export default function Navbar() {

    const { isAuth, logout } = useAuthStore()
    console.log(isAuth)

    return (
        <div className="bg-darkColorPrimary px-3 md:px-28 py-4 shadow-xl">
            <nav className="flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-white">BoomSlag.tsx</Link>
                <div className="flex justify-end items-center text-white gap-4">
                    <Sidebar />
                    {
                        isAuth === "authenticated" ? (
                            <>
                                <Button
                                    onClick={() => logout()}
                                >
                                    Cerrar sesión
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button asChild variant="outline" >
                                    <Link className="bg-gray-200 text-black hover:bg-gray-100 font-semibold" to="/auth/login">
                                        Iniciar sesión
                                    </Link>
                                </Button>
                            </>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}
