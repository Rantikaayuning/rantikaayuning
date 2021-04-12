import React from "react";
// import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='carousel-container'>
        <Carousel/>
      </div>
      {/* <div className='title'>
        <h6>Rantika Ayuning</h6>
        <p className='checkout'>
        <Link to='/projects'>
          <p>Checkout{' '}<span><i class="bi bi-arrow-right-circle"></i></span></p>
        </Link>
        </p>
      </div> */}
      <div className='profile-contact'>
        <a href='https://github.com/Rantikaayuning' target='blank'><i class="bi bi-github"></i></a>
        <a href='https://www.linkedin.com/in/rantika-ayuning-b96563151/' target='blank'><i class="bi bi-linkedin"></i></a>
        <a href='https://www.instagram.com/rantikaayuning' target='blank'><i class="bi bi-instagram"></i></a>
      </div>
        <h6>Email : rantika97@gmail.com</h6>
    </div>
  );
};

export default HomePage;
