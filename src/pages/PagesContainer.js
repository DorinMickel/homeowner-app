import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "../componants/MainNavbar";
import Dashboard from "./dashboard/Dashboard";
import ErrorPage from "./error/ErrorPage";
import Homepage from "./hompage/Homepage";
import Login from "./login-signup/Login";
import MemberSignup from "./login-signup/MemberSignup";
import TenantsPage from "./tenants/TenantsPage";



const PagesContainer = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path = "/" element={<Homepage/>}/>
                <Route exact path = "/login" 
                    element={<Login/>}/>
                <Route exact path = "/member-signup" element={<MemberSignup/>} /> 
                <Route path = "main" 
                    element={<MainNavbar/>}>
                    <Route path = "dashboard" element={<Dashboard />}/>
                    <Route path = "tenants" element={<TenantsPage/>}/>
                    <Route path="*" element= {<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PagesContainer