import { createContext } from "react";

let user = {
    id: 0,
    fullname: "",
    username: "",
    email: ""
}

const setUser = (userById) => {
    user = userById;
}

const getUser = ()=> {
    return user
}
export const UserContext = createContext({user,setUser,getUser});