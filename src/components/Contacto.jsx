import React from "react";
import Github from "../img/contacto-github.webp";
import Instagram from "../img/contacto-instagram.webp";
import Letterboxd from "../img/contacto-letterboxd.webp";
import LinkedIn from "../img/contacto-linkedin.webp";
import Outlook from "../img/contacto-outlook.webp";
import Spotify from "../img/contacto-spotify.webp";
import Steam from "../img/contacto-steam.webp";
import WhatsApp from "../img/contacto-whatsapp.webp";

function ContactUs(){
    return(
        <section id="contacto" class="contacto">
            <div>
                <h1>CONTACTO</h1>
            </div>  
            <div class="contacto_container">
                <a href="mailto:joshdiazes@outlook.com?subject=Consulta%20desde%20tu%20página%20web&body=Hola%20Joshua%2C%20me%20gustaría%20saber%20más%20sobre%20tus%20proyectos." target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn" href="/#">
                            <img src={Outlook} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>Correo</b>
                        </button>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=51998001868&text=Hola%20Joshua,%20me%20gustaría%20saber%20más%20de%20tus%20proyectos." target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn">
                            <img src={WhatsApp} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>WhatsApp</b>
                        </button>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/joshdiazes/" target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn">
                            <img src={LinkedIn} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>LinkedIn</b>
                        </button>
                    </div>
                </a>
                <a href="https://github.com/joshdiazes" target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn">
                            <img src={Github} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>Github</b>
                        </button>
                    </div>
                </a>
                <a href="https://www.instagram.com/joshdiazes/" target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn">
                            <img src={Instagram} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>Instagram</b>
                        </button>
                    </div>
                </a>
                <a href="https://letterboxd.com/joshdiazes/" target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn">
                            <img src={Letterboxd} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>Letterboxd</b>
                        </button>
                    </div>
                </a>
                <a href="https://open.spotify.com/user/josh_08_tony" target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn">
                            <img src={Spotify} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>Spotify</b>
                        </button>
                    </div>
                </a>
                <a href="https://steamcommunity.com/profiles/76561198098768663/" target="_blank" rel="noopener noreferrer">
                    <div class="contacto_box">                  
                        <button class="btn">
                            <img src={Steam} alt="Contacto Correo de Proyectos del Landing Page"></img>
                            <b>Steam</b>
                        </button>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default ContactUs