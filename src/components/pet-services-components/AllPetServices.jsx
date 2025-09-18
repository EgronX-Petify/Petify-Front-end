import React, { useState } from "react";
import PetService from "./PetService";
import ServiceFilters from "./ServiceFilters";
import ServiceBook from "./ServiceBook";
import UseServices from "../../hooks/UseServices";

const AllPetServices = () => {
  const petServices = UseServices();
  const [openBook, setOpenBook] = useState(false);

  // unique filter options
  const categories = [...new Set(petServices.map((s) => s.category))];
  const prices = [...new Set(petServices.map((s) => s.priceRange))];
  const ratings = [5, 4, 3, 2, 1];

  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 10;

  const handleCategoryChange = (category) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((categ) => categ != category)
        : [...selectedCategories, category]
    );
    setCurrentPage(1);
  };

  const handlePriceChange = (price) => {
    setSelectedPrices(
      selectedPrices.includes(price)
        ? selectedPrices.filter((p) => p != price)
        : [...selectedPrices, price]
    );
    setCurrentPage(1);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(
      selectedRatings.includes(rating)
        ? selectedRatings.filter((r) => r != rating)
        : [...selectedRatings, rating]
    );
    setCurrentPage(1);
  };

  // Apply filters
  const filteredServices = petServices.filter((service) => {
    const categoryMatch =
      selectedCategories.length > 0
        ? selectedCategories.includes(service.category)
        : service;

    const priceMatch =
      selectedPrices.length > 0
        ? selectedPrices.includes(service.priceRange)
        : service;

    const ratingMatch =
      selectedRatings.length > 0
        ? selectedRatings.includes(service.rating)
        : service;

    return categoryMatch && priceMatch && ratingMatch;
  });

  // Pagination logic
  const indexOfLast = currentPage * servicesPerPage;
  const indexOfFirst = indexOfLast - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

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
          <ServiceFilters
            categories={categories}
            prices={prices}
            ratings={ratings}
            selectedCategories={selectedCategories}
            selectedPrices={selectedPrices}
            selectedRatings={selectedRatings}
            onCategoryChange={handleCategoryChange}
            onPriceChange={handlePriceChange}
            onRatingChange={handleRatingChange}
          />
        </div>

        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentServices.length > 0 ? (
              currentServices.map((service, id) => (
                <PetService key={id} service={service} setOpen={setOpenBook} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 min-h-14">
                No services found
              </p>
            )}
          </div>

          {filteredServices.length > 0 && (
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
      <ServiceBook open={openBook} setOpen={setOpenBook} />
    </div>

    // <div className="flex flex-col md:flex-row gap-6 w-[90%] mx-auto my-10">
    //   {/* Filters Sidebar */}
    //   <div className="w-fit w-full">
    //     <ServiceFilters
    //       categories={categories}
    //       prices={prices}
    //       ratings={ratings}
    //       selectedCategories={selectedCategories}
    //       selectedPrices={selectedPrices}
    //       selectedRatings={selectedRatings}
    //       onCategoryChange={handleCategoryChange}
    //       onPriceChange={handlePriceChange}
    //       onRatingChange={handleRatingChange}
    //     />
    //   </div>

    //   {/* Services + Pagination */}
    //   <div className="flex-1 bg-white p-7 rounded-xl shadow-md">
    //     {currentServices.length > 0 ? (
    //       <div className="flex justify-evenly flex-wrap gap-4">
    //         {currentServices.map((service) => (
    //           <PetService service={service} key={service.id} />
    //         ))}
    //       </div>
    //     ) : (
    //       <p className="text-center text-gray-500">
    //         No services match your filters.
    //       </p>
    //     )}

    //     {/* Pagination Buttons */}
    //     {totalPages > 1 && (
    //       <div className="flex justify-center items-center gap-4 mt-6">
    //         <button
    //           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    //           disabled={currentPage === 1}
    //           className="px-4 py-2 bg-[#2F4156] text-white rounded-lg disabled:opacity-50"
    //         >
    //           Prev
    //         </button>
    //         <span className="text-gray-700 font-medium">
    //           Page {currentPage} of {totalPages}
    //         </span>
    //         <button
    //           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    //           disabled={currentPage === totalPages}
    //           className="px-4 py-2 bg-[#FD7E14] text-white rounded-lg disabled:opacity-50"
    //         >
    //           Next
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default AllPetServices;
