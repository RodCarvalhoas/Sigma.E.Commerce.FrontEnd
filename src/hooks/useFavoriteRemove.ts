import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../class/axiosInstance";

const deleteFavorite = async (favoriteId: string) => {
    const response = await axiosInstance.delete(`${process.env.REACT_APP_BASEAPI_URL}/favorite/${favoriteId}`)
}

export function useFavoriteRemove(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteFavorite,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-favorites']})
            queryClient.invalidateQueries({ queryKey: ['product-details']})
        }
        
    })
}