'use client';

import React from 'react';

interface obj{
  imgSrc: string;
  text: string;
  url: string;
}

function ListItem({ imgSrc, text, url }: obj) {
  return (
    <div className='inline-block text-xs leading-3'>
      <li className='flex space-x-2'>
        <img src={imgSrc} alt={text} className='' />
        <a className='text-sm' href={url}>{text}</a>
      </li>
    </div>
  );
}

export default ListItem;