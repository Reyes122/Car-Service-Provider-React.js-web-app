import React from 'react';
import img1 from "../../../src/assets/images/banner/1.jpg"
import img2 from "../../../src/assets/images/banner/2.jpg"
import img3 from "../../../src/assets/images/banner/3.jpg"
import img4 from "../../../src/assets/images/banner/4.jpg"
import BannerItem from './BannerItem';

const slider = [
  {
    image: img1,
    id: 1,
    next: 2,
    prev: 4
  },
  {
    image: img2,
    id: 2,
    next: 3,
    prev: 1
  },
  {
    image: img3,
    id: 3,
    next: 4,
    prev: 2
  },
  {
    image: img4,
    id: 4,
    next: 1,
    prev: 3
  }
]

const Banner = () => {
          return (
                    <div className='carousel w-full'>
                       {
                         slider.map(sli => <BannerItem
                          key={sli.id}
                          sli={sli}
                         ></BannerItem>)
                       }
                    </div>
          );
};

export default Banner;