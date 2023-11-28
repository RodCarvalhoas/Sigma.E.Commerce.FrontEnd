import { useMutation } from "react-query";
import axiosInstance from "../class/axiosInstance";

interface ProductRequest{
    id: string;
    name: string;
    price: number;
    img: string,
    quantity: number
}

const postFavorite = async (data: ProductRequest) => {
    const response = await axiosInstance.post(`${process.env.REACT_APP_BASEAPI_URL}/favorite`, data)
}

export function useFavoriteAdd(){
    return useMutation({
        mutationFn: postFavorite
    })
}