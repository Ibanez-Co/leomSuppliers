import { products } from '../constants/products';

const ProductPanel =() => {
  let id=0;
  return(
    <>
      <div>
        <div className='flex'>
          <h1 className='flex flex-col w-1/4 justify-center font-headline text-3xl  text-center'>CHECK OUT OUR COLLECTION</h1>
          <div className='grid w-3/4'>
            <ul className='grid grid-cols-3'>
              {products.map((product) => (
                <li key={product.id} className='grid grid-col-span-1 grid-row-span-1'>
                  <button className='border py-6 bg-gray-100 shadow-lg m-4'>{product.name}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=' bg-gray-200 flex items-center justify-center py-16'>
          <ul className='grid grid-cols-4 grid-rows-2'>
            {products[id].values.map((productImage) => (
              <li key={productImage.id} className='grid p-2'>
                <img src={productImage.image} className='col-span-1 shadow-lg rounded-md pb-6'/>
                <button className='grid bg-gray-100 text-red-500 font-bold py-2 px-12 border border-orange-500 rounded'>Contact Us</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
};

export default ProductPanel;