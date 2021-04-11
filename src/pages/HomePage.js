import React from "react";
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='title'>
        <h6>Rantika Ayuning Portofolio</h6>
        <p className='checkout'>
        <Link to='/projects'>
          <p>Checkout{' '}<span><i class="bi bi-arrow-right-circle"></i></span></p>
        </Link>
        </p>
      </div>
      <div className='profile-contact'>
        <a href='https://github.com/Rantikaayuning' target='blank'><i class="bi bi-github"></i></a>
        <a href='https://www.linkedin.com/in/rantika-ayuning-dewi-b96563151/' target='blank'><i class="bi bi-linkedin"></i></a>
        <a href='https://github.com/Rantikaayuning' target='blank'><i class="bi bi-instagram"></i></a>
      </div>
        <h5>Email : rantika97@gmail.com</h5>
    </div>
  );
};

export default HomePage;
