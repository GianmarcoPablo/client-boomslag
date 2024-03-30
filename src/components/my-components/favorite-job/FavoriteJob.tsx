import AlertDialogComp from "../alert-dialog/AlertDialog";
import { useAuthStore } from "@/store/auth-store";
import { useMutation } from "react-query";
import { addFavoriteJob } from "@/actions/jobs/add-favorite-job";
import { useQueryClient } from "react-query";
import { Heart } from "lucide-react";
import { removeFavoriteJob } from "@/actions/jobs/remove-favorite-job";
import Loading from "../loading/Loading";

interface Props {
    isFavorite: boolean | undefined;
    jobId: string | undefined;
}

export default function FavoriteJob({ isFavorite, jobId }: Props) {

    const { isAuth } = useAuthStore();
    const queryClient = useQueryClient();

    // Mutation para agregar un trabajo favorito
    const { mutate: addFavorite, isError: isAddError, isSuccess: isAddSuccess, isLoading: isAddLoading } = useMutation({
        mutationFn: () => addFavoriteJob(jobId),
    });

    // Mutation para eliminar un trabajo favorito
    const { mutate: removeFavorite, isError: isRemoveError, isSuccess: isRemoveSuccess, isLoading: isRemoveLoading } = useMutation({
        mutationFn: () => removeFavoriteJob(jobId),
    });

    if (isAddError || isRemoveError) return <h1>Error al agregar/eliminar de favoritos</h1>;

    if (isAddSuccess) {
        queryClient.invalidateQueries('favorites');
    }

    if (isRemoveSuccess) {
        queryClient.invalidateQueries('favorites');
    }

    return (
        <>
            <div>
                {isAuth === "authenticated" ? (
                    <>
                        {isFavorite ? (
                            isRemoveLoading ? (
                                <Loading />
                            ) : (
                                <Heart
                                    className="w-6 h-6 cursor-pointer fill-current text-rose-700"
                                    onClick={() => removeFavorite()}
                                />
                            )
                        ) : (
                            isAddLoading ? (
                                <Loading />
                            ) : (
                                <Heart
                                    className="w-6 h-6 cursor-pointer "
                                    onClick={() => addFavorite()}
                                />
                            )
                        )}
                    </>
                ) : (
                    <AlertDialogComp
                        title="Inicia sesión en BoomSlag"
                        message={"Para agregar a favoritos debes iniciar sesión"}
                    />
                )}
            </div>
        </>
    );
}