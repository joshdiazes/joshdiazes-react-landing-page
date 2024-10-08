import React from "react";
import Carpio from "../img/proyectos-carpio.png";
import Effio from "../img/proyectos-effio.png";
import Flora from "../img/proyectos-flora.png";
import Gommy from "../img/proyectos-gommyvit.png";
import Psicocenters from "../img/proyectos-psicocenters.png";
import Soluciones from "../img/proyectos-soluciones.png";
import Ticor from "../img/proyectos-ticor.png";
import TotalClean from "../img/proyectos-totalclean.png";

function Proyectos(){
    return(
        <section class="proyectos" id="proyectos">
            <div>
                <h1>PROYECTOS</h1>
            </div>
            <div class="proyectos_container">
                <div class="proyectos_box">
                    <img src={Carpio} alt="Página Carpio de Proyectos del Landing Page"></img>
                    <a href="https://estudiojuridicocarpio.com" target="_blank" rel="noopener noreferrer">
                        <h1>Estudio Jurídico Carpio</h1>
                    </a>
                </div>
                <div class="proyectos_box">
                    <img src={Effio} alt="Página Effio de Proyectos del Landing Page"></img>
                    <a href="https://effio.com.pe" target="_blank" rel="noopener noreferrer">
                        <h1>Effio y Asociados</h1>
                    </a>
                </div>
                <div class="proyectos_box">
                    <img src={Flora} alt="Página Flora de Proyectos del Landing Page"></img>
                    <a href="https://flor-a.com" target="_blank" rel="noopener noreferrer">
                        <h1>Flor-a</h1>
                    </a>
                </div>
                <div class="proyectos_box">
                    <img src={Soluciones} alt="Página Soluciones Poligráficas de Proyectos del Landing Page"></img>
                    <a href="https://solucionespoligraficas.com" target="_blank" rel="noopener noreferrer">
                        <h1>Soluciones Poligráficas</h1>
                    </a>
                </div>
                <div class="proyectos_box">
                    <img src={Ticor} alt="Página TI Corporación de Proyectos del Landing Page"></img>
                    <a href="https://ticorperu.net" target="_blank" rel="noopener noreferrer">
                        <h1>TI Corporación</h1>
                    </a>
                </div>
                <div class="proyectos_box">
                    <img src={TotalClean} alt="Página Total Clean de Proyectos del Landing Page"></img>
                    <a href="https://totalcleanperu.com" target="_blank" rel="noopener noreferrer">
                        <h1>Total Clean</h1>
                    </a>
                </div>
                <div class="proyectos_box">
                    <img src={Gommy} alt="Página Gommy Vit de Proyectos del Landing Page"></img>
                    <a href="https://ribobusiness.com" target="_blank" rel="noopener noreferrer">
                        <h1>Gommy Vit</h1>
                    </a>
                </div>                
                <div class="proyectos_box">
                    <img src={Psicocenters} alt="Página Psicocenters de Proyectos del Landing Page"></img>
                    <a href="https://psicocenters.com" target="_blank" rel="noopener noreferrer">
                            <h1>Psicocenters</h1>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Proyectos