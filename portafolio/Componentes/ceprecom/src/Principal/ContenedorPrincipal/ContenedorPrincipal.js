import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../../Login";
import Header from "../Header/Header";
import Navbar from "../../pruebasComponentes/Navbar";


export default function ContenedorPrincipal(props){

    return(
        <Router>
            <div>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/home">
                    <Header />

                </Route>
                <Route exact path="/pruebas">
                    <Navbar />
                </Route>
            </div>
        </Router>
    )
}