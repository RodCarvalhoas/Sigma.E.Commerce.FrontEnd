import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import LoginRequest from "../types/LoginRequest";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../class/axiosInstance";

const unexpectedErrorText = "Erro inesperado, tente novamente";

const postLogin = async (data: LoginRequest) => {
    try{
        const response = await axios.post(`${process.env.REACT_APP_BASEAPI_URL}/login`, data);

        if (response.status === 200)
            return response.data;

        else throw new Error(unexpectedErrorText).message

    }catch(err){
        if(axios.isAxiosError(err)){if(err.response?.status === 403){
            throw new Error("Verifique seu email e/ou senha").message;
        }
    }else{
        throw new Error(unexpectedErrorText).message;
    }
}
}

export const useLogin = () => {

const navigate = useNavigate()
const mutation = useMutation({
    mutationFn: postLogin,
    onSuccess: (response) => {
        try{
            localStorage.setItem("token", response.token)
            axiosInstance.token = localStorage.getItem("token");
            navigate("/")
        }catch(err){
            throw new Error(unexpectedErrorText).message;
        }
    }
});
return mutation;
}