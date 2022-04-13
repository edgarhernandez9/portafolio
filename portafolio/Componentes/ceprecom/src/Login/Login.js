import React from "react";
import "../css/Login/Login.scss";

//importar iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faEye, faLock } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
//import { fas as fasPro } from "@fortawesome/pro-solid-svg-icons";
//import { far as farPro } from "@fortawesome/pro-regular-svg-icons";

import CajaTexto from "../componentesGenericos/CajaTexto";
import Boton from "../componentesGenericos/Boton";

export default function Login(){



    return(
        <div style={{width: "100%", display: "flex"}}>
            <div style={{width: "10%"}}></div>
            <div style={{width: "80%"}}>
                <div style={{display: "flex"}}>
                    <div className="headerLogin">
                        <p className="txtSesion">INICIAR SESIÓN</p>
                        <p className="txtInfo">Bienvenido de nuevo, inicie sesión con su información personal</p>
                    </div>
                    <div className="circulo"></div>
                </div>

                <div style={{marginLeft: "350px", marginTop: "26px", width: "300px"}}>
                    <div className="marcoFoto">
                        <div className="circuloFoto"></div>
                        <div className="labelTxt">
                            <label>BOX POS</label>
                        </div>
                        
                    </div>
                </div>

                <div className="datosUsuario">
                    
                    <div >
                        <CajaTexto 
                            iconos = {faEnvelope} 
                            color='#ffffff' 
                            tipo='text' 
                            placeHolder='Correo electrónico*' 
                            tipoCaja = 'texto' 
                            size='22px' 
                            marginTop = '4px'
                            name='correo'
                        />
                        {/* //<img src={candado2} style={{width: "36px", height: "36px", marginRight: "11px"}}/> */}
                        <CajaTexto 
                            iconos = {faLock} 
                            color='#ffffff' 
                            tipo='password' 
                            placeHolder='Contraseña*' 
                            tipoCaja = 'password' 
                            size='22px' 
                            marginTop = '8px'
                            name='correo'
                            icono2 = {faEye}
                            left = '279px'
                        />                   
                        {/* <img src={noMostrar2} className="imgPassword"/> */}
                    </div>
                </div>
                <div style={{marginLeft: '279px', marginTop: '12px'}}>
                    <Boton 
                        width= '318px' 
                        height= '36px' 
                        color= '#111111' 
                        texto='Iniciar sesion'
                    />
                    <div className="separador"></div>
                    <button className="olvidar_pass">¿Olvidaste tu contraseña?</button>
                </div>
            </div>

            <div style={{width: "10%"}}></div>
        </div>
        
    )
}