import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types/Product";

const fetchDataAll = async (): Promise<Product[]> => { 

  const response = await axios.request<Product[]>({
    method: "GET",
    url: process.env.REACT_APP_BASEAPI_URL + "/product/all"
  })
  return response.data;
};

const fetchDataByCategory = async (category: string): Promise<Product[]> => {
  const response = await axios.request<Product[]>({
    method: "GET",
    url: process.env.REACT_APP_BASEAPI_URL + `/product?categoryName=${category}`
  })
  return response.data;
};

export function useProductList(filter: number) {
  const queryKey = ["product-all"];
  let queryFn = fetchDataAll;

  if (filter === 1) {
    queryKey[0] = "product-perifericos";
    queryFn = () => fetchDataByCategory("PERIFERICOS");
  } else if (filter === 2) {
    queryKey[0] = "product-computadores";
    queryFn = () => fetchDataByCategory("COMPUTADORES");
  }

  const query = useQuery({
    queryFn,
    queryKey
  });
  return query;
}
