import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <NavLink to={'/login'}> Login </NavLink>
            <NavLink to={'/registration'}> Registration </NavLink>
            <NavLink to={'/profile'}> Profile </NavLink>
            <NavLink to={'/new_password'}> New password </NavLink>
            <NavLink to={'/change_password'}> Change password </NavLink>
            <NavLink to={'/test'}> Test </NavLink>
        </div>
    )
}