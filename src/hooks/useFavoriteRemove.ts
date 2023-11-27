import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../class/axiosInstance";

const deleteFavorite = async (favoriteId: string) => {
    const response = await axiosInstance.delete(`${process.env.REACT_APP_BASEAPI_URL}/favorite/${favoriteId}`)
}

export function useFavoriteRemove(){
    return useMutation({
        mutationFn: deleteFavorite
    })
}