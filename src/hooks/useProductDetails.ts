import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "http://localhost:8080";

 const fetchProductDetails = async (): Promise<Product> => {
    const response = await axios.get<Product>(`${API_URL}${window.location.pathname}`)
    return response.data;
}

export function useProductDetails(){
    const query = useQuery({
        queryKey: ["product-details"],
        queryFn: fetchProductDetails
    })
    return query;
}