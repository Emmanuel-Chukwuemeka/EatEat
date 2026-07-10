//1. Create context: create a new file called ProductContext.jsx in the src/context directory. This file will contain the context and provider for managing product data.
//2. Create a context: In ProductContext.jsx, import createContext and useState from React. Create a new context called ProductContext using createContext().

import { createContext, useState } from "react";

export const ProductContext = createContext(); // Empty context object 

export const ProductProvider = ({ children }) => { // Create a provider component that will wrap the parts of your app that need access to the product data. It will hold the state for products and provide it to its children.

  const [products, setProducts] = useState([]);

    // const[] = useState([]); // Initialize the products state as an empty array. This will hold the list of products. (Duplicate, can be removed)

    const[product, setProduct] = useState({
        id: '1',
        productname: 'Sun Glasses',
        qty: '10',
    }); // Initialize the product state as an object with id, productname, and qty properties. This will hold the data for a single product.

  return (
    <ProductContext.Provider value={{ products, setProducts, product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
