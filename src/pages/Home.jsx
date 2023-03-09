import bagg from '../Images/creative-headline-APNnyM36puU-unsplash 2.jpg';
import glass from '../Images/laura-chouette-HPhjfQvaf5g-unsplash 3.jpg';
import watch from '../Images/laura-chouette-Atomp7YdMaE-unsplash 1.jpg';
import pef from '../Images/louis-mornaud-peqgmGBtsfI-unsplash 2.jpg';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import ProductCard from '../components/ProductCard';
import Hours_support from '../Images/24-hours-support 1.svg';
import quality from '../Images/premium-quality 1.svg';
import free_delivery from '../Images/free-delivery 1.svg';
import cashback from '../Images/cashback 1.svg';
import amazon from '../Images/Vector.svg';
import dg from '../Images/Dolce_&_Gabbana 1.svg';
import apple from '../Images/Vector-1.svg';
import prada from '../Images/Prada-Logo 1.svg';
import zara from '../Images/Zara_Logo 1.svg';
import channel from '../Images/Chanel_logo_interlocking_cs 1.svg';

import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const NewArrival = useLoaderData();

  return (
    <>
      <div className='w-full h-screen'>
        <div className=' h-full hero_img flex items-center justify-end'>
          <div className='flex flex-col gap-4 h-full my-10 w-7/12 text-off-blue bg-[rgba(222,_222,_222,_0.7)] pl-10 py-12 h-max rounded-2xl'>
            <h1 className='text-6xl font-extrabold'>Carry your Funk</h1>
            <p className='text-3xl font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              fuga.
            </p>
            <Link
              to={'/shop'}
              className='text-base py-2.5 px-8 bg-off-blue text-white w-max rounded-lg mt-6 gap-2 flex'
            >
              <EastRoundedIcon />
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className='py-28'>
        <h2 className='text-center text-5xl text-off-blue font-medium font-caudex'>
          New Arrivals
        </h2>

        <div className='flex gap-10 items-center w-full justify-center pt-12 flex-wrap'>
          {NewArrival.map((Product) => (
            <ProductCard key={Product.id} product={Product} />
          ))}

          {/* <div className='flex gap-2.5 flex-col w-72 bg-white rounded-lg hover:drop-shadow-md'>
            <img src={bag} alt='' className='w-full rounded-t-lg' />
            <div className='flex justify-between px-2  py-1.5'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-semibold text-off-blue'>
                  Pink bag
                </h3>
                <span className='text-base text-neutral-600'>Balenciaga</span>
                <span className='font-medium text-base'>$500.78</span>
              </div>
              <div className='flex gap-2.5'>
                <ShoppingCartOutlinedIcon className='text-off-blue' />
                <FavoriteBorderOutlinedIcon className='text-off-blue' />
              </div>
            </div>
          </div> */}
          {/* <div className='flex gap-2.5 flex-col w-72 '>
            <img src={bag} alt='' className='w-full rounded-lg' />
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1 '>
                <h3 className='text-lg font-semibold text-off-blue'>
                  Pink bag
                </h3>
                <span className='text-base text-neutral-600'>Balenciaga</span>
                <span className='font-medium text-base'>$500.78</span>
              </div>
              <div className='flex gap-2.5'>
                <ShoppingCartOutlinedIcon className='text-off-blue' />
                <FavoriteBorderOutlinedIcon className='text-off-blue' />
              </div>
            </div>
          </div>
          <div className='flex gap-2.5 flex-col w-72 '>
            <img src={bag} alt='' className='w-full rounded-lg' />
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1 '>
                <h3 className='text-lg font-semibold text-off-blue'>
                  Pink bag
                </h3>
                <span className='text-base text-neutral-600'>Balenciaga</span>
                <span className='font-medium text-base'>$500.78</span>
              </div>
              <div className='flex gap-2.5'>
                <ShoppingCartOutlinedIcon className='text-off-blue' />
                <FavoriteBorderOutlinedIcon className='text-off-blue' />
              </div>
            </div>
          </div>
          <div className='flex gap-2.5 flex-col w-72 '>
            <img src={bag} alt='' className='w-full rounded-lg' />
            <div className='flex justify-between px-3'>
              <div className='flex flex-col gap-1 '>
                <h3 className='text-lg font-semibold text-off-blue'>
                  Pink bag
                </h3>
                <span className='text-base text-neutral-600'>Balenciaga</span>
                <span className='font-medium text-base'>$500.78</span>
              </div>
              <div className='flex gap-2.5'>
                <ShoppingCartOutlinedIcon className='text-off-blue' />
                <FavoriteBorderOutlinedIcon className='text-off-blue' />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className='py-28'>
        <h2 className='text-center text-5xl text-off-blue font-medium font-caudex'>
          Top Collections
        </h2>

        <div className='flex pt-12 gap-5 items-center w-full justify-center flex-wrap'>
          <div className='flex gap-5 items-center w-72 h-72 justify-center'>
            <div className='h-auto w-72  relative'>
              <img src={bagg} alt='' className='h-full w-full rounded-2xl' />
              <span className='absolute bottom-4 left-4'>
                <span className='text-2xl font-semibold font-caudex text-off-blue'>
                  Hand Bags
                </span>
              </span>
            </div>
          </div>
          <div className='flex gap-5 items-center w-72 h-72 justify-center'>
            <div className='h-auto w-72  relative'>
              <img src={glass} alt='' className='h-full w-full rounded-2xl' />
              <span className='absolute bottom-4 left-4'>
                <span className='text-2xl font-semibold font-caudex text-off-blue'>
                  Sun glasses
                </span>
              </span>
            </div>
          </div>
          <div className='flex gap-5 items-center w-72 h-72 justify-center'>
            <div className='h-auto w-72  relative'>
              <img src={watch} alt='' className='h-full w-full rounded-2xl' />
              <span className='absolute bottom-4 left-4'>
                <span className='text-2xl font-semibold font-caudex text-off-blue'>
                  Personal Care
                </span>
              </span>
            </div>
          </div>
          <div className='flex gap-5 items-center w-72 h-72 justify-center'>
            <div className='h-auto w-72  relative'>
              <img src={pef} alt='' className='h-full w-full rounded-2xl' />
              <span className='absolute bottom-4 left-4'>
                <span className='text-2xl font-semibold font-caudex text-off-blue'>
                  Wrist Watches
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='py-28'>
        <h2 className='text-center text-5xl text-off-blue font-medium font-caudex'>
          What Cora'l offer!
        </h2>

        <div className='flex gap-5 items-center w-full justify-center pt-12 flex-wrap'>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg gap-10 px-5 w-72 h-80 text-center drop-shadow'>
            <img src={Hours_support} alt='' className='' />
            <div className='flex flex-col gap-5'>
              <h4 className='text-2xl font-semibold text-off-blue'>
                24/7 Support
              </h4>
              <p className='text-base  text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque harum molestiass
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg gap-10 px-5 w-72 h-80 text-center drop-shadow'>
            <img src={quality} alt='' className='' />
            <div className='flex flex-col gap-5'>
              <h4 className='text-2xl font-semibold text-off-blue'>
                Premium Quality
              </h4>
              <p className='text-base  text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque harum molestiass
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg gap-10 px-5 w-72 h-80 text-center drop-shadow'>
            <img src={cashback} alt='' className='' />
            <div className='flex flex-col gap-5'>
              <h4 className='text-2xl font-semibold text-off-blue'>Cashback</h4>
              <p className='text-base  text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque harum molestiass
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg gap-10 px-5 w-72 h-80 text-center drop-shadow'>
            <img src={free_delivery} alt='' className='' />
            <div className='flex flex-col gap-5'>
              <h4 className='text-2xl font-semibold text-off-blue'>
                Free delivery
              </h4>
              <p className='text-base  text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque harum molestiass
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-28 flex w-full items-center justify-center gap-20 flex-wrap'>
        <img src={apple} alt='' />
        <img src={prada} alt='' />
        <img src={dg} alt='' />
        <img src={amazon} alt='' />
        <img src={channel} alt='' />
        <img src={zara} alt='' />
      </div>
    </>
  );
};

export default Home;

export const NewArrival = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=4');
  if (!res.ok) {
    throw Error('could not find career');
  }
  return res.json();
};
