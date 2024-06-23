import React from 'react'
import ProductListing from './carts/ProductListing'
import Cart from './carts/Cart';

const App = () => {
  return (
    <div className="w-[1440px] border border-black m-auto flex">
      <ProductListing />
      <Cart/>
    </div>
  );
}

export default App
