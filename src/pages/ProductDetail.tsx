import { useParams } from 'react-router-dom';
import { dummyProducts } from '../dummyProducts/dummyProducts'; // Ensure the correct path

const ProductDetail = () => {
  let { productId } = useParams();
  const product = dummyProducts.find(product => product.id.toString() === productId);

  return (
    <div className="container mx-auto flex flex-wrap p-5">
      {product ? (
        <>
          <div className="lg:w-1/2 w-full lg:pr-10 mb-10 mb:mb-0">
            <img src={product.image} alt={product.title} className="rounded shadow-lg" />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10">
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
            <p className="text-lg font-bold mb-4">{product.price.formatted}</p>
            <p className="mb-4">{product.description}</p>
          </div>
        </>
      ) : (
        <p className="text-lg">Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetail;
