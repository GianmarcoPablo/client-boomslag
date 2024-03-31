import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

interface Props {
    title?: string
    message?: string
    icon?: any
}


export default function AlertDialogComp({ title, message, icon }: Props) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button>
                    <Heart
                        className="hidden md:block w-6 h-6"
                    />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {message}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>
                        <Link to="/auth/login">
                            Iniciar sesión
                        </Link>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
