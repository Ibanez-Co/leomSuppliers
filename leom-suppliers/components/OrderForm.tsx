import tia_logo from '../public/TiaLogo.jpg';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const OrderForm =()=>{
  return(
    <>
      <div className='bg-primary flex items-center justify-center pt-10 gap-12'>
        <div className='text-white font-headline m-10'>
          <Image src={tia_logo} alt="TIA Logo" className='border-8 border-white m-10'/>
          <h1 className='font-bold pt-12'>Address</h1>
          <h2 className=''>New Albany, Ohio</h2>
          <div className='flex space-between'>
            <div className='flex flex-col pr-6 py-2'>
              <h1 className='font-bold '>Call Me</h1>
              <h2>614-361-0281</h2>
            </div>
            <div className='flex flex-col py-2'>
              <h1 className='font-bold '>Email Me</h1>
              <h2>tmonowar@gmail.com</h2>
            </div> 
          </div>
          <div>
            <h1 className='font-bold'>FIND ME WITH</h1>
            <div className='flex text-4xl gap-4'>
              {/* <a href='https://www.twitter.com'><AiFillTwitterCircle/></a> */}
              <a href='https://www.linkedin.com'><AiFillLinkedin/></a>
              <a href='https://www.instagram.com'><AiFillInstagram/></a>
            </div>

          </div>
          
        </div>
        <div className='flex flex-col text-center px-8 '>
          <h1 className='font-bold text-white text-5xl'><a href="https://forms.gle/ynDyw38tvCXECoRC9">Click here to order from Tia</a></h1>
        </div>
      </div>
    </>
  )
}

export default OrderForm;