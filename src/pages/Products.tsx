// Products.tsx
import React, { useState } from "react";
import { dummyProducts } from "../dummyProducts/dummyProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryFilter from "../components/Filters/CategoryFilter";
import PriceFilter from "../components/Filters/PriceFilter";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Products: React.FC = () => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Helper function to check if a product's price falls within the selected price range
  const isWithinPriceRange = (price: number, range: string) => {
    if (range === "All") return true;
    if (range.endsWith("+")) {
      const min = parseInt(range.replace("+", ""), 10);
      return price >= min;
    }

    const [min, max] = range.split("-").map(Number);
    return price >= min && price <= max;
  };

  const filteredProducts = dummyProducts.filter((product) => {
    const searchMatch =
      product.title.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(localSearchTerm.toLowerCase());
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const priceMatch = isWithinPriceRange(
      product.price.value,
      selectedPriceRange
    );

    return searchMatch && categoryMatch && priceMatch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePreviousPage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Reverted to a single-parameter function
  const handlePageSelect = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-8">
      <h2 className="text-xl font-bold my-4">Our Products</h2>
      {/* Filters */}
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center w-full gap-4">
        <div className="flex-grow">
          <SearchBar onSearch={setLocalSearchTerm} />
        </div>
        <div className="flex flex-row md:flex-row gap-4">
          <CategoryFilter onCategoryChange={setSelectedCategory} />
          <PriceFilter onPriceChange={setSelectedPriceRange} />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              price={product.price.formatted}
              description={product.description}
              image={product.image}
            />
          ))
        ) : (
          <div className="col-span-full text-center">No products found.</div>
        )}
      </div>
      <div className="my-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={handlePreviousPage}
                className={
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }
              />
            </PaginationItem>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageSelect(pageNumber + 1);
                  }}
                  className={
                    currentPage === pageNumber + 1
                      ? "bg-black hover:bg-gray-400 text-white"
                      : ""
                  }
                >
                  {pageNumber + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={handleNextPage}
                className={
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Products;
