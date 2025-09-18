import React, { useContext, useEffect, useState } from "react";
import UseSelectedProduct from "../../hooks/UseSelectedProduct";
import { MdAddShoppingCart } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import UseProducts from "../../hooks/UseProducts";
import { ProductsContext } from "../../contexts/ProductsContext";
import Rating from "../Rating";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import LoadingSpinner from "../LoadingSpinner";

const ViewProduct = () => {
  const { id } = useParams();
  const products = UseProducts();
  const { setSelectedProduct } = useContext(ProductsContext);
  const product = UseSelectedProduct();

  const { cartItems, setCartItems } = useContext(ProductsContext);

  useEffect(() => {
    const viewedProduct = products.find((p) => p.id == id);
    setSelectedProduct(viewedProduct);
  }, [id, products, setSelectedProduct, product]);

  const [userRating, setUserRating] = useState(0);

  const isLogged = UseLoggedUser();
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    product && setCartItem({ ...product, quantity: 1 });
  }, [product]);

  function increaseQuantity() {
    setCartItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  }
  function handleAddToCart() {
    isLogged ? console.log("added ✅") : console.log("login first ❌");
    if (!cartItem) return;
    // cartItems.includes(cartItem)
    //   ? setCartItems((prev) => [
    //       ...prev,
    //       { ...cartItem, quantity: cartItem.quantity + 1 },
    //     ])
    //   : setCartItems((prev) => [...prev, cartItem]);
    // setCartItems((prev) => [...prev, cartItem]);

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === cartItem.id);

      if (existing) {
        return prev.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, cartItem];
      }
    });
  }

  return (
    <div className="max-w-8xl my-5 mx-auto p-6">
      {!product ? (
        <LoadingSpinner text="Product is Loadig" />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {!product?.photos?.length ? (
            <p className="text-gray-500 text-center">
              No product photos available
            </p>
          ) : (
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-md mb-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-xl"
              >
                {product?.photos?.map((photo, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={photo}
                      alt={`${product?.name}-${idx}`}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-[#2F4156] mb-4">
              {product?.name}
            </h2>
            <p className="text-sm text-gray-500">
              {product?.description || "No description available."}
            </p>
            <p className="text-gray-600 mb-4">{product?.description}</p>
            <span className="text-2xl font-semibold text-[#FD7E14] mb-6">
              ${product?.price}
            </span>

            {/* Rating */}
            <div className="mb-6">
              <Rating
                value={userRating || product?.rating}
                onChange={(val) => setUserRating(val)}
              />
            </div>

            <div className="flex gap-5">
              {/* Add to Cart */}
              <button
                onClick={() => handleAddToCart(product)}
                className="cursor-pointer flex items-center gap-2 bg-[#2f4156d6] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#2F4156] transition-colors w-fit"
              >
                <MdAddShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToCart(vet)}
                className={
                  !userRating
                    ? `invisible`
                    : `cursor-pointer flex items-center gap-2 bg-[#fd7d14eb] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#FD7E14] transition-colors w-fit`
                }
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
