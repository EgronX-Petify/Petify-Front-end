import React from "react";

const dummyProducts = [
  { id: 1, name: "Dog Food", price: 20 },
  { id: 2, name: "Cat Toy", price: 10 },
];

const ProductsTable = () => {
  const handleRemove = (id) => {
    console.log("Remove product", id);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Products Management</h2>
      {!dummyProducts.length ? (
        <p className="text-xl font-semibold text-[#2F4156] capitalize">
          no products
        </p>
      ) : (
        <div className="grid gap-4">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
            >
              <div>
                <h3 className="font-semibold text-[#2F4156]">{product.name}</h3>
                <p className="text-sm text-gray-500">Price: ${product.price}</p>
              </div>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
