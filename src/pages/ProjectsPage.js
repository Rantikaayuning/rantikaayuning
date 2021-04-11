import React from "react";
import ReactPlayer from 'react-player/youtube';
import MovieApp from '../assets/movie-app.jpg';

const ProjectsPage = () => {
  return (
    <div className='project-page'>
      <div className='app-container'>
        <div className='app-description'>
        <h5>Lektur</h5>
        <p>Description :</p>
        <p>Learning Management System that held online, where students can access materials, tracking their learning progress, and do assessments then get certificate. Through this app, students will be able to track their learning progress, obtain a certificate of course and assessment completion provided by teachers.</p>
        </div>
        <div className='tech-stack'>
          <p>Tech Stack</p>
        </div>
      </div>
      <div>
      <div className='video-container'>
        <ReactPlayer 
          url='https://youtu.be/xEEOIWPKnSo' 
          onEnablePIP={true} 
          volume={0.182} 
          controls
        />
      </div>
      </div>
      <div className='app-container'>
        <div className='app-description'>
          <h5>BBM Warehouse</h5>
          <p>Description :</p>
          <p>Movie app where users can search movie then see detail, rating, and review about that movie.</p>
        </div>
        <div className='tech-stack'>
          <p>Tech Stack</p>
        </div>
      </div>
      <div className='video-container'>
        <img src={MovieApp} alt='movie-app' />
      </div>
    </div>
  );
};

export default ProjectsPage;

