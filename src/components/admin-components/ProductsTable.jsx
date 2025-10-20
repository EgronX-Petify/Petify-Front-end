import React, { useContext } from "react";
import UseProducts from "../../hooks/UseProducts";
import { ProductsContext } from "../../contexts/ProductsContext";
import toast from "react-hot-toast";

const dummyProducts = [
  { id: 1, name: "Dog Food", price: 20 },
  { id: 2, name: "Cat Toy", price: 10 },
];

const ProductsTable = () => {
  const products = UseProducts();
  const { setProducts } = useContext(ProductsContext);
  const handleRemove = (id) => {
    swal({
      text: "Are you sure you want to remove this product?",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className:
            "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",
        },
        confirm: {
          text: "Yes",
          value: true,
          visible: true,
          className:
            "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",
        },
      },
      dangerMode: true,
    }).then((willRemove) => {
      if (willRemove) {
        setProducts(products.filter((p) => p.id !== id));
        toast("Removed", {
          icon: "✅",
          duration: "300",
        });
      }
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Products Management</h2>
      {!products.length ? (
        <p className="text-xl font-semibold text-[#2F4156] capitalize">
          no products
        </p>
      ) : (
        <div className="grid gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
            >
              <div>
                <h3 className="font-semibold text-[#2F4156]">{product.name}</h3>
                <p className="text-sm text-gray-500">Price: ${product.price}</p>
              </div>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 cursor-pointer"
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
