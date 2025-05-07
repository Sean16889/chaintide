import React from 'react';
import styled from 'styled-components';
import ChineseIcon from '../../../assets/ChineseIcon.png';
import EnglishIcon from '../../../assets/EnglishIcon.png';
import Vuesax from '../../../assets/vuesax_linear_wallet.png'
import FlowContent3 from '../../../assets/FlowContent3.png'

export default function FlowContent() {
  return (
    <div className='mx-auto pt-[95px] pb-[131px]'>
        <div className='flex flex-col xl:flex-row 2xl:flex-row justify-between w-[175px] xl:w-[484px] 2xl:w-[484px] '>
            <FlowContentBlock className='flex-1 mr-0 xl:mr-[17px] 2xl:mr-[17px] p-[17px]'>
                 <div className='2xl: 2xl:h-[48px] text-[22px]/[48px] text-white text-left'>Communities</div>
                 <StyledGradientText className='text-left mt-[26px] text-[40px]/[48px]'>1000+</StyledGradientText>
            </FlowContentBlock>
            <div>
                <FlowContentBlock className='xl:h-[74px] 2xl:h-[74px] flex items-center p-[17px] mb-[10px] xl:mb-[22px] 2xl:mb-[22px]'>
                    <img src={ChineseIcon} className='w-[14px] h-[14px]' />
                    <div className='w-[111px]'>
                        <p className='text-center text-[#C5C5C5] text-[16px]'>Chinese Community</p>
                    </div>
                </FlowContentBlock>
                <FlowContentBlock className='xl:h-[74px] 2xl:h-[74px] flex items-center p-[17px]'>
                    <img src={EnglishIcon} className='w-[14px] h-[14px]' />
                    <div className='w-[111px]  '>
                        <p className='text-center text-[#C5C5C5] text-[16px]'>English Community</p>
                    </div>
                </FlowContentBlock>
            </div>
        </div>
        <div className='xl:w-[484px] 2xl:w-[484px] mt-[22px]'> 
            <FlowContentBlock className='flex-1 p-[17px] px-2'>
                <div className='flex items-center flex-col xl:flex-row 2xl:flex-row'>
                    <img src={Vuesax} className='w-[36px] h-[36px]' />
                    <div className='flex-1 ml-[12px]'>
                        <p className='text-[#C5C5C5] text-[18px] text-left'>Directly connect with active on-chain trading KOLs.</p>
                    </div>
                </div>
                <img src={FlowContent3} className='h-[112px] xl:h-[224px] 2xl:h-[224px] mx-auto mt-[20px]' />
            </FlowContentBlock>
        </div>
    </div>
  )
}

const FlowContentBlock =  styled.div`
    background: linear-gradient( 90deg, rgba(17,18,20,0.75) 5%, #07080A 76%);
    box-shadow: inset 0px 1px 1px 1px rgba(255,255,255,0.1);
    border-radius: 16px 16px 16px 16px;
    border: 1px solid rgba(255,255,255,0.04);
`

const StyledGradientText = styled.p`
    background: linear-gradient(45deg, #FFFFFF, rgba(255,255,255,0.4));
    -webkit-background-clip: text;
    /* line-height: 48px; */
    background-clip: text;
    color: transparent;
    font-weight: 400;
    /* font-size: 40px; */
`;