import React from 'react';

const ProductContext = React.createContext({
  getData: {'wishlist':[],'compareList':[]},
  addData: () => {}
});
export default ProductContext;