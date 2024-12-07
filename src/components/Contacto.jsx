import React from "react";
import Github from "../img/contacto-github.webp";
import LinkedIn from "../img/contacto-linkedin.webp";
import Outlook from "../img/contacto-outlook.webp";
import WhatsApp from "../img/contacto-whatsapp.webp";

function ContactUs(){
    return(
        <section id="contacto" class="contacto">
            <div class="contacto_container">
                <h1>CONTACTO</h1>  
                <div class="contacto_grid">
                    <a href="mailto:joshdiazes@outlook.com?subject=Consulta%20desde%20tu%20página%20web&body=Hola%20Joshua%2C%20me%20gustaría%20saber%20más%20sobre%20tus%20proyectos." target="_blank" rel="noopener noreferrer" class="contacto_box">
                        <img src={Outlook} alt="Contacto Correo de Proyectos del Landing Page"></img>
                        <b>Correo</b>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=51998001868&text=Hola%20Joshua,%20me%20gustaría%20saber%20más%20de%20tus%20proyectos." target="_blank" rel="noopener noreferrer" class="contacto_box">
                        <img src={WhatsApp} alt="Contacto Correo de Proyectos del Landing Page"></img>
                        <b>WhatsApp</b>
                    </a>
                    <a href="https://www.linkedin.com/in/joshdiazes/" target="_blank" rel="noopener noreferrer" class="contacto_box">
                        <img src={LinkedIn} alt="Contacto Correo de Proyectos del Landing Page"></img>
                        <b>LinkedIn</b>
                    </a>
                    <a href="https://github.com/joshdiazes" target="_blank" rel="noopener noreferrer" class="contacto_box">
                        <img src={Github} alt="Contacto Correo de Proyectos del Landing Page"></img>
                        <b>Github</b>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactUs