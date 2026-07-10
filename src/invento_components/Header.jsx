//To consume what is inside the provider, we need to use the useProducts hook. This hook will give us access to the context value provided by the ProductProvider. We can then use this value to fetch the products and display their count in the header.

import { useProducts } from '../context/ProductContext2';

const Header = () => {
  const { fetchProducts } = useProducts();
  const productCount = fetchProducts().length;

  return (
    <div className="row header">
      <div className="col text-center">
        <h1 className="mb-3"> Product Inventory </h1>
        <button type="button" className="btn btn-primary">
          Count <span className="badge mine">{productCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
