import { Link } from "react-router-dom";
import { dummyProducts } from "../dummyProducts/dummyProducts"; 
import ProductCard from "../components/ProductCard/ProductCard"; 

interface Product {
  id: number;
  title: string;
  category: string;
  price: {
    value: number;
    formatted: string;
  };
  description: string;
  image: string;
}

const Home = () => {
  const getRandomProducts = (
    products: Product[],
    num: number = 8
  ): Product[] => {
    return [...products].sort(() => 0.5 - Math.random()).slice(0, num);
  };

  const randomProducts = getRandomProducts(dummyProducts);

  return (
    <div className=" mx-auto px-4 py-8 bg-gray-200">
      <h2 className="text-xl font-bold my-4">Welcome to Our Store</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {randomProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price.formatted}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/products/"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
        >
          All Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
