import AlertDialogComp from "@/components/my-components/alert-dialog/AlertDialog";
import { useAuthStore } from "@/store/auth-store";
import { TriangleAlert } from "lucide-react";

export default function ReportJob() {
    const { isAuth } = useAuthStore();

    return (
        <div>
            {
                isAuth === "authenticated" ? (
                    <>
                    </>
                ) : (
                    <>
                        <AlertDialogComp
                            title="Inicia sesión"
                            message="Para reportar un trabajo debes iniciar sesión"
                            icon={<TriangleAlert />}
                        />
                    </>
                )
            }
        </div>
    )
}
