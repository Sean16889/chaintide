import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import CoverageContent from './components/coverageContent';
import ValueLabel from './components/ValueLable';
import FlowContent from './components/FlowContent';
import Resources from './components/Resources';
import { useWindowSize } from '../../hooks/useWindowSize';

export default function FullLinkCoverage() {

  const { isMobile } =  useWindowSize();

  return (
    <FullLinkContainer className='min-h-[500px] px-[15px] xl:px-[36px] 2xl:px-[36px] xl:pb-[225px] 2xl:pb-[225px] pb-[100px]'>
       <Timeline
          style={{height:'100%'}}
          mode="alternate"
          pending={true}
          pendingDot={<div className="pendingDot"></div>}
          items={[
            {
              label:<ValueLabel  
                        name={'Full link coverage.'} 
                        content={<p className='text-[#C5C5C5] text-sm xl:text-base  2xl:text-base'>Providing full-link services from <span className='text-[#FFFFFF]'>media {'>>'} community {'>>'} on-chain funds {'>>'} compliance {'>>'} VC/exchange docking</span>, solving the project's resource docking needs in one stop and helping the project grow rapidly.</p>}
                    />,
              color: '#FFFFFF',
              children: <CoverageContent  />,
            },
            {
              label:<ValueLabel  
                        style={{ marginLeft: isMobile ?  '0px' : '56px' }}
                        name={'True flow guarantee.'} 
                        content={<p className='text-[#C5C5C5] text-sm xl:text-base  2xl:text-base'>It has 1000+ active Chinese and English communities, covering the smart money KOL community on the chain, directly reaching real users and ensuring that the flow is real and effective.</p>}
                    />,
              color: '#FFFFFF',
              children: <FlowContent  />,
            },
            {
              label:<ValueLabel  
                        name={'Resources + technology dual drive.'} 
                        content={<p className='text-[#C5C5C5] text-sm xl:text-base  2xl:text-base'>First-hand cooperative channel resources, own technical development team, dual-drive model to help project parties</p>}
                    />,
              color: '#FFFFFF',
              children: <Resources   />,
            },
          ]}
        />
    </FullLinkContainer>
  )
}


const FullLinkContainer = styled.div`
    padding-top: 138px;
`