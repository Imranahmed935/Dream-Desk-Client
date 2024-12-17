import { useContext } from "react"
import AuthContext from "../Context/AuthContext/AuthContext"

const useAuth = ()=>{
    const userAuth = useContext(AuthContext)
    return userAuth
}

export default useAuth;