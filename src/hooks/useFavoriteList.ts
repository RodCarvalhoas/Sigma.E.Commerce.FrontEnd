import { useQuery } from "react-query";
import axiosInstance from "../class/axiosInstance";
import { Favorite } from "../types/Favorite";

const getAllFavorites = async (): Promise<Favorite[]> => {
    return await axiosInstance.get<Favorite[]>(`${process.env.REACT_APP_BASEAPI_URL}/favorite`)
}

export function useAllFavorites(){
    return useQuery({
        queryKey: ['all-favorites'],
        queryFn: getAllFavorites,
        cacheTime: 0,
        refetchOnWindowFocus: false
    })
}