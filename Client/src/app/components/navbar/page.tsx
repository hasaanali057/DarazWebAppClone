import Link from 'next/link';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = ({className}: any) => {
  return (
    <div className={className}>
    { /*Top Bar Div*/ }
      <div className='topBar'>
        <div className=' pl-85 pr-85 flex flex-row bg-orange-550 text-gray-50 text-xs gap-8'>
          <a href='' className='nav_link'>Become a Seller</a>
          <a href='' className='nav_link'>Daraz Affiliate Program</a>
          <a href='' className='nav_link'>Help and Support</a>
        </div>
      </div>

      { /*Bottom Bar Div*/ }
      <div className='w-100% search-bar pt-2 flex bg-orange-550'>
        <div className='pl-85 pr-85 flex flex-row gap-5 items-center h-14 w-100%'>
          <a href='#' className='logo'>
            <img src='logoTop.png' alt='logoTop' className='h-LogoImageHeight w-LogoImageWidth' />
          </a>
          <form className='flex items-center flex-grow'>
            <input
              className='text-sm block flex-grow h-SearchHeight py-13 px-19 leading-normal bg-white text-gray-800 border border-gray-200 rounded-xl me-2 focus:outline-none'
              type='search'
              placeholder='Search in Daraz'
              aria-label='Search'
            />
            <button className='inline-block text-center select-none border font-normal py-1 px-2 leading-normal no-underline text-orange-100 border-orange-100 bg-orange-100 h-SearchHeight rounded-xl'>
              <BsSearch size={ '15px' } color='#FA8950' />
            </button>
          </form>
          <a href=''><i className='fa-solid fa-cart-arrow-down'></i></a>
          <a href=''><img src='' alt='' /></a>
          <div className='flex flex-row gap-2 select-none font-normal py-1 px-2 leading-normal no-underline   h-SearchHeight rounded-md hover:bg-orange-650'>
            <Link href='' className='font-medium text-white flex'>
              <IoPersonOutline size={ '20px' } color='#fff' />
              Login
            </Link>
          </div>

          <div className='flex flex-row gap-2 select-none font-normal py-1 px-2 leading-normal no-underline   h-SearchHeight rounded-md hover:bg-orange-650'>
          <Link href='' className='font-medium text-white flex'>
            <IoPersonOutline size={ '20px' } color='#fff' /> 
            Signup</Link>
          </div>
            
          <div className='flex flex-row gap-2 select-none font-normal py-1 px-2 leading-normal no-underline   h-SearchHeight rounded-md hover:bg-orange-650'>
            <Link href='' className='font-medium text-white'> 
              <AiOutlineShoppingCart size={ '27px' } color='#fff' /> 
            </Link>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default NavBar