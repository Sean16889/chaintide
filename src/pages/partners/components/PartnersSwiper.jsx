import React, { useRef, useState } from 'react';
// Import Swiper React components
import BearCarousel, {BearSlideCard} from 'bear-react-carousel';


export default function PartnersSwiper({data,className,moveTime,PerView,spaceBetween}) {


        
    const datas = data.map(row => {
        return <BearSlideCard key={row.alt}>
                  <img src={row.src} style={{height:'38px'}}  alt={row.alt}     srcset="" />
              </BearSlideCard>;
    });
  return (
    
    <BearCarousel
    // ...ignore some 
        isCenteredSlides={true}
        className={`${className}`}
        isEnableLoop={true}
        isEnableAutoPlay
        slidesPerView={PerView}
        height="38px"
        moveTime={moveTime}
        spaceBetween={spaceBetween}
        data={datas}
        autoPlayTime={1500}       // default(5000ms)
        initStartPlayTime={3000}
    />
  )
}
