import {
  Add,
  HorizontalRule,
  RemoveRedEye,
  FavoriteBorderOutlined,
} from '@mui/icons-material';

import { Button, IconButton, Rating } from '@mui/material';
import { useContext } from 'react';
import { ProductDetails } from '../Context/ProductContext';

const ProductCard = ({ product }) => {
  const { title, image, price, rating } = product;
  const { AddToCart, cart, handleDecrementCount, handleIncrementCount } =
    useContext(ProductDetails);

  const itemInCart = cart.find((item) => item.product.id === product.id);
  const count = itemInCart ? itemInCart.count : 0;

  return (
    <div className=' group flex gap-2.5 flex-col w-72 bg-white rounded-lg hover:drop-shadow-md px-2 py-2 relative'>
      <img src={image} alt='' className='w-72 rounded-t-lg h-72' />
      <div className=' px-2 py-1.5'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-base font-semibold text-off-blue truncate'>
            {title}
          </h3>
          <div className='flex justify-between'>
            <div>
              <Rating
                name='half-rating-read'
                defaultValue={rating.rate}
                precision={0.1}
                readOnly
                size='small'
              />
              <h5 className='font-medium text-base'>${price}</h5>
            </div>
            {count > 0 ? (
              <div className='flex gap-2.5 justify-start items-center top-0 right-0 '>
                <Button
                  variant='outlined'
                  className='!min-w-0 !p-1.5'
                  onClick={() => handleIncrementCount(product)}
                >
                  <Add className='text-off-blue !text-2xl' />
                </Button>

                <span>{count}</span>

                {count > 1 ? (
                  <Button
                    variant='outlined'
                    className='!min-w-0 !p-1.5 '
                    onClick={() => handleDecrementCount(product)}
                  >
                    <HorizontalRule className='text-off-blue  !text-2xl' />
                  </Button>
                ) : (
                  <Button
                    variant='outlined'
                    className='!min-w-0 !p-1.5 '
                    disabled
                  >
                    <HorizontalRule className='text-off-blue  !text-2xl' />
                  </Button>
                )}
              </div>
            ) : (
              ''
            )}
          </div>

          <Button
            variant='contained'
            onClick={() => AddToCart(product)}
            className='!bg-off-blue w-full !normal-case'
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className='group-hover:flex flex-col absolute right-1 gap-2.5 hidden'>
        <IconButton className='backdrop-blur-xl'>
          <RemoveRedEye className='text-off-blue' />
        </IconButton>
        <IconButton className='backdrop-blur-xl'>
          <FavoriteBorderOutlined className='text-off-blue' />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductCard;
