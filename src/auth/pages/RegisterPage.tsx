
import instance from "../../config/axios"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../store/auth-store"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"


export default function RegisterPage() {

    const { setToken, setProfile, setRole } = useAuthStore()
    const [alert, setAlert] = useState({ tipo: "", mensaje: "" })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const dataform = new FormData(e.currentTarget)
        const name = dataform.get('name') as string
        const email = dataform.get('email') as string
        const password = dataform.get('password') as string
        const role = "user"

        if (!name || !email || !password) {
            setAlert({ tipo: "error", mensaje: "Todos los campos son obligatorios" })
            return
        }

        try {
            setLoading(true)
            const { data } = await axios.post("http://localhost:4001/api/v1/users/register", { name, email, password, role })
            console.log(data)
            setToken(data.token)
            setProfile(data.usuario)
            setRole(data.usuario.role)
            navigate("/")
        } catch (error: any) {
            console.log(error)
            setAlert({
                tipo: "error",
                mensaje: error?.response
            })
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1
                    className="animate-pulse text-6xl font-black text-center text-white"
                >
                    Cargando...
                </h1>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/2 xl:w-1/4 sm:px-10">
                {alert.mensaje && (
                    <div className={`p-2 mb-4 text-center text-white rounded-md ${alert.tipo === "error" ? "bg-red-500" : "bg-green-500"}`}>
                        {alert.mensaje}
                    </div>
                )}
                <h3 className="my-5 text-2xl font-black text-center text-gray-700">
                    Bienvenido a <span className="text-rose-600">Cloude</span> Crea una cuenta y explora
                </h3>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm  text-gray-600 uppercase font-bold">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md "
                            placeholder="Tú Nombre" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm  text-gray-600 uppercase font-bold">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md "
                            placeholder="Tú Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-600 uppercase">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md "
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-600 uppercase">Repite tu Password</label>
                        <input
                            type="password"
                            name="Rptapassword"
                            id="Rptapassword"
                            placeholder="••••••••"
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md "
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Button className="w-full">
                        Registrarse
                    </Button>
                </div>
                <nav className="flex items-center justify-between mt-4">
                    <Link to="/auth/login" className="text-sm font-bold text-gray-600 uppercase hover:text-rose-600">
                        Ya tienes cuenta? Inicia sesión
                    </Link>
                </nav>
            </form>
        </div>
    )
}