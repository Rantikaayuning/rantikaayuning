import React from "react";
import NameImg from '../assets/name.png';
import Profile from '../assets/profile.jpg';

const HomePage = () => {
  return (
    <main class="main">
      <section class="home section" id="home">
        <div class="home__container container grid">
          <div class="home__content grid">
            <div class="home__social">
              <a href='https://github.com/Rantikaayuning' target='blank'>
                <i class="bi bi-github"></i>
              </a>
              <a href='https://www.linkedin.com/in/rantika-ayuning-b96563151/' target='blank'>
                <i class="bi bi-linkedin"></i>
              </a>
              <a href='https://www.instagram.com/rantikaayuning' target='blank'>
                <i class="bi bi-instagram"></i>
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
                Contact Me <i class="bi bi-envelope button__icon"></i>
              </a>
            </div>
          </div>

          <div class="home__scroll">
            <a href="#about" class="home__scroll-button button--flex">
              <i class="bi bi-mouse home__scroll-mouse"></i>
              <span class="home__scroll-name">Scroll Down</span>
              <i class="bi bi-arrow-down-circle home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>

      <section class="about section">
        <h2 class="section__title">About Me</h2>
        <span class="section__subtitle">My Introduction</span>
        <div class="about__container container grid">
          <img src={Profile} alt="" class="about__img"/>
          <div class="about__data">
            <p class="about__description">
              Front End Developer passionate about developing user-friendly website design. Excellent problem-solving skills and ability to perform well in a team.
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
              <a download="" href="./assets/resume-rantika.pdf" class="button button--flex">
                Download Resume<i class="bi bi-download button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;