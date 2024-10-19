import React from "react";
import header from '../img/about-joshua.webp';

function Inicio(){
    return(
        <section class="inicio" id="inicio">
            <div class="inicio_container">
                <div class="inicio_left">
                    <h1><b>Joshua Diaz Vasquez</b></h1>
                    <p>Estudiante de 8avo ciclo de la carrera de Ciencias de la Computación, con experiencia en Wordpress y Woocommerce,
                         e interesado en el mundo de Data Science y Desarrollo de Aplicaciones Web.</p>
                    <a class="btn" href="https://drive.google.com/file/d/1CIBmBMFV5-e1RhxeG6414Xaj12rqWGFW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <b>Descargar CV</b>
                    </a>
                </div>
                <div class="inicio_right">
                    <img src={header} alt="Joshua Diaz" width="300px"></img>
                </div>
            </div>
        </section>
    )
}

export default Inicio