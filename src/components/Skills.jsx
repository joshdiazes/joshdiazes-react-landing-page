import React from "react";
import CMasMas from "../img/skills-cmasmas.png";
import FullStar from "../img/skills-estrella-llena.svg";
import HalfStar from "../img/skills-estrella-mitad.svg";
import EmptyStar from "../img/skills-estrella-vacia.svg";
import Excel from "../img/skills-excel.png";
import Git from "../img/skills-git.png";
import Ingles from "../img/skills-ingles.png";
import Portugues from "../img/skills-portugues.png";
import PowerBI from "../img/skills-powerbi.png";
import Python from "../img/skills-python.png";
import R from "../img/skills-r.png";
import ReactLogo from "../img/skills-react.png";
import SQL from "../img/skills-sql.png";
import Woocommerce from "../img/skills-woocommerce.png";
import Wordpress from "../img/skills-wordpress.png";

// Componente Stars que recibe un array de estrellas como prop
const Stars = ({ stars }) => {
    return (
      <div className="skills_star">
        {stars.map((star, index) => (
          <img key={index} src={star} alt={`Estrella ${index + 1} de Skills del Landing Page`} style={{ margin: '0 2.5px' }} />
        ))}
      </div>
    );
  };
  

function Skills(){
    return(
        <section class="skills" id="skills">
            <div>
                <h1>SKILLS</h1>
            </div>
            <div class="skills_container">
                <div class="skills_box">
                    <img src={Ingles} alt="Logo Inglés de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, FullStar, FullStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={Portugues} alt="Logo Portugués de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, EmptyStar, EmptyStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={Excel} alt="Logo Excel de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, HalfStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={PowerBI} alt="Logo PowerBi de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, HalfStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={SQL} alt="Logo SQL de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, HalfStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={Python} alt="Logo Python de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, HalfStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={CMasMas} alt="Logo C++ de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, HalfStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={R} alt="Logo R de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, HalfStar, EmptyStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={ReactLogo} alt="Logo React de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, EmptyStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={Git} alt="Logo Git de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, EmptyStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={Wordpress} alt="Logo Wordpress de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, EmptyStar, EmptyStar]} />
                    </div>
                </div>
                <div class="skills_box">
                    <img src={Woocommerce} alt="Logo Woocommerce de Skills del Landing Page"></img>
                    <div class="skills_star">
                        <Stars stars={[FullStar, FullStar, FullStar, EmptyStar, EmptyStar]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills