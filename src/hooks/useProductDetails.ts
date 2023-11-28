import { useQuery } from 'react-query';
import axios from "axios";
import { Product } from "../types/Product";

 const fetchProductDetails = async (): Promise<Product> => {
    const response = await axios.get<Product>(`${process.env.REACT_APP_BASEAPI_URL}${window.location.pathname}`)
    return response.data;
}

export function useProductDetails(){
    const query = useQuery({
        queryKey: ["product-details"],
        queryFn: fetchProductDetails,
        cacheTime: 0,
        refetchOnWindowFocus: false
    })
    return query;
}