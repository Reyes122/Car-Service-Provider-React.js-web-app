import React from 'react';
import './BannerItem.css';

const BannerItem = ({sli}) => {
  const {image, id, prev, next} = sli;
return (
  <div id={`slide${id}`} className="carousel-item relative w-full">
    <img src={image} className="w-full cor" alt='' />
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-9">
      <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
);
};

export default BannerItem;