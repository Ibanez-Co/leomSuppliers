import React from 'react'
import { photos } from '../constants/photos'
import Image from 'next/image'
import picture_1 from '../public/picture-1.png'
import picture_2 from '../public/picture-2.png'
import picture_3 from '../public/picture-3.png'
import picture_4 from '../public/picture-4.png'
import picture_5 from '../public/picture-5.png'

const PhotoSection = () => {
  return (
    <div className='flex items-center justify-center py-10 px-8'>
    <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-8 gap-4'>
                        <Image className=' w-full' src={picture_1} alt="" />
                        <Image className=' w-full md:row-span-2' src={picture_2} alt="" />
                        <Image className=' w-full md:row-span-2' src={picture_3} alt="" />
                        <Image className=' w-full md:row-span-4' src={picture_4} alt="" />
                        <Image className='w-auto md:col-span-2 md:row-span-3' src={picture_5} alt="" />
    </div>
    </div>
    // <div className='grid grid-col-3 gap-3 max-w-5xl mx-auto space-y-3'>
    //                 <div className='bg-gray-200'>
    //                     <Image className='inline' src={picture_1} alt="" />
    //                 </div>
    //                 <div>
    //                 <Image className='inline' src={picture_4} alt="" />
    //                 </div> 
    //                 <div className='bg-gray-200'>
    //                     <Image className="" src={picture_2} alt="" />
    //                 </div>
    //                 <div className='bg-gray-200'>
    //                     <Image className='' src={picture_3} alt="" />
    //                 </div>

    //                 <div className='bg-gray-200 w-full col-span-2'>
    //                     <Image className='' src={picture_5} alt="" />
    //                 </div>
    // </div>
  )
}

export default PhotoSection