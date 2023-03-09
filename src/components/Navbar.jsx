import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Badge, IconButton } from '@mui/material';
import { useContext } from 'react';
import { ProductDetails } from '../Context/ProductContext';
import Cart from './Cart';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

const Navbar = () => {
  const { cart, handleDrawerClose, handleDrawerOpen, open } =
    useContext(ProductDetails);

  const cartCount = cart.length;

  return (
    <>
      <nav className='flex items-center justify-between h-16 px-4 bg-white w-full fixed top-0 drop-shadow-xl z-50'>
        <div className='font-caudex font-bold text-3xl text-off-blue'>
          Cora'l
        </div>

        <div className='md:flex hidden  font-inter items-center gap-3 pr-4'>
          <p>Collections</p>
          <div className='relative'>
            <input
              className='border border-off-blue pl-10  border p-2.5 pr-12 rounded-md placeholder:italic placeholder:text-slate-400'
              type='text'
              placeholder='search for products or brand'
              name='search'
              id=''
            />
            <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-off-blue'>
              <SearchIcon className='' />
            </span>
          </div>

          <IconButton>
            <FavoriteBorderOutlinedIcon className='text-off-blue' />
          </IconButton>

          <IconButton>
            <PersonOutlineRoundedIcon className='text-off-blue' />
          </IconButton>

          <IconButton onClick={handleDrawerOpen}>
            <Badge badgeContent={cartCount} color='primary'>
              <ShoppingCartOutlinedIcon className='text-off-blue' />
            </Badge>
          </IconButton>
        </div>
        {/* <Link to={'categories'}>Categories</Link>
    <div>
      <input type='text' name='' id='' />
    </div> */}
      </nav>
      <Drawer anchor='right' open={open} onClose={handleDrawerClose}>
        <Cart close={handleDrawerClose} />
      </Drawer>
    </>
  );
};

export default Navbar;
