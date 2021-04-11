import React from "react";
import { Button } from 'reactstrap';
import ProfileImg from '../assets/profileimg.jpg'

const ProfilePage = () => {
  return (
    <div className='about-container'>
      <div className='first-box'>
        <div className='profile-box'>
          <h4>Rantika Ayuning Dewi</h4>
          <p>Result-driven Front End Developer passionate about developing user-friendly website design. Excellent problem-solving skills and ability to perform well in a team. Seeking to become the next Front End Developer, as well as grow and develop my own skills as a coder.</p>
        </div>
        <div className='education-box'>
          <h4>Education</h4>
          <p>Front End Developer</p>
          <p>Glints Academy Batch 10 x Binar Academy</p>
          <p>Dec 2020 - Mar 2021</p><br/>
          <p>Hotel Management</p>
          <p>International Hotel Management School Karanganyar</p>
          <p>May 2016 - April 2019 </p>
        </div>
        <div className='skills-box'>
          <h4>Skills</h4>
          <p>Coding</p>
          <Button outline color="info" size='sm'>HTML5</Button>{' '}
          <Button outline color="success" size='sm'>CSS3</Button>{' '}
          <Button outline color="primary" size='sm'>Javascript</Button>{' '}
          <Button outline color="info" size='sm'>ReactJS</Button>{' '}
          <Button outline color="success" size='sm'>Redux</Button>{' '}
          <Button outline color="primary" size='sm'>GIT</Button>{' '}
        </div><br/>
        <div className='skills-box'>
          <p>Language</p>
          <Button outline color="info" size='sm'>English</Button>{' '}
          <Button outline color="success" size='sm'>Indonesian</Button>{' '}
        </div>
      </div>
      <div className='profile-image'>
        <img src={ProfileImg} alt=''/>
      </div>
    </div>
  );
};

export default ProfilePage;
