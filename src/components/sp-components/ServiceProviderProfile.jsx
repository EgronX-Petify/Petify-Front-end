import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const ServiceProviderProfile = ({ sp, onClose }) => {
  if (!sp) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
        >
          <IoIosClose size={28} />
        </button>

        {/* Profile header */}
        <div className="flex items-center gap-4">
          <img
            src={sp.photo}
            alt={sp.name}
            className="w-20 h-20 rounded-full object-cover shadow"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{sp.name}</h2>
            <p className="text-gray-500">{sp.clinic}</p>
            <div className="flex items-center gap-1 mt-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < sp.rating ? "text-yellow-500" : "text-gray-300"}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">{sp.rating} / 5</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-4 text-gray-700">
          <p><strong>Address:</strong> {sp.address}</p>
          <p><strong>Phone:</strong> {sp.phone}</p>
        </div>

        {/* Availability */}
        <div className="mt-6">
          <h3 className="font-medium text-gray-800 mb-2">Availability</h3>
          <div className="grid grid-cols-2 gap-3">
            {sp.availability.map((day, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-2 text-sm text-gray-600 bg-gray-50"
              >
                <strong>{day.day}:</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {day.times.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white border px-2 py-1 rounded-md text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-[#FD7E14] text-white rounded-lg hover:bg-[#e66f0f] transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage
export default function App() {
  const [showProfile, setShowProfile] = useState(false);

  const sampleSP = {
    name: "Dr. Ahmed Khaled",
    photo: "https://via.placeholder.com/150",
    clinic: "Happy Pets Clinic",
    rating: 4,
    address: "Nasr City, Cairo, Egypt",
    phone: "+20 101 234 5678",
    availability: [
      { day: "Saturday", times: ["10:00 AM", "12:00 PM", "04:00 PM"] },
      { day: "Sunday", times: ["09:00 AM", "11:30 AM", "03:00 PM"] },
    ],
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setShowProfile(true)}
        className="bg-[#FD7E14] text-white px-4 py-2 rounded-lg"
      >
        Know More
      </button>

      {showProfile && (
        <ServiceProviderProfile sp={sampleSP} onClose={() => setShowProfile(false)} />
      )}
    </div>
  );
}
