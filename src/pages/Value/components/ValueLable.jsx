import React from 'react'
import styled from 'styled-components'
export default function ValueLabel({name,content,style}) {
  return (
    <div   style={style} className='w-[175px]  xl:w-[544px] 2xl:w-[544px]  text-left xl:px-[24px] 2xl:px-[24px]'>
        <StyledGradientText className='text-2xl xl:text-[42px]/[52px] 2xl:text-[42px]/[52px]'>{name}</StyledGradientText>
        <div className='w-full mt-[20px] xl:mt-[64px] 2xl:mt-[64px]'>
            {content}
        </div>
    </div>
  )
}


const StyledGradientText = styled.h1`
  background: radial-gradient( 53% 50% at 37% 35%,  #FFFFFF 30%, rgba(255,255,255,0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 500;
`;
