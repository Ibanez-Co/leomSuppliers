import Image from 'next/image';
import leom_logo from '../public/LeomLogoNEW.png';

const Footer = () =>{
  return(
    <footer className='bg-primary flex justify-between'>
      <Image src={leom_logo} height='50' alt='logo' className='bg-primary flex m-6'/>
      <p className='text-white flex items-center p-6'>@2023 All rights reserved by LEOM</p>
    </footer>
  );
}

export default Footer;