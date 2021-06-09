import React from "react";
// import ItemName from '../assets/myname.png';
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
              <img src={Profile} alt="..."/>
            </div>

            <div class="home__data">
              <h1 class="home__title">Hi, I'm Rantika</h1>
              <h3 class="home__subtitle">Frontend Developer</h3>
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
    </main>
  );
};

export default HomePage;