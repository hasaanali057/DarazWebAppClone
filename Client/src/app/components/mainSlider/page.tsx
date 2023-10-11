import React from 'react'
import Coursel from '../coursel/page'

const Slider = () => {

  const items = [ 
    'Groceries & Pets', 
    'Health & Beauty', 
    'Men\'s Fashion', 
    'Women\'s Fashion', 
    'Mother & Baby',
    'Home & Lifestyle',
    'Electronic Devices',
    'Electronic Accessories',
    'TV & Home Appliances',
    'Sports & Outdoor',
    'Watch, Bags & Jewlery',
    'Automotive & Motorbike'
  ]
  return (
    <>
      <section>
        <div className='coursel flex flex-row gap-3 h-344 w-100% pl-85 pr-85 pt-2.5'>
          <div className='catagoriesNav h-344 bg-white w-20%  p-2.5 border border-slate-200 rounded-xl'>
            <ul className='flex flex-col text-darazSize'>
              {items.map((item, index)=> (
                <li key={index}><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className='catagoriesNav h-328 bg-orange-400 w-80%  rounded-xl'>
            <Coursel/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider