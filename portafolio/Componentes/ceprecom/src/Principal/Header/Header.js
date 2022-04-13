import React from "react";
import Navbar from "../../componentesGenericos/Navbar";
import Milan from "../../images/acmilan.png";
import Persona from "../../images/person.png";
import Barras from "../../images/bars.png";
import Calendario from "../../images/calendar.png";
import Checklist from "../../images/checklis.png";
import Classromm from "../../images/classroom.png";
import Impresora from "../../images/printer.png";
import Reporte from "../../images/report.802e375a.png";
import Escuela from "../../images/school.png";
import Maestro from "../../images/teacher.png";
import Grupos from "../../images/teamwork.png";
import Boton from "../../componentesGenericos/Boton";

import Tarjetas from "../../componentesGenericos/Tarjetas";

import "../../css/Principal/Header.scss"

export default function Header(){


    let array = [
        {
            "nomOption": "Grupos",
            "desplegable": [
                "Ver grupos", "Registrar grupos"
            ],
        },
        {
            "nomOption": "Alumnos",
            "desplegable": [
                "Ver Alumnos", "Registrar alumno", "Reporte edades", "Pasar asistencia", 
                "Reporte de asistencia", "Pagos", "Reporte de pagos"
            ],
        },
        {
            "nomOption": "Docentes",
            "desplegable": [
                "Ver Docentes", "Registrar docente", "Materias de docente"
            ]
        },
        {
            "nomOption": "Materias",
            "desplegable": [
                "Ver Materias", "Registrar materia" 
            ]
        },
        {
            "nomOption": "Calificaciones",
            "desplegable": [
                "Períodos", "Registrar calificaciones", "Gráfica de alumnos", "Boletas de alumnos", "Boletas parte trasera"
            ]
        },
        {
            "nomOption": "Horarios",
            "desplegable": [
                "Generar horarios", "Ver horarios por grupo", "Ver horarios por docente"
            ]
        },
        {
            "nomOption": "Usuarios",
            "desplegables": [
                "Ver usuarios", "Registrar usuario", <Boton texto={`Salir (${"admin"})`}/>
            ]
        },
    ];

    let arrayTarjetas = [
        {
            "imagen": Persona,
            "titulo": "Registrar alumno",
            "action": "",
        },
        {
            "imagen": Grupos,
            "titulo": "Administrar grupos",
            "action": "",
        },
        {
            "imagen": Reporte,
            "titulo": "Boletas de alumnos",
            "action": "",
        },
        {
            "imagen": Escuela,
            "titulo": "Registrar materias",
            "action": "",
        },
        {
            "imagen": Maestro,
            "titulo": "Administrar docentes",
            "action": "",
        },
        {
            "imagen": Barras,
            "titulo": "Graficas de crecimiento",
            "action": "",
        },
        {
            "imagen": Calendario,
            "titulo": "Horarios de clases",
            "action": "",
        },
        {
            "imagen": Checklist,
            "titulo": "Registrar calificaciones",
            "action": "",
        },
        {
            "imagen": Classromm,
            "titulo": "Materias docentes",
            "action": "",
        },
        {
            "imagen": Impresora,
            "titulo": "Imprimir horarios",
            "action": "",
        }
    ]

    return(
        <div>
            <div>
                <Navbar imgLeft={Milan} nombreApp="Control Escolar" nombreEsc="Nombre Escuela" arrayOpciones={array}/>
            </div>

            <div className="mensaje">
                <p className="mensaje-bienvenido">Bienvenido TipoUsuario</p>
                <p className="mensaje-pregunta">¿Que desea hacer hoy?</p>
            </div>

            <div >
                <Tarjetas array={arrayTarjetas}/>
            </div>
            
        </div>
    )
}