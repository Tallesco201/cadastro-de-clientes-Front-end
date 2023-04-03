import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../Pages/Dashboard/dashboardPage"
import LoginPage from "../Pages/Login/loginPage"
import { RegisterPage } from "../Pages/Register/registerPage"

export const RoutesMain=()=>{
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}  />
            <Route path="/register" element={<RegisterPage/>}  />
            <Route path="/dashboard" element={<DashboardPage/>}  />
        </Routes>
    )
}