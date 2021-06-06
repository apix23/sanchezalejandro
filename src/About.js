import React, { useState } from "react";
import "./About.css";
import Footer from "./Footer";
import profileAbout from "./images/profileAbout.png";

const About = () => {
  const [isTextDisplayed, setIsTextDisplayed] = useState(false);
  const lastP = document.querySelector("#lastP");
  console.log("this is the value of the const", lastP);
  const displayHideText = (e) => {
    e.preventDefault();
    isTextDisplayed &&
      document.querySelector(".about__containerInfo h2").scrollIntoView();
    setIsTextDisplayed(!isTextDisplayed);
  };

  return (
    <>
      <div className="about">
        <aside>
          <img src={profileAbout} alt="" />
          <div>
            <h4>Hobbies e intereses</h4>
            <p>videojuegos, ciclismo, futbol, tenis, finanzas</p>
            <h4>Temas que deseo aprender</h4>
            <p>python, spring boot, trading, IA, Machine Learning</p>
          </div>
        </aside>
        <section className="about__containerInfo">
          <article style={{ overflowY: isTextDisplayed ? "scroll" : "hidden" }}>
            <h2>Alejandro Jose Sanchez Gomez</h2>
            <p>Hi, thank you for being here!</p>
            <p>
              I was born in Venezuela, but I am currently located in Barcelona,
              Spain.
            </p>
            <p>
              When I arrived here I had the opportunity to take a Bootcamp with{" "}
              <a
                className="about__externalsLinks"
                href="https://migracode.openculturalcenter.org/">
                Migracode Barcelona
              </a>
              , which helped me recover the confidence in myself and in my
              skills. In this Bootcamp, we worked with Git, React.js, Node.js,
              PostgreSQL, scrum methodologies, and VScode as an IDE.
            </p>
            <p>
              I consider myself proactive and committed to each one of the
              activities I do. I would say one of my weaknesses is the design, I
              prefer to do the layout and develop functionalities. I’m very
              patient and as a team player, is easy for me to give my opinion
              about a project. On the other hand, I like others to give
              suggestions about my work or any kind of advice. I know I don’t
              know everything and that you can always learn from others.
            </p>
            <p>
              My last job was a substitution by paternity leave at{" "}
              <a className="about__externalsLinks" href="https://avanttic.com/">
                avanttic
              </a>
              , I worked as a system administrator. I started this position at
              the beginning of the pandemic, so I’m getting used to working
              remotely. There, I worked fixing some laptop problems, working
              with the G-suite platform, inventory management, and company
              registrations and delistings.
            </p>
            <p id="lastP">
              By today I have already finished the Bootcamp and I’m actively
              looking for job opportunities. I’m looking for a friendly place
              where I can grow personally and professionally.
            </p>

            {isTextDisplayed ? (
              <a
                className="about__showHideText"
                href=""
                onClick={displayHideText}>
                see less
              </a>
            ) : null}
          </article>
          {!isTextDisplayed && !lastP ? (
            <a
              className="about__showHideText"
              href="#"
              onClick={displayHideText}>
              Read more
            </a>
          ) : null}
        </section>
      </div>
    </>
  );
};

export default About;
