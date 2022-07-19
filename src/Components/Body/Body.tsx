import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./b1-Login/Login";
import {Registration} from "./b2-Registration/Registration";
import {Test} from "./b7-Test/Test";
import {Profile} from "./b3-Profile/Profile";
import {NewPassword} from "./b4-NewPassward/NewPassword";
import { ChangePassword } from "./b5-ChangePassward/ChangePassword";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to={'/profile'}/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/new_password' element={<NewPassword />}/>
                <Route path='/change_password' element={<ChangePassword />}/>
                <Route path='/test' element={<Test />}/>
                <Route path='404' element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to={"404"}/>}/>
            </Routes>
        </>
    )
}