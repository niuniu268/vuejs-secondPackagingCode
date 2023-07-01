// import { method } from "lodash";
import service from ".";

interface loginData{
    username:string,
    password:string
}

export function login(data:loginData){
    return service({
        url:"/login",
        method:"get",
        data
    })
}

export function getGoodList(){
    return service({
        url:"/goods",
        method:"get"
    })
}

export function getUserList(){
    return service({
        url:"/users",
        method:"get"
    })
}

export function getRoleList(){
    return service({
        url:"/roles",
        method:"get"
    })
}