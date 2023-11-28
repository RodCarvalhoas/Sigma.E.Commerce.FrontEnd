import { useQuery } from 'react-query';
import axiosInstance from "../class/axiosInstance";
import { UserRole } from "../types/UserRole";

const fetchUserByEmail = async (): Promise<UserRole> => {
    const response = await axiosInstance.get<UserRole>(`${process.env.REACT_APP_BASEAPI_URL}/user`)

    localStorage.setItem("email", response.email);
    localStorage.setItem("role", response.role);
    
    return response;
}

export function useGetUserByEmail(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ['get-user-ByEmail'],
        queryFn: fetchUserByEmail,
        cacheTime: 0,
        refetchOnWindowFocus: false
    })
}
