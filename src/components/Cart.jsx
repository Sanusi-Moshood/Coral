import {
  Add,
  Close,
  HorizontalRule,
  ShoppingBasket,
} from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useContext } from 'react';
import { ProductDetails } from '../Context/ProductContext';

const Cart = () => {
  const { cart, setCart, handleDrawerClose, handleRemoveFromCart, totalPrice } =
    useContext(ProductDetails);

  const handleIncrementCount = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.product.id === item.product.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const handleDecrementCount = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.product.id === item.product.id
        ? { ...cartItem, count: cartItem.count - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };
  return (
    <>
      <div className='overflow-auto h-[calc((100vh_-_80px)_-_3.25rem)]'>
        <div className='flex items-center justify-between px-6 h-16 border-b border-neutral-200'>
          <h1>
            {cart.length} item{cart.length > 1 ? 's' : ''}{' '}
          </h1>

          <IconButton onClick={handleDrawerClose}>
            <Close />
          </IconButton>
        </div>
        {cart.length === 0 && (
          <div className='flex h-full items-center justify-center flex-col w-72'>
            <ShoppingBasket className=' !w-6/12 !h-20 text-off-blue' />
            <h1 className='text-xl font-medium'>Your Cart is empty</h1>
          </div>
        )}
        {cart.map((item) => (
          <div
            key={item.product.id}
            className='flex items-center justify-between py-4 px-5 border-b border-neutral-200'
          >
            <div className='flex flex-col items-center gap-1 '>
              <Button
                variant='outlined'
                className='!min-w-0 !p-1.5 !rounded-full'
                onClick={() => handleIncrementCount(item)}
              >
                <Add className='text-off-blue !text-xl' />
              </Button>

              <span className='text-base'>{item.count}</span>

              {item.count > 1 ? (
                <Button
                  variant='outlined'
                  className='!min-w-0 !p-1.5 !rounded-full'
                  onClick={() => handleDecrementCount(item)}
                >
                  <HorizontalRule className='text-off-blue  !text-xl' />
                </Button>
              ) : (
                <Button
                  variant='outlined'
                  className='!min-w-0 !p-1.5 !rounded-full'
                  disabled
                >
                  <HorizontalRule className='text-grey-400  !text-xl' />
                </Button>
              )}
            </div>
            <img src={item.product.image} alt='' className='w-16 mx-5 h-16' />

            <div className='w-40'>
              <h3 className='text-sm font-semibold text-off-blue truncate'>
                {item.product.title}
              </h3>
              <small>
                ${item.product.price} x {item.count}
              </small>
              <h3 className='text-sm font-medium text-rose-500 mt-1'>
                ${(item.product.price * item.count).toFixed(2)}
              </h3>
            </div>

            {/* remove from cart icon */}
            <IconButton
              className='!ml-5'
              onClick={() => handleRemoveFromCart(item)}
            >
              <Close />
            </IconButton>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className='p-5 flex flex-col gap-1.5'>
          <Button variant='contained' className='!bg-off-blue !normal-case'>
            Checkout Now {totalPrice}
          </Button>
          <Button
            variant='outlined'
            className='!border-off-blue !text-off-blue !normal-case'
          >
            View in cart
          </Button>
        </div>
      )}
    </>
  );
};

export default Cart;
