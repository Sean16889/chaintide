import React from 'react';
import styled from 'styled-components';
import { Col, Divider, Row } from 'antd';
import './index.css'
import { useWindowSize } from '../../hooks/useWindowSize';
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';        
export default function ServiceOverview() {

  const { isMobile} =  useWindowSize()

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [Fade()])


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='w-full xl:pb-[207px] 2xl:pb-[207px] pb-[103px] px-[15px] lg:px-[88px] 2xl:px-[106px] xl:px-[88px]'>
        <StyledGradientText className='text-xl xl:text-[30px]/[70px] 2xl:text-[30px]/[70px]'>Service Overview</StyledGradientText>
        <div className='flex-1 w-full mt-[91px]'>
            <Row  gutter={[{ xs: 16, sm: 32, md: 40, lg: 48 },{ xs: 16, sm: 32, md: 40, lg: 48 }]}>
                <Col className="gutter-row" span={isMobile ? 24 :16}>
                    <BlockItem className='item-1  p-4  lg:p-[32px]  xl:p-[32px] 2xl:p-[50px]  xl:h-[353px]'>
                        <BlockTitle className='text-xl  lg:text-[34px]/[44px]  xl:text-[38px]/[50px]  2xl:text-[38px]/[50px]  mx-[20px]  lg:mx-[20px]  xl:mx-[10px] 2xl:mx-[83px]'>Bringing together leading blockchain media</BlockTitle>
                        <BlockContent className='mt-7 mx-[20px]  text-center text-sm lg:text-[18px]/[27px] xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>connecting with well-known blockchain media such as <span className='text-white'>Coindesk, BlockBeats, Odaily, Chain Catcher </span>, etc. to provide various forms of publicity and distribution services such as news flashes, press releases, special topics, etc.</BlockContent>
                    </BlockItem>
                </Col>
                <Col className="gutter-row" span={isMobile ? 24 :8}>
                    <BlockItem className='item-2 py-[50px] xl:h-[353px]'>
                        <BlockTitle className='text-xl lg:text-[34px]/[44px] xl:text-[38px]/[50px]  2xl:text-[38px]/[50px] mx-[20px] lg:mx-[23px] xl:mx-[23px] 2xl:mx-[83px]' style={{color:'#B1B1B1'}}>High-quality <span className='text-white'>Chinese and English</span> real community landing</BlockTitle>
                    </BlockItem>
                </Col>
                <Col className="gutter-row" span={isMobile ? 24 :11}>
                    <BlockItem className='item-3 py-[35px]  xl:px-[15px] 2xl:px-[32px]  xl:h-[436px]'>
                        <BlockTitle className='text-xl  lg:text-[34px]/[36px]  xl:text-[38px]/[50px]  2xl:text-[38px]/[50px] mx-[45px] lg:mx-[20px] xl:mx-0 2xl:mx-0 font-medium'>Active On-Chain Trading Capital Inflow</BlockTitle>
                        <BlockContent className='text-center mt-4 mx-[20px] lg:mx-[25px] xl:mx-0 2xl:mx-0 text-sm lg:text-[18px]/[27px] xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'> It can connect to smart money on the chain such as <span className='text-white'> D哥, 王小二, Bit Square ED哥, Yuyue,</span> etc., directly and quickly covering the active user groups of on-chain transactions and the import of active funds on the chain.</BlockContent>
                        <BlockContent className='mt-4 text-sm lg:mx-[25px] text-sm lg:text-[18px]/[27px] xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Provides chain scanning tools to view on-chain transaction data in real time.</BlockContent>
                    </BlockItem>
                </Col>
                <Col className="gutter-row" span={isMobile ? 24 :13}>
                    <div className="embla">
                        <div className="embla__viewport" ref={emblaRef}>
                            <div className="embla__container">
                                <div className="embla__slide_s"> 
                                    <BlockItem className='item-4 lg:min-h-[388px] xl:h-[436px] 2xl:h-[436px] py-[21px] xl:pt-[63px] 2xl:pt-[63px]  px-[12px] lg:px-[25px] xl:px-[47px] 2xl:px-[47px]'>
                                            <BlockTitle className='text-xl lg:text-[34px]/[27px]   xl:text-[38px]/[40px]  2xl:text-[38px]/[40px] mx-[25px] font-medium'>Ecosystem Accelerator</BlockTitle>
                                            <ul className='list-disc list-inside mt-[38px]'>
                                                <li className='text-[#B1B1B1]'>
                                                    <span className='text-sm lg:text-[18px]/[27px]  xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Rapid inclusion on the CMC platform (first-hand channel, included within <span className='text-white'>24 hours</span> of submission)</span>
                                                </li>
                                                <li className='mt-[17px] text-[#B1B1B1]'>
                                                    <span className='text-sm lg:text-[18px]/[27px]  xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Blockchain smart contract development <span className='text-white'>( own technical team, Sol chain, Ton chain, EVM chain, </span>etc.)</span>
                                                </li>
                                                <li className='mt-[17px] text-[#B1B1B1]'>
                                                    <span className='text-sm lg:text-[18px]/[27px]  xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Connect with exchanges (Huobi, OK, Bitget, Bybit, Gate, Mexc, Lbank, Bithumb, etc.)</span>
                                                </li>
                                            </ul>
                                    </BlockItem>
                                </div>
                                <div className="embla__slide_s"> 
                                    <BlockItem className='item-4 lg:min-h-[388px] xl:h-[436px] 2xl:h-[436px] py-[21px] xl:pt-[63px] 2xl:pt-[63px]  px-[12px] lg:px-[25px] xl:px-[50px] 2xl:px-[50px]'>
                                            <ul className='list-disc list-inside mt-[38px]'>
                                                <li className='text-[#B1B1B1]'>
                                                    <span className='text-sm lg:text-[18px]/[27px]  xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Connect with venture capital FAs such as HONGSHAN, Zhen Fund, NGC, Hashkey, and IOSG</span>
                                                </li>
                                                <li className='mt-[17px] text-[#B1B1B1]'>
                                                    <span className='text-sm lg:text-[18px]/[27px]  xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Blockchain compliance license application</span>
                                                </li>
                                                <li className='mt-[17px] text-[#B1B1B1]'>
                                                    <span className='text-sm lg:text-[18px]/[27px]  xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Compliance with overseas immigration regulations for individuals, employees and family members</span>
                                                </li>
                                            </ul>
                                    </BlockItem>
                                </div>
                            </div>
                        </div>
                        <div className={`embla__controls_s  ${isMobile? 'mt-2':'-mt-14'}`} >
                            <div className="embla__buttons">
                                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

const StyledGradientText = styled.h1`
  background: radial-gradient( 53% 40% at 47% 35%,  #FFFFFF 30%, rgba(255,255,255,0.4) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 500;
`;


 const BlockItem = styled.div`
   border-radius: 20px ;
 `

 const BlockTitle = styled.h1`
   font-weight: 400;
   color: #FFFFFF;
 `

 const BlockContent = styled.p`
   font-weight: 400;
   color: #B1B1B1;
   list-style-position: inside;
 `