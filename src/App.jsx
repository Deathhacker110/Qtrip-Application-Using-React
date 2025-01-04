import React from 'react';
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import Navbar from "./Components/navbar";
import Ending from './Components/Ending';
import Cards from './Components/cards';
import Place from "./Cities/Place";
import "./index.css";
import City from './Cities/City';
import Qtriphome from './Components/Qtriphome';
import Registration from './Components/Registration';
import {Login} from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
export default class App extends React.Component{
    render(){
        return(
            
    <BrowserRouter>
     <Navbar/>

        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Registration/>}/>
            {/* <Route path="/login" element={<Login/>}/> */}
            <Route element={<ProtectedRoute/>}>
                <Route path="/qtriphome" element={<Qtriphome/>}/>
                <Route path=":cities" element={<City/>}/>
                <Route path="/adven/:id" element={<Place />} />
            </Route>
        </Routes>
    <Ending/>

    </BrowserRouter>     
            
        )
    }
}