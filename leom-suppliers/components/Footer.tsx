import Image from 'next/image';
import leom_logo from '../public/LeomLogo.png';

const Footer = () =>{
  return(
    <footer>
      <Image src={leom_logo} />
      <p>@2023 All rights reserved by LEOM</p>
    </footer>
  );
}

export default Footer;