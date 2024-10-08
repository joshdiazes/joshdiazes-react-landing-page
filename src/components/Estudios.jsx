import React from "react";
import Cibertec from "../img/estudios-cibertec.png";
import ICPNA from "../img/estudios-icpna.png";
import Kaplan from "../img/estudios-kaplan.png";
import Prime from "../img/estudios-prime.png";
import UPC from "../img/estudios-upc.png";

function Estudios(){
    return(
        <section class="estudios" id="estudios">
            <div>
                <h1 style= {{color: 'black'}}>ESTUDIOS</h1>
            </div>
            <div class="estudios_container">
                <div class="estudios_box">
                    <h1>UPC</h1>
                    <img src={UPC} alt="Logo UPC de Estudios del Landing Page"></img>
                    <p>Carrera de Ciencias de la Computación</p>
                </div>
                <div class="estudios_box">
                    <h1>CIBERTEC</h1>
                    <img src={Cibertec} alt="Logo de Cibertec de Estudios del Landing Page"></img>
                    <p>Manejo de Base de Datos con SQL</p>
                </div>
                <div class="estudios_box">
                    <h1>CIBERTEC</h1>
                    <img src={Cibertec} alt="Logo de Cibertec de Estudios del Landing Page"></img>
                    <p>Desarrollo Web con Java</p>
                </div>
                <div class="estudios_box">
                    <h1>ICPNA</h1>
                    <img src={ICPNA} alt="Logo de ICPNA de Estudios del Landing Page"></img>
                    <p>Ingles Avanzado como Idioma Entrajero</p>
                </div>
                <div class="estudios_box">
                    <h1>ICPNA</h1>
                    <img src={ICPNA} alt="Logo de ICPNA de Estudios del Landing Page"></img>
                    <p>Enseñanza de Ingles como Idioma Entrajero</p>
                </div>
                <div class="estudios_box">
                    <h1>PRIME</h1>
                    <img src={Prime} alt="Logo de Prime Institute de Estudios del Landing Page"></img>
                    <p>Manejo de Sistema SAB ABAP</p>
                </div>
                <div class="estudios_box">
                    <h1>PRIME</h1>
                    <img src={Prime} alt="Logo de Prime Institute de Estudios del Landing Page"></img>
                    <p>Microsoft Excel Empresarial</p>
                </div>
                <div class="estudios_box">
                    <h1>PRIME</h1>
                    <img src={Prime} alt="Logo de Prime Institute de Estudios del Landing Page"></img>
                    <p>Power BI (Business Intelligence)</p>
                </div>
                <div class="estudios_box">
                    <h1>KAPLAN</h1>
                    <img src={Kaplan} alt="Logo de Kaplan de Estudios del Landing Page"></img>
                    <p>Inglés Avanzando en Canadá</p>
                </div>
            </div>
        </section>
    );
}

export default Estudios