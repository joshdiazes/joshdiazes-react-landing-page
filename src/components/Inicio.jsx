import React from "react";
import header from '../img/about-joshua.webp';

function Inicio(){
    return(
        <section class="inicio" id="inicio">
            <div class="inicio_container">
                <div class="inicio_left">
                    <h1>Joshua Diaz Vasquez</h1>
                    <p>Estudiante de 9no ciclo de la carrera de Ciencias de la Computación, con experiencia 
                        en Wordpress, Woocommerce, C++, Python, SQL, e interesado en el mundo de Desarrollo de 
                        Aplicaciones Web y Data Science.</p>
                    <a class="inicio_btn" href="https://drive.google.com/file/d/1CIBmBMFV5-e1RhxeG6414Xaj12rqWGFW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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