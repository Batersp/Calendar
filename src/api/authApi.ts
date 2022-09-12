import {IUserType} from "../feauters/Login/auth-reducer";
import axios from "axios";


export const authApi = {
    login() {
        return axios.get<IUserType[]>('./users.json')
    }
}
