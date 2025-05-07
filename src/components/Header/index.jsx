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
    <div className='Chain_Header w-full h-[76px] py-[16px] mx-auto mt-[20px]'>
        <header className='h-full px-[36px] flex justify-between'>
            <div className='left-btn-block flex items-center cursor-pointer'>
                <img src={Logo} className='h-[30px] w-[30px] xl:h-[43px] xl:w-[43px]'  alt='logo' />
                <span className='text-lg text-white/[.8]'>Chain Tide</span>
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
                                    className='text-white/[.8] text-sm mx-[30px]'>
                                    {item.name}
                                </a>
                            )
                        })
                    }
                </div>
                <button className='connect-btn  ml-[100px]  px-4 py-[10px]' onClick={onClick}>
                    <span className='text-[#2F3031] text-sm font-medium'>Connect Us</span>
                </button>
            </div>
        </header>
    </div>
  )
}
