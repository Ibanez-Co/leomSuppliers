import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import leom_logo from '../public/LeomLogoNEW.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '../constants/navLinks';

function NavBar(props: navBarProps) {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className='bg-primary flex w-full justify-between items-center p-6'>
      <Link href='/' className='w-auto h-auto'>
        <Image src={leom_logo} className='bg-primary flex h-24 w-auto' alt='LEOM Sourcing Logo' />
      </Link>

      <ul className='gap-4 hidden lg:flex text-white'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${
              props.currentPage === nav.title ? 'active-page' : null
            }`}
          >
            <Link href={nav.Link}>{nav.title}</Link>
          </li>
        ))}
        
      </ul>
    <div className='lg:hidden h-24 flex flex-1 items-center justify-end'>
    {toggle ? (
          <RxHamburgerMenu
            className='w-8 h-8 min-[550px]:w-12 min-[550px]:h-12 mr-8'
            onClick={handleClick}
          />
        ) : (
          <AiOutlineClose
            className='w-8 h-8 min-[550px]:w-12 min-[550px]:h-12 mr-8'
            onClick={handleClick}
          />
        )}
          <div
            className={`${
              toggle ? 'hidden' : 'flex'
            }  bg-main-dark w-56 text-lg justify-center absolute top-20 right-0 mx-4 my-2 min-[440px]:my-8 min-[440px]:mx-8 min-w-[140px] text-center rounded-xl sidebar`}
          >
          <ul className='flex flex-col text-black bg-white shadow-md w-full p-6'>
            {navLinks.map((nav, index) => (
              <li key={nav.id}>
                <Link href={nav.Link} className='p-2 w-full block'>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

type navBarProps = {
  currentPage: string,
  bgColor: string,
};

const defaultNavBarProps = {currentPage: "HOME", bgColor: 'bg-secondary'}
NavBar.defaultProps = defaultNavBarProps;

export default NavBar;
