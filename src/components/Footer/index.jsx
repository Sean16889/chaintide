import React from 'react'
import Logo from '../../assets/logo.png';
import TwIcon from '../../assets/twitter.png';
import TgIcon from '../../assets/tg.png';
import MailIcon from '../../assets/message.png';

export default function Footer({isMobile ,scrollToRef}) {

  const  linkList = [
    {
        name: 'position',
        id: '#position',
        refKey: 'positionRef',
    },
    {
        name: 'Value Proposition',
        id:'#proposition',
        refKey: 'propositionRef',
    },
    {
        name: 'Service Overview',
        id:'#service',
        refKey: 'serviceRef',
    },
    {
        name: 'Partners',
        id:'#Partners',
        refKey: 'PartnersRef',
    },
]

  const onClick = () =>{
    location.href='mailto:sean16889@gmail.com'
  }


  return (
    <div className='w-full mt-[56px]  pt-[56px] xl:mt-[112px] 2xl:mt-[112px]  xl:pt-[112px] 2xl:pt-[112px] px-[15px]  xl:px-[24px] 2xl:px-[24px] pb-[51px]'>
        <div className='w-full 2xl:h-[362px] xl:h-[362px] lg:h-[362px] lg:px-[128px]  xl:px-[128px] 2xl:px-[128px] px-0'>
          <div className='w-full lg:h-full xl:h-full 2xl:h-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row border-t-[1px] pt-[97px] justify-between border-[#FFFFFF] pb-3'>
            <div className='w-full lg:w-[50%] lg:h-full  xl:w-[50%] h-[362px] 2xl:w-[50%] 2xl:h-full xl:h-full flex flex-col  justify-between pb-3 boder-r-[1px] border-[#1B1C1E]'>
                <div className='flex'>
                  <span className='text-sm font-medium text-[#6A6B6C]'>Developers:</span>
                  <div className='ml-[80px]'>
                      <div className='text-left mb-[26px]'>
                        <button className='bg-[#1B1C1E] min-w-[86px] text-white py-[2px] px-4' onClick={onClick}>Submit</button>
                      </div>
                        <p className='text-sm text-[#6A6B6C] font-medium text-left'>Submit your project.</p>
                  </div>
                </div>
                <div className='flex'>
                  <span className='text-sm font-medium text-[#6A6B6C]'>Follow us:</span>
                  <div className='ml-[80px] flex items-center'>
                    <a href='https://x.com/chain_tide' target='_blank'>
                        <div  className='w-[40px] h-[40px] mr-3'>
                           <img src={TwIcon} alt="twitter" className='w-full h-full' srcset="" />
                        </div>
                      </a>
                      <a href='https://t.me/weljoar' target='_blank'>
                        <div className='w-[40px] h-[40px] mr-3'>
                           <img src={TgIcon} alt="telegram" className='w-full h-full' srcset="" />
                        </div>
                      </a>
                      <a href="mailto:sean16889@gmail.com">
                        <div className='w-[40px] h-[40px]'>
                           <img src={MailIcon} alt="Mail" className='w-full h-full' srcset="" />
                        </div>
                      </a>
                   </div>
                </div>
            </div>
            <div className='w-full lg:w-[50%] lg:h-full  xl:w-[50%] h-[362px] 2xl:w-[50%] pl-0 lg:pl-[76px] xl:pl-[76px] 2xl:pl-[76px] mt-[30px] lg:mt-0 xl:mt-0 2xl:mt-0 xl:h-full 2xl:h-full flex flex-col items-center  justify-between pb-3 lg:border-l-[1px] 2xl:border-l-[1px] xl:border-l-[1px] border-[#1B1C1E]'>
                <div className='w-full flex '>
                  <span className='text-sm font-medium text-[#6A6B6C]'>Investor:</span>
                  <div className='ml-[80px]'>
                      <div className='text-left mb-[26px]'>
                        <button className='bg-[#1B1C1E] min-w-[86px] text-white py-[2px] px-4' onClick={onClick}>Get</button>
                      </div>
                        <p className='text-sm text-[#6A6B6C] font-medium text-left'>Get high-quality project library.</p>
                  </div>
                </div>

                <p className='w-full  text-sm text-[#6A6B6C] font-medium xl:text-left 2xl:text-left text-center '>© 2025 Chain Tide. All rights reserved.</p>
            </div>
          </div>
        </div>
        {
          !isMobile 
          &&
          <div className='w-full h-[76px] mx-auto lg:px-[128px] mt-[112px] 2xl:px-[128px] xl:px-[128px] px-0'>
              <footer className='h-full lg:px-[36px] xl:px-[36px] 2xl:px-[36px] flex  items-center justify-between'>
                          <div className='left-btn-block flex items-center cursor-pointer'>
                              <img src={Logo} className='h-[30px] w-[30px] lg:w-[38px] lg:h-[38px] xl:h-[43px] xl:w-[43px] 2xl:h-[43px] xl:w-[43px] '  alt='logo' />
                              <span className='text-lg text-white/[.8] lg:text-base'>Chain Tide</span>
                          </div>
                          <div className='right-btn-block flex items-center flex items-center'>
                              <div>
                                  {
                                      linkList.map((item, index) => {
                                          return (
                                            <a 
                                            href={item.id} 
                                            key={item.id} 
                                            onClick={(e) => {
                                            e.preventDefault();
                                            scrollToRef(item.refKey);
                                            }} 
                                            className='text-white/[.6] text-sm mx-[30px]'>
                                            {item.name}
                                        </a>
                                          )
                                      })
                                  }
                              </div>
                      </div>
              </footer>
          </div>
        }
    </div>
  )
}
