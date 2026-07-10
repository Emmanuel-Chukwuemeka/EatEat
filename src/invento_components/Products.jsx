import { useProducts } from '../context/ProductContext2';

const Products = () => {
  const { fetchProducts, removeProduct } = useProducts();
  const products = fetchProducts();

  return (
    <div className="row products text-center">
      <div className="col-md-6 offset-md-3">
        <h3>Products Inventory</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <table className="table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4">No products added yet.</td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.productname}</td>
                  <td>{product.qty}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(
                        //filter the products array to remove the product with the matching id. The removeProduct function is called with the product's id as an argument. This will update the products state in the context and trigger a re-render of the Products component, reflecting the updated list of products.
                      ) => removeProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;  
