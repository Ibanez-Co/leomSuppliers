import { products } from '../constants/products';
import { useState } from 'react';

const ProductPanel =() => {
  const [picture, setPicture] = useState('0')

  return(
    <>
      <div>
        <div className='flex'>
          <h1 className='flex flex-col w-1/4 justify-center font-headline text-3xl  text-center'>CHECK OUT OUR COLLECTION</h1>
          <div className='grid w-3/4'>
            <ul className='grid grid-cols-3'>
              {products.map((product) => (
                <li key={product.id} className='grid grid-col-span-1 grid-row-span-1'>
                  <button 
                  className='border py-6 bg-gray-100 shadow-lg m-4'
                  onClick={(e)=>{setPicture(`${product.id}`)}}
                  >
                    {product.name}
                    </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=' bg-gray-200 flex items-center justify-center py-16'>
          <ul className='grid grid-cols-4 grid-rows-2'>
            {products[parseInt(picture)].values.map((productImage) => (
              <li key={productImage.id} className='grid p-2 place-items-center'>
                <img src={productImage.image} className='col-span-1 shadow-xl rounded-md mb-6'/>
                <button className='grid font-bold py-2 px-2 rounded button-yellow'>Contact Us</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
};

export default ProductPanel;