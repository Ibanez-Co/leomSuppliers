import contact_img from '../public/contact_img.png';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const ContactMe =()=>{
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber]= useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: { preventDefault: () => void }) =>{
    e?.preventDefault()
    let payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    }
    setSubmitted(true);
  }
  return(
    <>
      <div className='bg-primary flex items-center justify-center pt-10 gap-12'>
        <div className='text-white font-headline'>
          <Image src={contact_img} alt="Contact Image" className='border-8 border-white'/>
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
              <a href='https://www.twitter.com'><AiFillTwitterCircle/></a>
              <a href='https://www.linkedin.com'><AiFillLinkedin/></a>
              <a href='https://www.instagram.com'><AiFillInstagram/></a>
            </div>

          </div>
          
        </div>
        <form className='flex flex-col text-center px-8 gap-4'>
          <h1 className='font-bold text-white text-5xl'>CONTACT US</h1>
          <h1 className='font-headline text-white text-left'>Full Name</h1>
          <div className='flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between '> 
            <span className='md:mr-8'>
              <input 
              value={firstName} 
              onChange={({target}) =>{setFirstName(target.value)}} 
              placeholder='First Name' 
              type="text" 
              className='border-none rounded-sm w-full bg-gray-50 focus:ring-primary' 
              />
            </span>
            <span className=''>
              <input 
              value={lastName} 
              onChange={({target}) => {setLastName(target.value)}} 
              placeholder='Last Name' 
              type="text" 
              className='border-none rounded-sm bg-gray-50 w-full focus:ring-primary' 
              />
            </span>
          </div>
          <h1 className='font-headline text-white text-left'> Phone Number </h1>
          <span className=''>
            <input 
            value={phoneNumber} 
            onChange={({target})=>{setPhoneNumber(target.value)}} 
            className='border-none rounded-sm  bg-gray-50 w-full' 
            type="phone number" 
            name="Phone Number" 
            placeholder='Phone Number'
            />
          </span>
          <h1 className='font-headline text-white text-left'> Email Address </h1>
          <span className=''>
            <input 
            value={email} 
            onChange={({target})=>{setEmail(target.value)}} 
            className='border-none rounded-sm bg-gray-50 w-full' 
            type="email" 
            name="Email Address" 
            placeholder='Email Address'
            />
          </span>
          <h1 className='font-headline text-white text-left'> Message</h1>
          <span className=' border-primary'>
            <textarea 
            value={message} 
            onChange={({target})=>{setMessage(target.value)}}  
            placeholder='Message for us' 
            unselectable="on" 
            rows={4} 
            className='resize-none rounded-sm bg-gray-50 border-none w-full focus:ring-primary align-text-top '
            >
            </textarea>
          </span>
          <span className='flex justify-center'>
            <button 
            onClick={(e)=>{handleSubmit(e)}} 
            className='flex flex-row font-sans items-center justify-center bg-white rounded-md px-2 py-1 text-primary m-6'
            >
              Submit
            </button>
          </span>
        </form>
      </div>
    </>
  )
}

export default ContactMe;