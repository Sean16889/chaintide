import React from 'react'
import styled from 'styled-components'
import PartnersSwiper from './components/PartnersSwiper';
import Item1 from '../../assets/swipers/item1.png';
import Item2 from '../../assets/swipers/item2.png';
import Item3 from '../../assets/swipers/item3.png';
import Item4 from '../../assets/swipers/item4.png';
import Item5 from '../../assets/swipers/item5.png';
import Item6 from '../../assets/swipers/item6.png';
import Item7 from '../../assets/swipers/item7.png';
import Item8 from '../../assets/swipers/item8.png';
import Item9 from '../../assets/swipers/item9.png';
import Item10 from '../../assets/swipers/item10.png';
import Item11 from '../../assets/swipers/item11.png';
import Item12 from '../../assets/swipers/item12.png';
import Item13 from '../../assets/swipers/item13.png';

import { useWindowSize } from '../../hooks/useWindowSize';
export default function Partners() {

    const { isMobile } = useWindowSize()

    const  pic = [
        {
            src: Item1,
            alt: 'partners1'
        },
        {
            src: Item2,
            alt: 'partners2'
        },
        {
            src: Item3,
            alt: 'partners3'
        },
        {
            src: Item4,
             alt: 'partners4'
        },
        {
            src: Item6,
             alt: 'partners6'
        },
        {
            src: Item1,
            alt: 'partners1'
        },
        {
            src: Item2,
            alt: 'partners2'
        },
        {
            src: Item3,
            alt: 'partners3'
        },
        {
            src: Item4,
             alt: 'partners4'
        },
        {
            src: Item6,
             alt: 'partners6'
        },
    ]
    
    const  pic2 = [
        {
            src: Item5,
            alt: 'partners5'
        },
        {
            src: Item7,
            alt: 'partners7'
        },
        {
            src: Item8,
            alt: 'partners8'
        },
        {
            src: Item9,
            alt: 'partners9'
        },
        {
            src: Item10,
            alt: 'partners10'
        },
        {
            src: Item11,
            alt: 'partners11'
        },
        {
            src: Item12,
            alt: 'partners12'
        },
        {
            src: Item13,
            alt: 'partners13'
        },
    ]


    return (
        <div  className='pt-[103px] xl:pt-[207px] xl:pb-[162px] 2xl:pt-[207px] 2xl:pb-[162px] flex flex-col items-center w-full px-[15px]'>
            <StyledGradientText className='text-center text-xl xl:text-[30px]/[70px] 2xl:text-[30px]/[70px]'>Partners</StyledGradientText>
            <div className='w-full min-h-[38px]  mt-[26px] xl:mt-[53px] 2xl:mt-[53px] '>
                <div className='w-[350px] lg:w-[1070px] xl:w-[1280px] 2xl:w-[1280px] mx-auto flex flex-col items-center'>
                    <PartnersSwiper   data={pic}   direction={'rtl'} />
                    
                    <PartnersSwiper   data={pic2} direction={'ltr'} className={'mt-[30px] xl:mt-[53px] 2xl:mt-[53px]'}  />
                </div>
            </div>
        </div>
    )
}

const StyledGradientText = styled.h1`
  background: radial-gradient( 53% 60% at 47% 35%,  #FFFFFF 30%, rgba(255,255,255,0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 500;
`;
