import axios from "axios";

const BASE_API = "http://localhost:8080"

class BusinessLogical{

    getAllUsers(){
        return axios.get(BASE_API)
    }

    createAllUsers(user){
        return axios.post(BASE_API,user)
    }

}
export default new BusinessLogical()