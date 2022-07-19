import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Test} from "./Components/Test/Test";
import {Profile} from "./Components/Profile/Profile";
import { Login } from './Components/Login/Login';
import { Registration } from './Components/Registration/Registration';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Profile />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/test' element={<Test />}/>

        <Route path='404' element={<h1>404: PAGE NOT FOUND</h1>}/>
        <Route path='*' element={<Navigate to={"404"}/>}/>
      </Routes>
    </>
  );
}

