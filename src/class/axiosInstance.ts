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

}

export default new axiosInstance();