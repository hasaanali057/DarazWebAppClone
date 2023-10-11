import React from 'react'
import ListItem from '../dynamicList/page';

const SectionTop = () => {
  const items = [
    { imgSrc: '2n.png', text: 'Safe Payments', url: '#' },
    { imgSrc: '1n.png', text: 'Nationwide Delivery', url: '#' },
    { imgSrc: '3n.png', text: 'Free & Easy Returns', url: '#' },
    { imgSrc: '4n.png', text: 'Best Price Guaranteed', url: '#' },
    { imgSrc: '5n.png', text: '100% Authentic Products', url: '#' },
    { imgSrc: '6n.png', text: 'Daraz Verified', url: '#' }
  ];

  return (
    <>
      <div className='px-85 h-60 w-100% mt-5'>
        <div className='bg-[#FFE8DE] w-100% h-[42px] rounded-xl py-[12px] px-[17px]'>
          <ul>
            {items.map((item, index) => (
              <>
                <ListItem key={index} imgSrc={item.imgSrc} text={item.text} url= {item.url}/>
                
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SectionTop