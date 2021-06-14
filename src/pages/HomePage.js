import React, { useState } from "react";
import NameImg from '../assets/name.png';
import Profile from '../assets/profile.jpg';

const HomePage = () => {
  const [skills, setSkills] = useState(true);

  const toggleSkills = () => {
    setSkills(!skills);
  }

  return (
    <main class="main">
      <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social">
              <a href='https://github.com/Rantikaayuning' target='blank'>
                <i class="uil uil-github home__icon"></i>
              </a>
              <a href='https://www.linkedin.com/in/rantika-ayuning-b96563151/' target='blank'>
                <i class="uil uil-linkedin home__icon"></i>
              </a>
              <a href='https://www.instagram.com/rantikaayuning' target='blank'>
                <i class="uil uil-instagram home__icon"></i>
              </a>
            </div>

            <div class="home__img">
              <img src={NameImg} alt="..."/>
            </div>

            <div class="home__data">
              <h1 class="home__title">Hi, I'm Rantika</h1>
              <h3 class="home__subtitle">Junior Frontend Developer</h3>
              <p class="home__description">
                Result-driven Front End Developer passionate about developing user-friendly website design.
              </p>
              <a href="#contact" class="button button--flex">
                Contact Me <i class="uil uil-envelope button__icon"></i>
              </a>
            </div>
          </div>

          <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="uil uil-mouse-alt home__scroll-mouse"></i>
              <span class="home__scroll-name">Scroll Down</span>
              <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>

      <section class="about section" id="about">
        <h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My Introduction</span>
        <div class="about__container container grid">
          <img src={Profile} alt="" class="about__img"/>
          <div class="about__data">
            <p class="about__description">
              Recently graduated from Glints Academy x Binar Academy coding bootcamp as Junior Front
              End Developer with excellent problem-solving skills and ability to perform well in a team. I’m
              seeking an entry-level position with Company to use my skills in coding.
            </p>
            <div class="about__info">
              <div>
                <span class="about__info-title">2+ </span>
                <span class="about__info-name">Projects<br/>done</span>
              </div>
              <div>
                <span class="about__info-title">Certified </span>
                <span class="about__info-name">Junior Frontend<br/>Developer</span>
              </div>
            </div>

            <div class="about__buttons">
              <p class="button button--flex">
                Download Resume<i class="uil uil-import button__icon"></i>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="skills section" id="skills">
        <h2 class="section__title">Skills</h2>
        <span class="section__subtitle">My technical level</span>
        <div class="skills__container container grid">
          <div class={skills ? "skills__content skills__close" : "skills__content skills__open"}>
            <div class="skills__header">
              <i class="uil uil-list-ul skills__icon"></i>
              <div>
                <h1 class="skills__title">Frontend Developer</h1>
                <span class="skills__subtitle">Certified as Junior Frontend Developer</span>
              </div>
              <i class="uil uil-angle-double-down skills__arrow" onClick={toggleSkills}></i>
            </div>

            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">HTML</h3>
                  <span class="skills__number">90%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__html"></span>
                </div>
              </div>
            </div>
            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">CSS</h3>
                  <span class="skills__number">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__css"></span>
                </div>
              </div>
            </div>
            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">JavaScript</h3>
                  <span class="skills__number">70%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__js"></span>
                </div>
              </div>
            </div>
            <div class="skills__list grid">
              <div class="skills__data">
                <div class="skills__titles">
                  <h3 class="skills__name">React</h3>
                  <span class="skills__number">80%</span>
                </div>
                <div class="skills__bar">
                  <span class="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="qualification section">
        <h2 class="section title">Qualification</h2>
        <span class="section_subtitle">My Journey</span>
        <div class="qualification__container container">
          <div class="qualification__tabs">
            <div class="qualification__button button--flex">
              <i class="uil uil-graduation-cap qualification__icon"></i>Education
            </div>

            <div class="qualification__button button--flex">
              <i class="uil uil-suitcase qualification__icon"></i>Work
            </div>
          </div>
        </div>
      </section>

      <section class="qualification section">
    <h2 class="section title">Qualification</h2>
    <span class="section_subtitle">My Journey</span>
    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div class="qualification__button button--flex">
          <i class="uil uil-graduation-cap qualification__icon"></i>Education
        </div>

        <div class="qualification__button button--flex">
          <i class="uil uil-suitcase qualification__icon"></i>Work
        </div>
        
        <div class="qualification__sections">
          <div class="qualification__content">
              <h3 class="qualification__data">
                <div>
                  <h3 class="qualification__title">Frontend Developer</h3>
                  <span class="qualification__subtitle"></span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calender"></i>
                    2020 - 2021
                  </div>
                </div>

              </h3>
          </div>
        </div>
      </div>
    </div>
  </section>

    </main>
  );
};

export default HomePage;