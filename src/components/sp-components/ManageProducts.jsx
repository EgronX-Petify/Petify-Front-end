import React, { useContext, useState } from "react";
import { FaTrash, FaTimes, FaBox } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Return from "./Return";
import { MdAdd } from "react-icons/md";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { SPContext } from "../../contexts/SPContext";
import ProductItem from "./ProductItem";

const ManageProducts = () => {
  const { products } = useContext(SPContext);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm w-full min-h-screen">
      <Return showLabel={true} />
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white p-3 bg-[#417481]">
        <FaBox /> Manage Products
      </h2>

      {/* ✅ Desktop Table */}
      <div className="hidden md:block overflow-x-auto h-full">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-[#2F4156]">
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <ProductItem
                key={p.id}
                product={p}
                isMobile={false}
                setEditOpen={setEditOpen}
              />
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-10">
          <button
            className="font-semibold text-lg capitalize cursor-pointer bg-[#417481b3] text-white px-5 py-3 rounded-md flex items-center gap-1 hover:bg-[#417481]"
            onClick={() => setAddOpen(true)}
          >
            <MdAdd /> add product
          </button>
        </div>
      </div>

      {/* ✅ Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {products.map((p) => (
          <ProductItem
            key={p.id}
            product={p}
            isMobile={true}
            setEditOpen={setEditOpen}
          />
        ))}

        <div className="flex justify-center mt-3 w-full">
          <button
            className="w-full font-semibold text-lg capitalize cursor-pointer bg-[#417481b3] text-white px-5 py-3 rounded-md flex items-center justify-center gap-1 hover:bg-[#417481]"
            onClick={() => setAddOpen(true)}
          >
            <MdAdd /> add product
          </button>
        </div>
      </div>

      <EditProduct open={editOpen} setOpen={setEditOpen} />
      <AddProduct open={addOpen} setOpen={setAddOpen} />
    </div>
  );
};

export default ManageProducts;
