import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ProductContext2 = createContext(null);

export const ProductProvider2 = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback((productData) => {
    const newProduct = {
      id:
        productData?.id ??
        (typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now().toString()),
      productname: productData?.productname?.trim() ?? '',
      qty: productData?.qty?.toString().trim() ?? '',
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    return newProduct;
  }, []);

  const removeProduct = useCallback((productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => String(product.id) !== String(productId))
    );
  }, []);

  const fetchProducts = useCallback(() => products, [products]);

  const getAllProducts = useCallback(() => products, [products]);

  const contextValue = useMemo(
    () => ({
      products,
      addProduct,
      removeProduct,
      fetchProducts,
      getAllProducts,
    }),
    [products, addProduct, removeProduct, fetchProducts, getAllProducts]
  );

  return (
    <ProductContext2.Provider value={contextValue}>
      {children}
    </ProductContext2.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext2);

  if (!context) {
    throw new Error('useProducts must be used within ProductProvider2');
  }

  return context;
};

export default ProductContext2;

