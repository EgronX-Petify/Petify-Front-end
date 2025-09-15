import React, { useState } from "react";
import PetService from "./PetService";
import ServiceFilters from "./ServiceFilters";
import ServiceBook from "./ServiceBook";

const AllPetServices = () => {
  const petServices = [
    {
      id: 1,
      name: "Veterinary Visits",
      description: "Comprehensive check-ups and treatments for your pet.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "300 - 800 EGP",
      duration: "30 - 60 minutes",
      availability: ["Daily except Friday"],
      rating: 5,
      category: "Healthcare",
    },
    {
      id: 2,
      name: "Grooming",
      description: "Full-service grooming including bath, haircut, and more.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "200 - 600 EGP",
      duration: "45 - 90 minutes",
      availability: ["Saturday", "Sunday", "Monday", "Wednesday"],
      rating: 4,
      category: "Care & Hygiene",
    },
    {
      id: 3,
      name: "Training",
      description:
        "Professional pet training sessions to improve behavior, obedience, and social skills.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "400 - 1000 EGP per session",
      duration: "60 minutes",
      availability: ["Sunday", "Tuesday", "Thursday"],
      rating: 3,
      category: "Behavior & Skills",
    },
    {
      id: 4,
      name: "Boarding",
      description:
        "Safe and comfortable boarding facilities where your pets are cared for while you’re away.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "150 - 400 EGP per night",
      duration: "Overnight or multiple days",
      availability: ["All week"],
      rating: 5,
      category: "Accommodation",
    },
    // 🔥 Add more dummy services to test pagination
    {
      id: 5,
      name: "Daycare",
      description: "Daily care service for your pets.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "100 - 250 EGP per day",
      duration: "8 hours",
      availability: ["All week"],
      rating: 4,
      category: "Accommodation",
    },
    {
      id: 6,
      name: "Dental Care",
      description: "Pet dental cleaning and check-up.",
      image: "src/public/pexels-tima-miroshnichenko-6131529.jpg",
      priceRange: "250 - 600 EGP",
      duration: "30 minutes",
      availability: ["Monday", "Thursday"],
      rating: 5,
      category: "Healthcare",
    },
  ];
  const [openBook, setOpenBook] = useState(false);

  // Extract unique filter options
  const categories = [...new Set(petServices.map((s) => s.category))];
  const prices = [...new Set(petServices.map((s) => s.priceRange))];
  const ratings = [5, 4, 3, 2, 1];

  // State for filters
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4; // number of services per page

  // Handlers
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handlePriceChange = (price) => {
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
    setCurrentPage(1);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
    setCurrentPage(1);
  };

  // Apply filters
  const filteredServices = petServices.filter((service) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(service.category);

    const priceMatch =
      selectedPrices.length === 0 ||
      selectedPrices.includes(service.priceRange);

    const ratingMatch =
      selectedRatings.length === 0 || selectedRatings.includes(service.rating);

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
                <PetService key={id} service={service} setOpen={setOpenBook}  />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
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
