import leom_logo from '../public/LeomLogo.png';
import Image from 'next/image';

const About = () => {
  return(
  <>
    <div className='grid grid-cols-2 py-6 bg-gray-100'>
      <div className='grid col-span-1 bg-white shadow-lg m-6'>
        <h1 className='grid  font-bold text-4xl pt-12 pl-16 pb-6'>About Us</h1>
        <p className='grid font-headline text-lg px-16 py-4'>
        LEOM is an apparel supplier. We work with you to custom-design the apparel products
        you want to sell. We can handle shipments of apparel in the tens of 
        thousands of pieces. Please send us your contact information if you wish to do business 
        with us. We are based in New Albany, Ohio with a large warehouse of products.
        </p>
        <button className='blue-button rounded font-bold items-center justify-center ml-16 mb-16'> Read More</button>
      </div>
      <div className='grid col-span-1 row-span-3 items-center justify-center'>
        <Image src={leom_logo} className='grid shadow-lg' alt='LEOM'></Image>
      </div> 
    </div>
  </>
  )
}

export default About;