import React from "react";
import { useState } from "react/cjs/react.production.min";

import "../../css/Genericos/Navbar.scss";

export default function Navbar(props){

    const { imgLeft, nombreApp, nombreEsc, action, nombreOpciones, arrayOpciones} = props;


    // const [liOption, setLiOption] = useState(<div></div>);


    // arrayOpciones.map((opcion, index) => 
    //     //console.log(opcion.desplegable);
        
    //     {
    //         for(let variable in opcion.desplegable){
    //             // console.log(opcion.desplegable[variable]);
    //             // let uno = opcion.desplegable[variable];
    //             setLiOption(
    //                 <ul className="dropdown">       
    //                     <li>
    //                         <a href="#">{opcion.desplegable[arrayOpciones[0]]}</a>
    //                     </li>
    //                 </ul>
    //             )
    //             // return uno;
    //         }
    //     }
    // );

    // console.log(liOption);





    return(
        <div className="navbar">
            <div className="navbar-info">
                <div className="navbar-item">
                    <div className="navbar-img">
                        <img src={''} className="img"/>
                    </div>
                    <div className="navbar-infoEscuela">
                        <p>{nombreApp}</p>
                        <p>{nombreEsc}</p>
                    </div>
                </div>
            </div>
            <div className="navbar-opciones">
                <nav role="navigation" className="primary-navigation">
                    <ul className="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">

                        {
                            arrayOpciones.map((opcion, index) => (
                                
                                <li key={index}><a href="#" className="menu-pintar" data-text={opcion.nomOption}>{opcion.nomOption}</a>
                                    <ul className="dropdown">
                                        
                                        <li>
                                            <a href="#">{opcion.desplegable}</a>
                                        </li>
                                        
                                    </ul>
                                </li>
                            ))
                        }
                        <li></li>
                    </ul>
                    
                </nav>
            </div>

        </div>
    )
}