import React from "react";
import ReactPlayer from 'react-player/youtube';
import MovieApp from '../assets/movie-app.jpg';
import { projects } from '../assets/DummyData/DummyData';

const ProjectsPage = () => {
  return (
    <div className='project-page'>
      {projects.map((item, id) => (
      <>
      <div className='app-container'>
        <div className='app-description'>
        <h4>{item.name} <i class="bi bi-cast"></i></h4>
        <p>Description :</p>
        <p>{item.desc}</p>
        <p>
          <i class="bi bi-link-45deg"></i>{' '}
          <a href={item.link} target='_blank' rel='noreferrer'>
          {item.link}
          </a>
        </p>
        </div>
        <div className='tech-stack'>
          <h4>Tech Stack</h4>
        {item.tech.map((item, id) => (
          <span>
            <img src={item} alt='' key={id}/>{' '}
          </span>
        ))}
        </div>
      </div>
      <div>
      <div className='video-container'>
        {item.video === null ? (
          <img src={MovieApp} alt='movie-app' />
        ) : (
          <ReactPlayer 
          url={item.video} 
          onEnablePIP={true} 
          volume={0.182} 
          controls
        />
        )}
      </div>
      </div>
      </>
      ))}
    </div>
  );
};

export default ProjectsPage;

