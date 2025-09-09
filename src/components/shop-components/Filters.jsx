import React from "react";

const Filters = ({
  categories,
  brands,
  selectedCategories,
  selectedBrands,
  onCategoryChange,
  onBrandChange,
}) => {
  return (
    <aside className="w-full md:w-2/3 py-5 px-6 bg-gray-50 rounded-lg shadow-lg h-fit">
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-[#2F4156] text-xl">Categories</h3>
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2 mb-2 text-[#2F4156] text-sm">
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

      <div>
        <h3 className="font-semibold mb-2 text-[#2F4156] text-xl">Brands</h3>
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 mb-2 text-[#2F4156] text-sm">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => onBrandChange(brand)}
              className="accent-[#FD7E14]"
            />
            {brand}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Filters;
