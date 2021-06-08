import React from "react";
import { Button } from 'reactstrap';
// import ProfileImg from '../assets/profileimg.jpg';
import { education, languages, profile, skills } from '../assets/DummyData/DummyData';

const ProfilePage = () => {
  return (
    <div className='about-container'>
      <div className='profile-image'>
        {/* <img src={ProfileImg} alt=''/> */}
        <h5>ABOUT ME</h5>
      </div><br/>
      <div className='right-box'>
      {profile.map((item, id) => (
        <div className='profile-box'>
          <h4>{item.name}</h4>
          <p>{item.summary}</p><br/>
        </div>
        ))}
        <div className='education-box'>
          <h4>Education</h4><br/>
        {education.map((item, id) => (
          <>
          <p>{item.major}</p>
          <p>{item.school}</p>
          <p><i class="bi bi-calendar"></i> {item.date}</p><br/>
          </>
        ))}
        </div>
        <div className='skills-box'>
          <h4>Skills</h4>
          <p>Coding</p>
          {skills.map((item, id) => (
          <>
            <Button outline key={id} color={id%2 === 0 ? "info" : "success"}size='sm'>{item}</Button>{' '}
          </>
          ))}
        </div><br/>
        <div className='skills-box'>
          <h4>Language</h4>
          {languages.map((item, id) => (
          <>
          <Button outline key={id} color={id%2 === 0 ? "info" : "success"}size='sm'>{item}</Button>{' '}
          </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
