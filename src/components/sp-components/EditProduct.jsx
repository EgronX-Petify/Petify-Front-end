import React, { useContext, useEffect, useState } from "react";
import { SPContext } from "../../contexts/SPContext";
import { toast } from "react-hot-toast";

const EditProduct = ({ open, setOpen }) => {
  const { selectedProduct, setProducts, products } = useContext(SPContext);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  // fill form with original product when modal opens
  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name || "",
        price: selectedProduct.price || "",
        description: selectedProduct.description || "",
        stock: selectedProduct.stock || "",
        discount: selectedProduct.discount || "",
        note: selectedProduct.note || "",
        photos: selectedProduct.photos || [],
      });
      setImages(selectedProduct.photos || []);
    }
  }, [selectedProduct]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Price must be greater than 0";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (formData.stock === "" || formData.stock < 0)
      newErrors.stock = "Stock must be 0 or greater";
    if (formData.discount < 0 || formData.discount > 100)
      newErrors.discount = "Discount must be between 0 and 100";
    if (!formData.note.trim()) newErrors.note = "Notes are required";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        photos: [...prev.photos, URL.createObjectURL(file)],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  function reset() {
    setFormData({
      name: selectedProduct?.name || "",
      price: selectedProduct?.price || "",
      description: selectedProduct?.description || "",
      stock: selectedProduct?.stock || "",
      discount: selectedProduct?.discount || "",
      note: selectedProduct?.note || "",
      photos: selectedProduct?.photos || [],
    });
    setErrors({});
    setOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setProducts(
      products.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, ...formData }
          : product
      )
    );
    setOpen(false);
    toast.success("Product updated successfully!");
  };

  const addImageField = () => {
    setImages((prev) => [...prev, ""]);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);

    setFormData((prev) => {
      const newPhotos = [...prev.photos];
      newPhotos[index] = URL.createObjectURL(file);
      return { ...prev, photos: newPhotos };
    });
  };

  const removeImageField = (i) => {
    setImages((prev) => prev.filter((_, idx) => idx !== i));
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, idx) => idx !== i),
    }));
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
            Edit Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            {/* Row 1: Name + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData?.name || ""}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs min-h-[18px]">
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
                  value={formData?.price || ""}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs min-h-[18px]">
                  {errors.price || ""}
                </p>
              </div>
            </div>

            {/* Row 2: Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                {" "}
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData?.description || ""}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                  rows="3"
                />
                <p className="text-red-500 text-xs min-h-[18px]">
                  {errors.description || ""}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData?.stock || ""}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs min-h-[18px]">
                  {errors.stock || ""}
                </p>
              </div>
            </div>

            {/* Row 3: Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
              {/* Product Images */}
              <div className="">
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Product Images
                </label>

                {images?.length > 0 ? (
                  images.map((img, i) => (
                    <div key={i} className="flex gap-3 items-center mb-2">
                      {/* صورة product الحالية أو الجديدة */}
                      <img
                        src={
                          typeof img === "string"
                            ? img
                            : URL.createObjectURL(img)
                        }
                        alt={`Product ${i}`}
                        className="w-20 h-20 object-cover rounded-md border"
                      />

                      {/* Input لتغيير الصورة */}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, i)}
                        className="flex-1 border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                      />

                      {i > 0 && (
                        <button
                          type="button"
                          onClick={() => removeImageField(i)}
                          className="text-xs px-2 py-1 rounded-sm text-white bg-red-500 font-medium hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No images found</p>
                )}

                {/* زرار إضافة صورة جديدة */}
                <button
                  type="button"
                  onClick={addImageField}
                  className="text-sm text-[#FD7E14] font-medium hover:underline mt-2"
                >
                  + Add another photo
                </button>
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
                  value={formData?.discount || ""}
                  onChange={handleChange}
                  className="w-full border border-[#2f415677] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                />
                <p className="text-red-500 text-xs min-h-[18px]">
                  {errors.discount || ""}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-[#2F4156]">
                  Notes
                </label>
                <textarea
                  name="note"
                  value={formData?.note || ""}
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
                disabled={loading}
                className="w-full md:w-auto bg-[#FD7E14] text-white px-3 py-2 rounded-lg font-medium hover:bg-[#e66f0f] transition"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditProduct;
