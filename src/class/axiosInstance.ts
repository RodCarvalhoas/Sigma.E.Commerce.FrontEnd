import { Axios } from "axios";
import axios from "axios";

class axiosInstance{
    axiosObj: Axios;
    token: string | null;

    constructor() {
        this.axiosObj = axios.create({
        
        });

        this.token = localStorage.getItem("token");
    }

    init = () => {
        this.axiosObj = axios;
        this.token = "";
    }

    get = async (url: string) => {
        try {
            const response = await axios.request({
                headers: {
                    Authorization: `Bearer ${this.token}`
                },
                method: "GET",
                url: url
            });
            return response.data;
        } catch (error) {
            
            throw new Error('Erro ao fazer requisição GET');
        }
    }

    post = async (url: string, data: {}) => {
        try {
            const response = await axios.request({
                headers: {
                    Authorization: `Bearer ${this.token}`
                },
                method: "POST",
                data: data,
                url: url
            });
            return response.data;
        } catch (error) {
            
            throw new Error('Erro ao fazer requisição POST');
        }
    }
    delete = async (url: string) => {
        try {
            const response = await axios.request({
                headers: {
                    Authorization: `Bearer ${this.token}`
                },
                method: "DELETE",
                url: url
            });
            return response.data;
        } catch (error) {
            
            throw new Error('Erro ao fazer requisição DELETE');
        }
    }
}

export default new axiosInstance();