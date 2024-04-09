import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className=" text-white p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg"><Link to="/">Logo</Link></h1>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-blue-200 transition duration-150 ease-in-out">Home</Link>
          <Link to="/products" className="hover:text-blue-200 transition duration-150 ease-in-out">Products</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
