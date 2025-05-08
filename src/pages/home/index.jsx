import React, { useRef } from 'react'
import styled from 'styled-components';
import FullLinkCoverage from '../Value';
import ServiceOverview from '../service_overview';
import Partners from '../partners';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export default function HomePage({ positionRef, propositionRef, serviceRef, partnersRef }) {


  

  return (
    <div className='flex-1 flex flex-col'>
      <div ref={positionRef} className='centerblock  h-[600px] xl:h-[927px] 2xl:h-[927px] w-full flex justify-center items-center'>
          <div className='mt-[10px] px-[15px] xl:mt-[75px] 2xl:mt-[75px]'>
              <StyledGradientText className='lg:max-w-[671px]  w-full text-[40px]/[48px] lg:text-[57px]/[63px] xl:text-[64px]/[70px] 2xl:text-[64px]/[70px] xl:w-[755px] 2xl:w-[755px]'>
                  ChainTide surges,Follow the trend.
              </StyledGradientText>
              <Desc className='mt-[10px] lg:mt-[25px] xl:mt-[30px] 2xl:mt-[30px] mb-[30px] lg:mb-[25px] xl:mb-[79px] 2xl:mb-[79px] text-sm  lg:text-sm/[18px]  xl:text-base/[20px] 2xl:text-base/[20px]'>One-stop covering media, communities, on-chain funds and global resources</Desc>
              <CenterBtn className='mt-[18px] lg:mt-[25px] xl:mt-[30px] 2xl:mt-[30px] lg:px-[28px lg:py-[16px]] xl:px-[31px] xl:py-[18px] 2xl:px-[31px] 2xl:py-[18px]  hover:grow text-base xl:text-[18px] 2xl:text-[18px] font-medium'>
                  <a href='https://t.me/weljoar' className='text-black lg:text-base' target='_blank'>Apply Now →</a> 
              </CenterBtn>
              <Tips className='mt-[20px] xl:mt-[32px] xl:mt-[32px]'>The best starting point trusted by web3 projects.</Tips>
          </div>
      </div>
      <div ref={propositionRef}>
        <FullLinkCoverage  />
      </div>
      <div ref={serviceRef}>
        <ServiceOverview   />
      </div>
      <div ref={partnersRef}>
        <Partners        />
      </div>
    </div>
  )
}


const StyledGradientText = styled.h1`
  background:  radial-gradient( 53% 60% at 47% 45%,  #FFFFFF 30%, rgba(255,255,255,0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 400;
`;

const Desc = styled.p`
  font-weight: 400;
  color: rgba(255,255,255,0.8);
  text-shadow: 0px 4px 4px rgba(0,0,0,0.8);
  text-align: center;
`
const CenterBtn = styled.button`
 
  background: #E6E6E6;
  box-shadow: inset 0px 1px 0px 0px #FFFFFF, inset 0px -1px 0px 0px rgba(0,0,0,0.2), 0px 0px 14px 0px rgba(255,255,255,0.19), 0px 0px 4px 2px rgba(7,9,27,0.3);
  border-radius: 43px 43px 43px 43px;
  flex-grow:0.85;
`
const  Tips = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: #C1C1C1;
  text-align: center;
`