import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../class/axiosInstance";
import { useNavigate } from "react-router-dom";

interface ProductRequest{
    name: string;
    price: number;
    img: string,
    categoryName: string,
    quantity: number
}

const postProduct = async (data: ProductRequest) => {
    const response = await axiosInstance.post(`${process.env.REACT_APP_BASEAPI_URL}/product`, data)
}

export function useProductAdd(){
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    return useMutation({
        mutationFn: postProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product-all']})
            queryClient.invalidateQueries({ queryKey: ['product-perifericos']})
            queryClient.invalidateQueries({ queryKey: ['product-computadores']})
            queryClient.invalidateQueries({ queryKey: ['product-details']})
            
            navigate("/admin/stock")
        }
    })
}