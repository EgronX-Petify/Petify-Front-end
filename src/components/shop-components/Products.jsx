import React, { useState } from "react";
import Product from "./Product";
import Filters from "./Filters";
import UseProducts from "../../hooks/UseProducts";

const Products = () => {
  const petProducts = UseProducts();


  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const categories = [...new Set(petProducts.map((p) => p.category))];

  // if category is selected remove it, else add it
  const handleCategoryChange = (category) => {
    selectedCategories.includes(category)
      ? setSelectedCategories(
          selectedCategories.filter((categ) => categ != category)
        )
      : setSelectedCategories([...selectedCategories, category]);
    setCurrentPage(1);
  };
  // if there is filters show products according to it, else show all products
  const filteredProducts = petProducts.filter((product) =>
    selectedCategories.length > 0
      ? selectedCategories.includes(product.category)
      : product
  );

  const indexOfLastProduct = currentPage * productsPerPage;  // 12 
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 0 
  // take products of [0 - 12] index
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);  

  return (
    <div className="p-4 md:p-10">
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-2xl font-bold text-[#2F4156]">Products</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 bg-[#FD7E14] text-white rounded-lg"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } md:block w-full md:w-1/4 transition-all`}
        >
          <Filters
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
          />
        </div>

        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((product, id) => (
                <Product key={id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found
              </p>
            )}
          </div>

          {filteredProducts.length > productsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="cursor-pointer px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-[#2F4156]">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="cursor-pointer px-4 py-2 bg-[#FD7E14] text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
