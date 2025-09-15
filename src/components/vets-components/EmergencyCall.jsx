import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";

const EmergencyCall = ({ open, setOpen }) => {
  const [pet, setPet] = useState("");
  const [emergencyType, setEmergencyType] = useState("Injury");
  const [serviceProvider, setServiceProvider] = useState("");
  const [notes, setNotes] = useState("");

  // Mock profile contact phone (later replace with actual profile data)
  const contactPhone = "+20 100 123 4567";

  // Example pets
  const pets = ["Dog", "Cat", "Parrot", "Rabbit", "Other"];

  // Example vets (24/7 service providers)
  const vets = [
    "Cairo Vet Emergency Clinic",
    "24/7 Pet Hospital Giza",
    "Alexandria Animal Care Center",
    "Mansoura Pet Emergency",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      pet,
      emergencyType,
      serviceProvider,
      contactPhone,
      notes,
    };

    console.log("Emergency Booking Submitted:", booking);
    alert("Emergency booking submitted successfully!");
    setOpen(false);
  };

  const handleCallNow = () => {
    window.location.href = `tel:${contactPhone}`;
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
        <div className="w-full max-w-lg md:max-w-2xl max-h-[95vh] overflow-y-auto bg-white shadow-lg rounded-2xl p-6 relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4"
            onClick={() => setOpen(false)}
          >
            <MdCancelPresentation className="text-2xl text-[#2F4156] cursor-pointer hover:text-red-500 transition" />
          </button>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#ff383b] mb-6 text-center">
            Emergency Booking
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pet */}
            <div>
              <label className="block text-[#2F4156] font-medium mb-2">
                Pet
              </label>
              <select
                value={pet}
                onChange={(e) => setPet(e.target.value)}
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                required
              >
                <option value="">Select your pet</option>
                {pets.map((p, i) => (
                  <option key={i} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Emergency Type */}
            <div>
              <label className="block text-[#2F4156] font-medium mb-2">
                Emergency Type
              </label>
              <select
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              >
                <option value="Injury">Injury</option>
                <option value="Illness">Illness</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Service Provider */}
            <div>
              <label className="block text-[#2F4156] font-medium mb-2">
                Service Provider
              </label>
              <select
                value={serviceProvider}
                onChange={(e) => setServiceProvider(e.target.value)}
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
                required
              >
                <option value="">Select a vet</option>
                {vets.map((vet, i) => (
                  <option key={i} value={vet}>
                    {vet}
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Phone */}
            <div>
              <label className="block text-[#2F4156] font-medium mb-2">
                Contact Phone
              </label>
              <input
                type="text"
                value={contactPhone}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[#2F4156] font-medium mb-2">
                Notes
              </label>
              <textarea
                rows="3"
                placeholder="Describe the emergency..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row justify-center gap-3 w-full">
              <button
                type="submit"
                className="flex-1 px-5 py-3 rounded-xl bg-[#FD7E14] text-white font-medium hover:bg-[#e76c0a] transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCallNow}
                className="flex-1 px-5 py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition"
              >
                Call Now
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EmergencyCall;
