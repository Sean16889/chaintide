import React from 'react';
import Logo from '../../assets/logo.png'

export default function Header({scrollToRef}) {


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
    <div className='Chain_Header  lg:max-w-[1070px] xl:max-w-[1070px] 2xl:max-w-7xl w-full xl:h-[68px] 2xl:h-[76px] py-[16px] mx-auto xl:mt-[14px] 2xl:mt-[20px]'>
        <header className='h-full px-[36px] flex justify-between'>
            <div className='left-btn-block flex items-center cursor-pointer'>
                <img src={Logo} className='h-[30px] w-[30px] lg:w-[38px] lg:h-[38px] xl:w-[38px] xl:h-[38px] 2xl:h-[43px] 2xl:w-[43px]'  alt='logo' />
                <span className=' lg:text-base xl:text-base  2xl:text-lg text-white/[.8]'>Chain Tide</span>
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
                                    className='text-white/[.8] lg:text-xs xl:text-xs 2xl:text-sm lg:mx-[27px] xl:mx-[27px] 2xl:mx-[30px]'>
                                    {item.name}
                                </a>
                            )
                        })
                    }
                </div>
                <button className='connect-btn lg:ml-[60px] xl:ml-[80px] 2xl:ml-[100px] lg:px-3 lg:py-[5px] xl:px-3 xl:py-[5px]  2xl:px-4 2xl:py-[8px]' onClick={onClick}>
                    <span className='text-[#2F3031] lg:text-xs  xl:text-xs 2xl:text-sm font-medium'>Connect Us</span>
                </button>
            </div>
        </header>
    </div>
  )
}
