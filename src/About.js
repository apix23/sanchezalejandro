import React from "react";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  return (
    <main className="mainContent">
      <div className="about">
        <aside>
          <img src="" alt="" />
          <h5>Hobbies e intereses</h5>
          <p>videojuegos, ciclismo, futbol, tenis, finanzas</p>
          <h5>Temas que deseo aprender</h5>
          <p>python, spring boot, trading, IA, Machine Learning</p>
        </aside>
        <section className="about__containerInfo">
          <h2>Alejandro Jose Sanchez Gomez</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nostrum et, accusamus voluptatem molestias reiciendis dolorum quia
            fugit praesentium quos repudiandae dolor rerum! Ut sequi maxime nisi
            architecto velit magni.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default About;
