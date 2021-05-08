import React from "react";
import Footer from "./Footer";
import "./Homepage.css";
import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascriptLogo.png";
import node from "./images/node.png";
import react from "./images/reactLogo.png";
const Homepage = () => {
  return (
    <main className="homepage">
      <section className="homepage__section">
        <article>
          <h2 className="text-center">Alejandro Sanchez</h2>
          <h1 className="text-center">
            Fullstack <br /> Developer
          </h1>
          <div className="homepage__skillContainer">
            <h3 className="text-center">Tecnologías usadas</h3>
            <div className="homepage__logoContainer">
              <img src={html} className="homepage__imageLogo" alt="html" />
              <img src={css} className="homepage__imageLogo" alt="css" />
              <img
                src={javascript}
                className="homepage__imageLogo"
                alt="javascript"
              />

              <img src={node} className="homepage__imageLogo" alt="node" />
              <img src={react} className="homepage__imageLogo" alt="react" />
            </div>
          </div>
        </article>
        <img
          src="https://i.pinimg.com/originals/6d/16/6b/6d166b1ef3c3e5bd661fa7fdb866483b.jpg"
          alt="Alejandro Sanchez"
          className="circle__image"
        />
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Homepage;
