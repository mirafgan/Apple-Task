import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import LoginPage from "../components/organisms/Login/LoginPage"
import RegisterPage from "../components/organisms/Register/RegisterPage"
import DashboardPage from "../components/organisms/Dashboard/DashboardPage"
import Auth from "../auth/Auth"

const Routing = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Auth><DashboardPage /></Auth>} />
                <Route path="/register" element={<RegisterPage />} />
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routing