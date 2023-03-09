import { LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-between px-8 bg-off-blue py-20 text-neutral-400 text-base flex-wrap gap-10'>
        <div className='flex flex-col gap-5'>
          <h2 className='font-caudex font-bold text-3xl text-white'>Cora'l</h2>

          <div className='relative '>
            <input
              type='text'
              placeholder='snsmoshood@gmail.com'
              className='py-3 pr-14 pl-5 rounded w-full'
            />
            <button className='absolute  right-0 top-0 py-3 px-7 bg-[#FB2E86] rounded text-white'>
              Subscribe
            </button>
          </div>
          <div>
            <h5>Contact Info</h5>
            <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
          </div>
        </div>
        <div className='flex gap-20 flex-wrap'>
          <div className='flex flex-col gap-2.5'>
            <h3 className='font-caudex font-bold text-lg text-white'>
              Categories
            </h3>
            <span>Skincare</span>
            <span>Jewelry</span>
            <span>Laptop & Computers</span>
            <span>Cameras & photography</span>
            <span>Video Games & Console</span>
          </div>
          <div className='flex flex-col gap-2.5'>
            <h3 className='font-caudex font-bold text-lg text-white'>Pages</h3>
            <span>Categories</span>
            <span>Browse shop</span>
            <span>Careers</span>
            <span>about us</span>
            <span>Terms & condition</span>
          </div>
          <div className='flex flex-col gap-2.5'>
            <h3 className='font-caudex font-bold text-lg text-white'>
              Customer Care
            </h3>
            <span>My Account</span>
            <span>Discount</span>
            <span>Returns</span>
            <span>Order History</span>
            <span>Order tracking</span>
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-between px-20 py-2.5'>
        <span>© Moshood - All Rights Reserved</span>

        <div className='flex gap-2.5 '>
          <Twitter />
          <LinkedIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
