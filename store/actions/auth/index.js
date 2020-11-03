import * as Types from "../../types"
import fetch from "isomorphic-fetch"
import cookies from "js-cookie"

export const Register = (data) => dispatch => {
    dispatch({
        type : Types.REGISTER,
        payload : data
    })
}

export const Login = (data) => dispatch => {
    dispatch({
        type : Types.LOGIN,
        payload : data
    })
}

export const Logout = () => dispatch => {
    dispatch({
        type : Types.LOGOUT,
    })
}

export const LoginMiddleWare = () => dispatch => {
    const data = LoginMiddle().then(res => {
        if(res.status === true && res.data){
            dispatch({
                type : Types.LOGIN,
                payload : res.data
            })
        }
    });

}



// -------------------------------------------------------
export async function LoginMiddle (){
    const token = cookies.get("token");
    const res = await fetch("/api/auth/logined" , {
        method : "GET",
        headers : {
            "x-auth-FRENL32-token" : token
        }
    })

    return await res.json()
}
