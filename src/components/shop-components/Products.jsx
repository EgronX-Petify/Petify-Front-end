const petProducts = [
  {
    id: 1,
    name: "Premium Dog Food - Chicken Flavor",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 250,
    category: "Food",
    brand: "Royal Canin",
  },
  {
    id: 2,
    name: "Cat Dry Food - Salmon Recipe",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 180,
    category: "Food",
    brand: "Whiskas",
  },
  {
    id: 3,
    name: "Small Animal Hay Pack",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 120,
    category: "Food",
    brand: "Kaytee",
  },
  {
    id: 4,
    name: "Interactive Dog Toy Ball",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 90,
    category: "Toys",
    brand: "KONG",
  },
  {
    id: 5,
    name: "Cat Teaser Feather Wand",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 75,
    category: "Toys",
    brand: "Petmate",
  },
  {
    id: 6,
    name: "Pet Grooming Brush",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 150,
    category: "Grooming",
    brand: "FURminator",
  },
  {
    id: 7,
    name: "Dog Nail Clipper",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 100,
    category: "Grooming",
    brand: "Safari",
  },
  {
    id: 8,
    name: "Flea & Tick Shampoo",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 200,
    category: "Health",
    brand: "Adams",
  },
  {
    id: 9,
    name: "Pet Vitamin Supplement",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 160,
    category: "Health",
    brand: "Nutri-Vet",
  },
  {
    id: 10,
    name: "Soft Dog Bed - Medium",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 400,
    category: "Bedding",
    brand: "MidWest",
  },
  {
    id: 11,
    name: "Cat Scratching Post",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 350,
    category: "Bedding",
    brand: "Frisco",
  },
  {
    id: 12,
    name: "Pet Travel Carrier",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 500,
    category: "Accessories",
    brand: "AmazonBasics",
  },
  {
    id: 13,
    name: "Dog Leash - Nylon 5ft",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 110,
    category: "Accessories",
    brand: "Blueberry Pet",
  },
  {
    id: 14,
    name: "Cat Litter Box - Large",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 300,
    category: "Accessories",
    brand: "PetSafe",
  },
  {
    id: 15,
    name: "Bird Cage Starter Kit",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 700,
    category: "Accessories",
    brand: "Prevue",
  },
  {
    id: 16,
    name: "Aquarium Starter Kit - 20L",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 950,
    category: "Accessories",
    brand: "Tetra",
  },
  {
    id: 17,
    name: "Dog Harness - Adjustable",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 180,
    category: "Accessories",
    brand: "Ruffwear",
  },
  {
    id: 18,
    name: "Cat Collar with Bell",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 60,
    category: "Accessories",
    brand: "PetSafe",
  },
  {
    id: 19,
    name: "Dog Chew Bone - Pack of 2",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 95,
    category: "Toys",
    brand: "Nylabone",
  },
  {
    id: 20,
    name: "Rabbit Hutch - Wooden",
    photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
    price: 1200,
    category: "Bedding",
    brand: "Aivituvin",
  },
];
import React, { useState } from "react";
import Product from "./Product";
import Filters from "./Filters";

const Products = () => {
  const petProducts = [
    {
      id: 1,
      name: "Premium Dog Food - Chicken Flavor",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 250,
      category: "Food",
      brand: "Royal Canin",
    },
    {
      id: 2,
      name: "Cat Dry Food - Salmon Recipe",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 180,
      category: "Food",
      brand: "Whiskas",
    },
    {
      id: 3,
      name: "Small Animal Hay Pack",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 120,
      category: "Food",
      brand: "Kaytee",
    },
    {
      id: 4,
      name: "Interactive Dog Toy Ball",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 90,
      category: "Toys",
      brand: "KONG",
    },
    {
      id: 5,
      name: "Cat Teaser Feather Wand",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 75,
      category: "Toys",
      brand: "Petmate",
    },
    {
      id: 6,
      name: "Pet Grooming Brush",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 150,
      category: "Grooming",
      brand: "FURminator",
    },
    {
      id: 7,
      name: "Dog Nail Clipper",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 100,
      category: "Grooming",
      brand: "Safari",
    },
    {
      id: 8,
      name: "Flea & Tick Shampoo",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 200,
      category: "Health",
      brand: "Adams",
    },
    {
      id: 9,
      name: "Pet Vitamin Supplement",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 160,
      category: "Health",
      brand: "Nutri-Vet",
    },
    {
      id: 10,
      name: "Soft Dog Bed - Medium",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 400,
      category: "Bedding",
      brand: "MidWest",
    },
    {
      id: 11,
      name: "Cat Scratching Post",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 350,
      category: "Bedding",
      brand: "Frisco",
    },
    {
      id: 12,
      name: "Pet Travel Carrier",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 500,
      category: "Accessories",
      brand: "AmazonBasics",
    },
    {
      id: 13,
      name: "Dog Leash - Nylon 5ft",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 110,
      category: "Accessories",
      brand: "Blueberry Pet",
    },
    {
      id: 14,
      name: "Cat Litter Box - Large",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 300,
      category: "Accessories",
      brand: "PetSafe",
    },
    {
      id: 15,
      name: "Bird Cage Starter Kit",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 700,
      category: "Accessories",
      brand: "Prevue",
    },
    {
      id: 16,
      name: "Aquarium Starter Kit - 20L",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 950,
      category: "Accessories",
      brand: "Tetra",
    },
    {
      id: 17,
      name: "Dog Harness - Adjustable",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 180,
      category: "Accessories",
      brand: "Ruffwear",
    },
    {
      id: 18,
      name: "Cat Collar with Bell",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 60,
      category: "Accessories",
      brand: "PetSafe",
    },
    {
      id: 19,
      name: "Dog Chew Bone - Pack of 2",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 95,
      category: "Toys",
      brand: "Nylabone",
    },
    {
      id: 20,
      name: "Rabbit Hutch - Wooden",
      photo: "src/public/shop-media/pexels-rdne-7310213.jpg",
      price: 1200,
      category: "Bedding",
      brand: "Aivituvin",
    },
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const productsPerPage = 12;

  const categories = [...new Set(petProducts.map((p) => p.category))];
  const brands = [...new Set(petProducts.map((p) => p.brand))];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const filteredProducts = petProducts.filter((product) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchCategory && matchBrand;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
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
            brands={brands}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            onCategoryChange={handleCategoryChange}
            onBrandChange={handleBrandChange}
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
