import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductItem = ({ product, isMobile }) => {
  const discountedPrice = product.discount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price;


  const images = Array.isArray(product.photos)
    ? product.photos
    : [product.photo || product.photos];

  if (isMobile) {
    return (
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col gap-3">
        {/* Product Images Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-40 rounded-md overflow-hidden custom-swiper"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`${product.name}-${idx}`}
                className="w-full h-40 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Product Name + Note */}
        <div>
          <h3 className="font-semibold text-[#2F4156] mt-2">{product.name}</h3>
          <p className="text-xs text-gray-500">{product.note}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{product.description}</p>

        {/* Price + Stock */}
        <div className="flex justify-between items-center">
          <div>
            {product.discount ? (
              <div className="flex flex-col">
                <span className="text-sm line-through text-gray-400">
                  ${product.price}
                </span>
                <span className="text-lg font-semibold text-[#FD7E14]">
                  ${discountedPrice}
                </span>
              </div>
            ) : (
              <span className="text-lg font-semibold text-[#FD7E14]">
                ${product.price}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600">Stock: {product.stock}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-2">
          <button
            className="flex-1 bg-[#fd7d14db] text-white py-2 text-sm rounded-md flex items-center justify-center gap-1 hover:bg-[#FD7E14]"
            onClick={() => onEdit(product)}
          >
            <MdOutlineModeEditOutline /> Edit
          </button>
          <button
            className="flex-1 bg-red-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-1 hover:bg-red-600"
            onClick={() => onRemove(product)}
          >
            <FaTimes /> Remove
          </button>
        </div>
      </div>
    );
  }

  return (
    <tr className="border-b border-[#2f415677] hover:bg-gray-50 transition">
      <td className="p-3 flex items-center gap-3">
        {/* Slider with smaller images */}
        <div className="w-28 h-20">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={5}
            slidesPerView={1}
            className="w-28 h-20 rounded-md overflow-hidden"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${product.name}-${idx}`}
                  className="w-full h-20 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Info */}
        <div>
          <p className="font-medium">{product.name}</p>
          <p className="text-xs text-gray-500">{product.note}</p>
          <p className="text-xs text-gray-600">{product.description}</p>
        </div>
      </td>
      <td className="p-3">
        {product.discount ? (
          <div className="flex flex-col">
            <span className="line-through text-gray-400 text-sm">
              ${product.price}
            </span>
            <span className="text-[#FD7E14] font-semibold">
              ${discountedPrice}
            </span>
          </div>
        ) : (
          <span className="text-[#FD7E14] font-semibold">${product.price}</span>
        )}
      </td>
      <td className="p-3">{product.stock}</td>
      <td className="p-3 flex justify-center gap-2">
        <button
          className="cursor-pointer bg-[#fd7d14db] text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-[#FD7E14]"
          onClick={() => onEdit(product)}
        >
          <MdOutlineModeEditOutline /> Edit
        </button>
        <button
          className="cursor-pointer bg-red-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600"
          onClick={() => onRemove(product)}
        >
          <FaTimes /> Remove
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
