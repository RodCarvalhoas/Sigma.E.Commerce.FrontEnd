import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../class/axiosInstance";

const getAllFavorites = async (userId: string) => {
    const response = await axiosInstance.get(`${process.env.REACT_APP_BASEAPI_URL}/favorite?userId=${userId}`)
}

export function useAllFavorites(){
    return useMutation({
        mutationFn: getAllFavorites
    })
}