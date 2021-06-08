import React from "react";
import ItemName from '../assets/myname.png';
import Profile from '../assets/profileimg.jpg';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='picture'>
        <img src={Profile} alt='...' loading='lazy'/>
      </div>
      <div className='name'>
        <img src={ItemName} alt='...' loading='lazy'/>
        <h6>email : rantika97@gmail.com</h6>
      </div>
      <div className='profile-contact'>
        <a href='https://github.com/Rantikaayuning' target='blank'><i class="bi bi-github"></i></a>
        <a href='https://www.linkedin.com/in/rantika-ayuning-b96563151/' target='blank'><i class="bi bi-linkedin"></i></a>
        <a href='https://www.instagram.com/rantikaayuning' target='blank'><i class="bi bi-instagram"></i></a>
      </div>
    </div>
  );
};

export default HomePage;
