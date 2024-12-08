import React, { useEffect, useState } from "react";
import header from '../img/about-joshua.webp';

function Inicio(){
    const [textVisible, setTextVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
        // Después de 1 segundo, hacemos visible el texto
        const timerText = setTimeout(() => {
            setTextVisible(true);
        }, 1000);

        const timerButton = setTimeout(() => {
            setButtonVisible(true);
        }, 2000);

        // Después de 2 segundos, hacemos visible la imagen
        const timerImage = setTimeout(() => {
            setImageVisible(true);
        }, 3000);
        

        return () => {
            clearTimeout(timerText);
            clearTimeout(timerButton);
            clearTimeout(timerImage);
        };
    }, []);

    return(
        <section class="inicio" id="inicio">
            <div class="inicio_container">
                <div class="inicio_left">
                    <h1>Joshua Diaz Vasquez</h1>
                    <p className={textVisible?"texto visible":"texto"}>
                        Estudiante de 9no ciclo de la carrera de Ciencias de la Computación, con experiencia 
                        en Wordpress, Woocommerce, C++, Python, SQL, e interesado en el mundo de Desarrollo de 
                        Aplicaciones Web y Data Science.
                    </p>
                    <a  className={buttonVisible ? "inicio_btn visible" : "inicio_btn"} 
                        href="https://drive.google.com/file/d/134nIWF9CLyJ-tE1TgEeqwDxWOJRp5s1q/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Descargar CV
                    </a>
                </div>
                
                <div className={`inicio_right ${imageVisible ? "visible":""}`}>
                    <img src={header} alt="Joshua Diaz" width="300px"></img>
                </div>
            </div>
        </section>
    )
}

export default Inicio