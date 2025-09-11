import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Fawry");
  const [cardNumber, setCardNumber] = useState("");
  const [vodafoneNumber, setVodafoneNumber] = useState("");
  const [fawryCode, setFawryCode] = useState("");
  const [meezaNumber, setMeezaNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = {
      address,
      payment,
      ...(payment === "Card" && { cardNumber }),
      ...(payment === "Vodafone Cash" && { vodafoneNumber }),
      ...(payment === "Fawry" && { fawryCode }),
      ...(payment === "Meeza" && { meezaNumber }),
    };

    console.log("Order placed:", orderDetails);

    alert(`Order placed successfully!\nAddress: ${address}\nPayment: ${payment}`);
    // TODO: send to backend
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[600px] px-4">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-[#FD7E14] mb-6 text-center">
            Checkout
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Delivery Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-[#2F4156] font-medium mb-2"
              >
                Delivery Address
              </label>
              <textarea
                id="address"
                rows="3"
                placeholder="Enter your delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                required
              ></textarea>
            </div>

            {/* Payment Method */}
            <div>
              <label
                htmlFor="payment"
                className="block text-[#2F4156] font-medium mb-2"
              >
                Payment Method
              </label>
              <select
                id="payment"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
              >
                <option value="Fawry">Fawry</option>
                <option value="Vodafone Cash">Vodafone Cash</option>
                <option value="Meeza">Meeza</option>
                <option value="Card">Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>

            {/* Conditional Inputs Based on Payment */}
            {payment === "Card" && (
              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                  required
                />
              </div>
            )}

            {payment === "Vodafone Cash" && (
              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  Vodafone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Vodafone Cash number"
                  value={vodafoneNumber}
                  onChange={(e) => setVodafoneNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                  required
                />
              </div>
            )}

            {payment === "Fawry" && (
              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  Fawry Code
                </label>
                <input
                  type="text"
                  placeholder="Enter your Fawry code"
                  value={fawryCode}
                  onChange={(e) => setFawryCode(e.target.value)}
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                  required
                />
              </div>
            )}

            {payment === "Meeza" && (
              <div>
                <label className="block text-[#2F4156] font-medium mb-2">
                  Meeza Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Meeza number"
                  value={meezaNumber}
                  onChange={(e) => setMeezaNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]"
                  required
                />
              </div>
            )}

            {payment === "Cash on Delivery" && (
              <p className="text-sm text-[#2f415677]">
                You will pay in cash when your order is delivered.
              </p>
            )}

            {/* Place Order */}
            <button
              type="submit"
              className="w-full bg-[#FD7E14] text-white py-2 rounded-lg hover:bg-[#e76c0a] transition-colors"
            >
              Place Order
            </button>
          </form>

          {/* Back to Cart */}
          <p className="text-center mt-4 text-sm text-[#2f415677]">
            <Link to="/cart" className="text-[#FD7E14] hover:underline">
              ← Back to Cart
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
