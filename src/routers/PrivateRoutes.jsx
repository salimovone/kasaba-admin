import { Navigate, Outlet } from 'react-router-dom'
import { useIsAuthenticated } from 'react-auth-kit'

const PrivateRoutes = () => {
    const isAuth = useIsAuthenticated()
    
    return (
        isAuth() ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes