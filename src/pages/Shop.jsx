import React from 'react';

const Shop = () => {
  return (
    <div>
      <div>kkkk</div>
    </div>
  );
};

export default Shop;

export const AllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw Error('could not find career');
  }
  return res.json();
};
