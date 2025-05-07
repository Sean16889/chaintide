import React from 'react';
import styled from 'styled-components';
import { Col, Divider, Row } from 'antd';
import './index.css'
import { useWindowSize } from '../../hooks/useWindowSize';
export default function ServiceOverview() {

  const { isMobile} =  useWindowSize()
  
  return (
    <div className='w-full xl:pb-[207px] 2xl:pb-[207px] pb-[103px] px-[15px] 2xl:px-[106px] xl:px-[106px]'>
        <StyledGradientText className='text-xl xl:text-[30px]/[70px] 2xl:text-[30px]/[70px]'>Service Overview</StyledGradientText>
        <div className='flex-1 w-full mt-[91px]'>
            <Row  gutter={[{ xs: 16, sm: 32, md: 40, lg: 48 },{ xs: 16, sm: 32, md: 40, lg: 48 }]}>
                <Col className="gutter-row" span={isMobile ? 24 :16}>
                    <BlockItem className='item-1  p-4 xl:p-[50px] 2xl:p-[50px]  xl:h-[353px]'>
                        <BlockTitle className='text-xl  xl:text-[38px]/[50px]  2xl:text-[38px]/[50px] mx-[20px] xl:mx-[83px] 2xl:mx-[83px]'>Bringing together leading blockchain media</BlockTitle>
                        <BlockContent className='mt-7 mx-[20px] text-center text-sm xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>connecting with well-known blockchain media such as <span className='text-white'>Coindesk, BlockBeats, Odaily, Chain Catcher </span>, etc. to provide various forms of publicity and distribution services such as news flashes, press releases, special topics, etc.</BlockContent>
                    </BlockItem>
                </Col>
                <Col className="gutter-row" span={isMobile ? 24 :8}>
                    <BlockItem className='item-2 py-[50px] xl:h-[353px]'>
                        <BlockTitle className='text-xl xl:text-[38px]/[50px]  2xl:text-[38px]/[50px] mx-[20px] xl:mx-[83px] 2xl:mx-[83px]' style={{color:'#B1B1B1'}}>High-quality <span className='text-white'>Chinese and English</span> real community landing</BlockTitle>
                    </BlockItem>
                </Col>
                <Col className="gutter-row" span={isMobile ? 24 :11}>
                    <BlockItem className='item-3 py-[35px] px-[] xl:px-[27px] 2xl:px-[27px]  xl:h-[436px]'>
                        <BlockTitle className='text-xl  xl:text-[38px]/[50px]  2xl:text-[38px]/[50px] mx-[25px] font-medium'>Active On-Chain Trading Capital Inflow</BlockTitle>
                        <BlockContent className='mt-4 mx-[10px] text-sm xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'> It can connect to smart money on the chain such as <span className='text-white'> D哥, 王小二, Bit Square ED哥, Yuyue,</span> etc., directly and quickly covering the active user groups of on-chain transactions and the import of active funds on the chain.</BlockContent>
                        <BlockContent className='mt-4 text-sm xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Provides chain scanning tools to view on-chain transaction data in real time.</BlockContent>
                    </BlockItem>
                </Col>
                <Col className="gutter-row" span={isMobile ? 24 :13}>
                    <BlockItem className='item-4 xl:h-[436px] 2xl:h-[436px] py-[21px] xl:pt-[63px] 2xl:pt-[63px]  px-[12px] xl:px-[47px] 2xl:px-[47px]'>
                        <BlockTitle className='text-xl  xl:text-[38px]/[40px]  2xl:text-[38px]/[40px] mx-[25px] font-medium'>Ecosystem Accelerator</BlockTitle>
                        <ul className='list-disc list-inside mt-[38px]'>
                            <li className='text-[#B1B1B1]'>
                                <span className='text-sm xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Rapid inclusion on the CMC platform (first-hand channel, included within <span className='text-white'>24 hours</span> of submission)</span>
                            </li>
                            <li className='mt-[17px] text-[#B1B1B1]'>
                                <span className='text-sm xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Blockchain smart contract development <span className='text-white'>( own technical team, Sol chain, Ton chain, EVM chain, </span>etc.)</span>
                            </li>
                            <li className='mt-[17px] text-[#B1B1B1]'>
                                <span className='text-sm xl:text-[20px]/[30px] 2xl:text-[20px]/[30px]'>Connect with exchanges (Huobi, OK, Bitget, Bybit, Gate, Mexc, Lbank, Bithumb, etc.)</span>
                            </li>
                        </ul>
                    </BlockItem>
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