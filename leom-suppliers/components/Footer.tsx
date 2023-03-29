import Image from 'next/image';
import leom_logo from '../public/LeomLogo.png';

const Footer = () =>{
  return(
    <footer className='flex justify-between'>
      <Image src={leom_logo} height='50' className='flex'/>
      <p className='flex items-center p-6'>@2023 All rights reserved by LEOM</p>
    </footer>
  );
}

export default Footer;