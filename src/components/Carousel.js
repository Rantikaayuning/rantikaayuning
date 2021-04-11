import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import ItemName from '../assets/myname.png';
import ItemDesc from '../assets/item2.png';

const items = [
  {
    src: ItemName,
    key: '1'
  },
  {
    src: ItemDesc,
    key: '2'
  }
];

const Carousel = () => 
<UncontrolledCarousel 
  items={items} 
  className="custom-carousel"
  tag='div'
/>

export default Carousel;