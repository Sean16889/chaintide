import React from 'react';
import Logo from '../../assets/logo.png'
import { Dropdown,Space } from 'antd';
import { List } from '../../assets/icons';

export default function MibleHeader({scrollToRef}) {
 
 
    const  items = [
        {
            label: 'position',
            id: '#position',
            key: 'positionRef',
        },
        {
            label: 'Value Proposition',
            id:'#proposition',
            key: 'propositionRef',
        },
        {
            label: 'Service Overview',
            id:'#service',
            key: 'serviceRef',
        },
        {
            label: 'Partners',
            id:'#Partners',
            key: 'PartnersRef',
        },
    ]
 
    const onClick = ({ key }) => {
            // console.log('key',key)
            scrollToRef(key);
     }
    return (
    
         <div className={`w-full h-[44px] px-[15px] py-[2px] flex items-center  justify-between  fixed inset-x-0 top-0 z-[599]`}>
                <div className='left-btn-block flex items-center cursor-pointer'>
                    <img src={Logo} className='h-[30px] w-[30px] xl:h-[43px] xl:w-[43px]'  alt='logo' />
                    <span className='text-lg text-white/[.8]'>Chain Tide</span>
                </div>
          
                <Dropdown 
                    menu={{ items, onClick }}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            <List  className={'w-6 h-6'} color={'#FFFFFF'} />
                        </Space>
                    </a>
                </Dropdown>
        </div>
  )
}
