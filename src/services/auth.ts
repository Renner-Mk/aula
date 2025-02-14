import { ILogin } from "../types";
import { api } from "./api";

export async function Login(data: ILogin){
    try {
        const response = await api.post('/login', data)
        console.log(response.data.data);
        
        return response.data.data
        
    } catch (error) {
        console.log(error);
    }
}