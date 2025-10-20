import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { SPContext } from "../../contexts/SPContext";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import { ProductsContext } from "../../contexts/ProductsContext";

const AddProduct = ({ open, setOpen }) => {
  const user = UseLoggedUser();
  const { createProduct } = useContext(ProductsContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    notes: "",
    discount: "",
    stock: "",
    category: "",
  });

  const [images, setImages] = useState([0]); // dynamic image inputs
  const [files, setFiles] = useState({}); // track uploaded files
  const [errors, setErrors] = useState({});
  const { setProducts } = useContext(SPContext);

  const handleChange = (e) => {
    const { name, value, type, files: inputFiles } = e.target;

    if (type === "file") {
      const urls = Array.from(inputFiles).map((file) =>
        URL.createObjectURL(file)
      );

      setFormData((prev) => ({
        ...prev,
        photos: [...(prev.photos || []), ...urls], // ✅ تخزين الـ urls في photos
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addImageField = () => {
    setImages((prev) => [...prev, prev.length]);
  };

  const removeImageField = (indexToRemove) => {
    setImages((prev) => prev.filter((_, i) => i !== indexToRemove));
    setFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[`img-${indexToRemove}`];
      return newFiles;
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Price must be greater than 0";
    if (!formData.description.trim())
      newErrors.description = "descriptionription is required";
    if (formData.stock === "" || formData.stock < 0)
      newErrors.stock = "Stock must be 0 or greater";
    if (
      formData.discount < 0 ||
      formData.discount > 100
    )
      newErrors.discount = "Discount must be between 0 and 100";

    if (!formData.photos || formData.photos.length === 0)
      newErrors.photos = "At least one product image is required";
    return newErrors;
  };

  function reset() {
    setFormData({
      name: "",
      description: "",
      price: "",
      notes: "",
      discount: "",
      stock: "",
      category: "",
    });
    setFiles({});
    setErrors({});
    setOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const finalPrice =
      Number(formData.price) -
      (Number(formData.price) * Number(formData.discount || 0)) / 100;

    const payload = {
      ...formData,
      final_Price: finalPrice,
      sellerId: user?.id,
    };
    try {
      const { data } = await createProduct(payload);
      console.log("add product:::", data);
      toast.success("Product added successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.[0]?.message ||
        error.response?.data?.message ||
        "Something went wrong!";
      toast.error(errorMessage);
      console.log("add product error::", error.response);
    }
    reset();
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div
          className="
            max-w-[90%] md:max-w-5xl 
            bg-white rounded-2xl shadow-md 
            max-h-[90vh] 
            overflow-y-auto
            p-4 md:p-6
          "
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#2F4156]">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs h-5 mt-1">
                  {errors.name || ""}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs h-5 mt-1">
                  {errors.price || ""}
                </p>
              </div>
            </div>

            {/* Row 2: descriptionription */}
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                rows="3"
              />
              <p className="text-red-500 text-xs h-5 mt-1">
                {errors.description || ""}
              </p>
            </div>

            {/* Row 3: Images + Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Images
                </label>

                {images.map((index, i) => (
                  <div key={index} className="flex gap-2 items-center mb-2">
                    <input
                      type="file"
                      name={`img-${index}`}
                      accept="image/*"
                      onChange={handleChange}
                      className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                    />
                    {i > 0 && (
                      <button
                        type="button"
                        onClick={() => removeImageField(i)}
                        className="text-xs px-2 py-1 rounded-md text-white bg-red-500 font-medium hover:bg-red-600"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <p className="text-red-500 text-xs h-5 mt-1">
                  {errors.photos || ""}
                </p>

                <button
                  type="button"
                  onClick={addImageField}
                  className="text-sm text-[#FD7E14] font-medium hover:underline"
                >
                  + Add another photo
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs h-5 mt-1">
                  {errors.stock || ""}
                </p>
              </div>
            </div>

            {/* Row 4: Discount + Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs h-5 mt-1">
                  {errors.discount || ""}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                  rows="2"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-2">
              <button
                type="button"
                className="w-full md:w-auto bg-red-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => reset()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full md:w-auto bg-[#FD7E14] text-white px-3 py-2 rounded-lg font-medium hover:bg-[#e66f0f] transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddProduct;
