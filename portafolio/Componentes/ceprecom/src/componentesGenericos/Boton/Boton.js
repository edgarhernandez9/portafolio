import React from "react";

import "../../css/Genericos/Boton.scss";

export default function Boton(props){

    const { width, height, color, texto} = props; 
    return(
        <>
            <button className="boton" style={{width: width, height: height}}>
                <label style={{color: color, cursor: 'pointer'}}>{texto}</label>
            </button>
        </>
    )
} 