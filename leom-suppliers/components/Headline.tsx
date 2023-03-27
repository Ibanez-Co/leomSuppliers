import Image from 'next/image';
import front from '../public/factory-view.png';
import { headlines } from '../constants/headlines';

function Headline() {
  return(
    <>
    <div className='flex bg-primary text-white p-12'>
      <ul className='flex items-center justify-center'>
        {headlines.map((headline,index) =>(
           <li key={headline.id} className='font-headline'>
              <p>{headline.date}</p>
              <h1 className='text-6xl font-bold py-6'>{headline.product}</h1>
              <button className='bg-button text-white font-headline text-md p-2 rounded-sm px-4'> EXPLORE NOW </button>
           </li>
        ))}    
      </ul>


      <Image src={front} className='flex flex-end w-1/2' alt='the factory' />
    </div>
    </>
  );
}

export default Headline;
