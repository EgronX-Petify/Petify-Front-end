import React, { useContext, useEffect, useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import UseAppointments from "../../hooks/UseAppointments";

const EmergencyCall = ({ open, setOpen }) => {
  const user = UseLoggedUser();
  const { setAppointments } = useContext(AppointmentsContext);
  const [formData, setFormData] = useState({});
  const appointments = UseAppointments();
  const [errors, setErrors] = useState({});
  // console.log(appointments);

  useEffect(() => {
    setFormData({
      pet: "",
      emergencyType: "",
      serviceProvider: "",
      phone: user?.phone || "",
      notes: "",
      date: "",
      time: "",
    });
  }, [user]);

  // Example vets (24/7 service providers)
  const vets = [
    "Cairo Vet Emergency Clinic",
    "24/7 Pet Hospital Giza",
    "Alexandria Animal Care Center",
    "Mansoura Pet Emergency",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.pet) newErrors.pet = "Please select your pet";
    if (!formData.serviceProvider)
      newErrors.serviceProvider = "Please select a vet";
    if (!formData.emergencyType)
      newErrors.emergencyType = "Please select an emergency type";
    if (!formData.notes.trim())
      newErrors.notes = "Please provide emergency details";

    if (!formData.date) {
      newErrors.date = "Please select a date.";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.date);

      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past.";
      }
    }

    if (!formData.time) {
      newErrors.time = "Please select a time.";
    } else {
      const now = new Date();
      const selectedDateTime = new Date(`${formData.date}T${formData.time}`);

      if (
        new Date(formData.date).toDateString() === now.toDateString() &&
        selectedDateTime < now
      ) {
        newErrors.time = "Time cannot be in the past.";
      }
    }
    const phoneRegex = /^(\+20\d{10}|0\d{10})$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone must be +20XXXXXXXXXX or 0XXXXXXXXXX";
    }
    return newErrors;
  };

  const appt = {
    id: Date.now(),
    name: formData.serviceProvider,
    pet: formData.pet,
    emergency: true,
    date: formData.date,
    time: formData.time,
  };

  function reset() {
    setFormData({
      pet: "",
      emergencyType: "",
      serviceProvider: "",
      phone: user?.phone || "",
      notes: "",
      date: "",
      time: "",
    });
    setErrors({});
    setOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setAppointments((prev) => [...prev, appt]);
    console.log("🚨 Emergency Booking Submitted:", formData);
    alert("🚨 Emergency booking submitted successfully!");
    reset();
  };

  const handleCallNow = () => {
    window.location.href = `tel:${formData.phone}`;
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
        <div className="w-full max-w-lg md:max-w-4xl max-h-[95vh] overflow-y-auto bg-white shadow-lg rounded-2xl p-6 relative">
          {/* Close Button */}
          <button className="absolute top-4 right-4" onClick={() => reset()}>
            <MdCancelPresentation className="text-2xl text-[#2F4156] cursor-pointer hover:text-red-500 transition" />
          </button>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#ff383b] text-center">
            Emergency Booking
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-1">
            {/* Row 1: Pet + Emergency Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <div>
                <label className="block text-[#2F4156] font-medium mb-1">
                  Pet
                </label>
                <select
                  name="pet"
                  value={formData.pet}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.pet ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]`}
                >
                  <option value="">Select your pet</option>
                  {Array.isArray(user?.pets) && user.pets.length > 0 ? (
                    user.pets.map((p, i) => (
                      <option key={i} value={p.name}>
                        {p.name}
                      </option>
                    ))
                  ) : (
                    <option disabled>No pets available</option>
                  )}
                </select>
                <p className="h-5 text-sm text-red-500 mt-1">
                  {errors.pet || ""}
                </p>
              </div>

              <div>
                <label className="block text-[#2F4156] font-medium mb-1">
                  Emergency Type
                </label>
                <select
                  name="emergencyType"
                  value={formData.emergencyType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.emergencyType
                      ? "border-red-500"
                      : "border-[#2f415677]"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]`}
                >
                  <option value="">Select Emergency Type</option>
                  <option value="Injury">Injury</option>
                  <option value="Illness">Illness</option>
                  <option value="Other">Other</option>
                </select>
                <p className="h-5 text-sm text-red-500 mt-1">
                  {errors.emergencyType || ""}
                </p>
              </div>
            </div>

            {/* Row 2: Service Provider + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <div>
                <label className="block text-[#2F4156] font-medium mb-1">
                  Service Provider
                </label>
                <select
                  name="serviceProvider"
                  value={formData.serviceProvider}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.serviceProvider
                      ? "border-red-500"
                      : "border-[#2f415677]"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]`}
                >
                  <option value="">Select a vet</option>
                  {vets.map((vet, i) => (
                    <option key={i} value={vet}>
                      {vet}
                    </option>
                  ))}
                </select>
                <p className="h-5 text-sm text-red-500 mt-1">
                  {errors.serviceProvider || ""}
                </p>
              </div>

              <div>
                <label className="block text-[#2F4156] font-medium mb-1">
                  Contact Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]`}
                />
                <p className="h-5 text-sm text-red-500 mt-1">
                  {errors.phone || ""}
                </p>
              </div>
            </div>

            {/* Row 3: Date + Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <div>
                <label className="block text-[#2F4156] font-medium mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.date ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]`}
                />
                <p className="h-5 text-sm text-red-500 mt-1">
                  {errors.date || ""}
                </p>
              </div>

              <div>
                <label className="block text-[#2F4156] font-medium mb-1">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.time ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]`}
                />
                <p className="h-5 text-sm text-red-500 mt-1">
                  {errors.time || ""}
                </p>
              </div>
            </div>

            {/* Notes (full width) */}
            <div>
              <label className="block text-[#2F4156] font-medium mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                rows="3"
                placeholder="Describe the emergency..."
                value={formData.notes}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.notes ? "border-red-500" : "border-[#2f415677]"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7E14]`}
              ></textarea>
              <p className="h-5 text-sm text-red-500 mt-1">
                {errors.notes || ""}
              </p>
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
