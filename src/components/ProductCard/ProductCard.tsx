import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';


interface ProductCardProps {
    id: number;
    title: string;
    category: string;
    price: string;
    description: string;
    image: string; 
  }

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  price,
  description,
  image,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
  <div className="relative w-full h-56">
    {/* Use a wrapping div for the image to control aspect ratio and add a loading animation or placeholder */}
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-200 mix-blend-multiply" />
    {/* Optional overlay can go here for extra UI elements if necessary */}
  </div>
  <div className="p-5">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-base text-blue-600 mb-1">{category}</p>
    <p className="text-lg font-bold text-gray-900 mb-2">{price}</p>
    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{description}</p>
    <Link to={`/products/${id}`} className="inline-flex items-center justify-center  text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2  focus:ring-opacity-50 transition duration-300 ease-in-out">
      <Button>View Details</Button>
    </Link>
  </div>
</div>

  );
};

export default ProductCard;
