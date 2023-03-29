import Image from 'next/image';
import salted_basics from '../public/saltedbasics.png';

const OurClients =() => {
  return(
    <>
    <h1 className='font-bold text-4xl text-center p-8'>OUR CLIENTS</h1>
    <div className='flex items-center justify-center'>
      <Image src={salted_basics} alt='saltedbasics'className='flex'></Image>
    </div>
    </>
  )
}

export default OurClients;