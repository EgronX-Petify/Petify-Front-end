import React from "react";

const ServiceFilters = ({
  categories,
  prices,
  ratings,
  selectedCategories,
  selectedPrices,
  selectedRatings,
  onCategoryChange,
  onPriceChange,
  onRatingChange,
}) => {
  return (
    <aside className="w-full md:w-2/3 py-5 px-6 bg-gray-50 rounded-lg shadow-lg h-fit">
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-[#2F4156] text-xl">Categories</h3>
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 mb-2 text-[#2F4156] text-sm"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="accent-[#FD7E14]"
            />
            {category}
          </label>
        ))}
      </div>

      {/* Price Ranges */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-[#2F4156] text-xl">Price Range</h3>
        {prices.map((price) => (
          <label
            key={price}
            className="flex items-center gap-2 mb-2 text-[#2F4156] text-sm"
          >
            <input
              type="checkbox"
              checked={selectedPrices.includes(price)}
              onChange={() => onPriceChange(price)}
              className="accent-[#FD7E14]"
            />
            {price}
          </label>
        ))}
      </div>

      {/* Ratings */}
      <div>
        <h3 className="font-semibold mb-2 text-[#2F4156] text-xl">Ratings</h3>
        {ratings.map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-2 mb-2 text-[#2F4156] text-sm"
          >
            <input
              type="checkbox"
              checked={selectedRatings.includes(rating)}
              onChange={() => onRatingChange(rating)}
              className="accent-[#FD7E14]"
            />
            ⭐ {rating}+ 
          </label>
        ))}
      </div>
    </aside>
  );
};

export default ServiceFilters;
