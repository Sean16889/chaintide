import React from 'react';
import styled from 'styled-components';
import Rocket from '../../../assets/Rocket.png';
import Hourglass from '../../../assets/Hourglass.png'

export default function Resources() {
  return (
    <div  className=' xl:pl-[67px] 2xl:pl-[67px]  pt-[48px] pb-[111px] xl:pb-[222px] 2xl:pb-[222px] '>
        <FlowContentBlock className='py-[17px] px-[24px] flex flex-col xl:flex-row 2xl:flex-row items-center xl:ml-[93px] 2xl:ml-[93px] 2xl:max-w-[385px] xl:max-w-[385px]'> 
            <img src={Rocket}  className='w-[24px] h-[24px] mr-[19px]' alt="Rocket" />
            <p className='text-[#C5C5C5] text-base'>Resource import efficiency <span className='text-white'>+300%</span></p>
        </FlowContentBlock>
        <FlowContentBlock className='mt-[70px] py-[17px] px-[24px] flex flex-col xl:flex-row 2xl:flex-row items-center xl:ml-[93px] 2xl:ml-[93px] 2xl:max-w-[385px] xl:max-w-[385px]'> 
            <img src={Hourglass} className='w-[24px] h-[24px] mr-[19px]' alt="Rocket" />
            <p className='text-[#C5C5C5] text-base'>Technology implementation cycle <span className='text-white'>-60%</span></p>
        </FlowContentBlock>
    </div>
  )
}

const FlowContentBlock =  styled.div`
    background: linear-gradient( 90deg, rgba(17,18,20,0.75) 5%, #07080A 76%);
    box-shadow: inset 0px 1px 1px 1px rgba(255,255,255,0.1);
    border-radius: 16px 16px 16px 16px;
    border: 1px solid rgba(255,255,255,0.04);
`