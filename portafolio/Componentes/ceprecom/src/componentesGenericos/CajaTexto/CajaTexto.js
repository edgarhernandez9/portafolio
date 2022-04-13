import React, { useState } from "react";
import "../../css/Genericos/CajaTexto/CajaTexto.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-regular-svg-icons";

export default function CajaTexto(props){

    const { iconos, color, tipo, placeHolder, tipoCaja , size, marginTop , name, icono2, left } = props;
    
    const [ocultar, setOcultar] = useState('none');
    const [iconoEye, setIconoEye] = useState(faEyeSlash);

    useState(() =>{
        if(tipo === 'password'){
            setOcultar('block');
        }else{
            setOcultar('none');
        }
    });

    const accion = () =>{
        console.log("hola");
        setIconoEye(icono2);
        if(iconoEye === icono2){
            setIconoEye(faEyeSlash);
        }
    }

    return(
        <>
            <div style={{display: "inline-flex", width: '340px', marginBottom: '25px'}}>
                <FontAwesomeIcon style={{color: color, fontSize: size, marginTop: marginTop}} icon={iconos}/>
                <input type={tipo} placeholder={placeHolder} name={name} className="cajaTexto"/>
                <FontAwesomeIcon 
                    style={{color: color, fontSize: size, marginTop: marginTop, display: ocultar, position: 'absolute', marginLeft: left}} 
                    icon={iconoEye} onClick={() => accion()}/>
            </div>
        </>
    );
}