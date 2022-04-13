import React from "react";

import "../../css/Principal/Header.scss";

export default function Tarjetas(props){

    const { array = [], action} = props;


    return(
        <div className="row">
            {
                array.map((tarjeta, index) => (
                    <div key={index} className="column">
                        <div className="column-second">
                            <div className="second-img">
                                <figure className="image">
                                    <img src={tarjeta.imagen}/>
                                </figure>
                            </div>
                            <div className="second-texto">
                                <div className="texto-child">
                                    <div className="child-content">
                                        <p className="title">{tarjeta.titulo}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                ))
            }
            
        </div>
    )
}