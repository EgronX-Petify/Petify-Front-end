import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const EmergencyCall = () => {
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
  };

  const handleCallNow = () => {
    window.location.href = `tel:${contactPhone}`;
  };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-[600px] px-4 py-8 bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <button className="flex justify-end  w-full" onClick={() => navigate(-1)}>
          <MdCancelPresentation className="text-2xl text-[#2F4156] cursor-pointer" />
        </button>
        <h2 className="text-3xl font-bold text-[#ff383b] mb-6 text-center">
          Emergency Booking
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#2F4156] font-medium mb-2">Pet</label>
            <select
              value={pet}
              onChange={(e) => setPet(e.target.value)}
              className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14]"
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

          <div>
            <label className="block text-[#2F4156] font-medium mb-2">
              Emergency Type
            </label>
            <select
              value={emergencyType}
              onChange={(e) => setEmergencyType(e.target.value)}
              className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14]"
            >
              <option value="Injury">Injury</option>
              <option value="Illness">Illness</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[#2F4156] font-medium mb-2">
              Service Provider
            </label>
            <select
              value={serviceProvider}
              onChange={(e) => setServiceProvider(e.target.value)}
              className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14]"
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

          <div>
            <label className="block text-[#2F4156] font-medium mb-2">
              Contact Phone
            </label>
            <input
              type="text"
              value={contactPhone}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 "
            />
          </div>

          <div>
            <label className="block text-[#2F4156] font-medium mb-2">
              Notes
            </label>
            <textarea
              rows="3"
              placeholder="Describe the emergency..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 border border-[#2f415677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FD7E14]"
            ></textarea>
          </div>

          <div className="flex justify-between items-center gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#FD7E14] text-white py-2 rounded-lg hover:bg-[#e76c0a] transition-colors"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCallNow}
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Call Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencyCall;
