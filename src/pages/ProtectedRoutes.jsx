import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {

   const  username  = useSelector(states => states.username)

    if(username.length >= 3){
        return <Outlet/>
    } else {
       return <Navigate to={'/'} />
    }

}

export default ProtectedRoutes