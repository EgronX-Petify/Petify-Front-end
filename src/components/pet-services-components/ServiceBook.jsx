import React, { useContext, useState } from "react";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";
import UseAppointments from "../../hooks/UseAppointments";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";

const ServiceBook = ({ open, setOpen, showSucessBookAlert }) => {
  const userPets = [
    { id: 1, name: "Bella" },
    { id: 2, name: "Max" },
    { id: 3, name: "Luna" },
  ];

  const [formData, setFormData] = useState({
    pet: "",
    date: "",
    time: "",
    emergency: false,
  });

  const [errors, setErrors] = useState({});
  const { setSelectedAppointment } = useContext(AppointmentsContext);
  const selectedAppointment = UseSelectedAppointment();
  const appointments = UseAppointments();
  const { setAppointments } = useContext(AppointmentsContext);

  // validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.pet) newErrors.pet = "Pet is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFinishBook = () => {
    if (!validate()) return;

    const newAppointment = {
      ...selectedAppointment,
      ...formData,
    };

    setSelectedAppointment(newAppointment);

    setAppointments((prev) => [...prev, newAppointment]);

    setFormData({
      pet: "",
      date: "",
      time: "",
      emergency: false,
    });
    setOpen(false);
    showSucessBookAlert();
    console.log(appointments);
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center bg-[#41748137] py-5 px-4 rounded-t-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F4156]">
              Select Your Visit Date & Time
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Pet */}
              <div className="flex flex-col w-full md:w-fit bg-[#F8F9FA] p-4 rounded-lg shadow-sm h-fit">
                <label className="mb-2 text-sm font-medium text-[#2F4156]">
                  Select Pet
                </label>
                <select
                  name="pet"
                  value={formData.pet}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${
                    errors.pet ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg text-[#2F4156] focus:ring-2 focus:ring-[#FD7E14] focus:border-[#FD7E14] outline-none w-full`}
                >
                  <option value="">Choose a pet</option>
                  {userPets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </select>
                <div className="h-6">
                  {errors.pet && (
                    <span className="text-red-500 text-sm">{errors.pet}</span>
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col w-full md:w-fit bg-[#F8F9FA] p-4 rounded-lg shadow-sm h-fit">
                <label className="mb-2 text-sm font-medium text-[#2F4156]">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${
                    errors.date ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg text-[#2F4156] focus:ring-2 focus:ring-[#FD7E14] focus:border-[#FD7E14] outline-none w-full`}
                />
                <div className="h-6">
                  {errors.date && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.date}
                    </span>
                  )}
                </div>
              </div>

              {/* Time */}
              <div className="flex flex-col w-full md:w-fit bg-[#F8F9FA] p-4 rounded-lg shadow-sm h-fit">
                <label className="mb-2 text-sm font-medium text-[#2F4156]">
                  Select Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`px-3 py-2 border ${
                    errors.time ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg text-[#2F4156] focus:ring-2 focus:ring-[#FD7E14] focus:border-[#FD7E14] outline-none w-full`}
                />
                <div className="h-6">
                  {errors.time && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.time}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="emergency"
                name="emergency"
                checked={formData.emergency}
                onChange={handleChange}
                className="w-4 h-4 accent-[#FD7E14] cursor-pointer"
              />
              <label
                htmlFor="emergency"
                className="text-sm md:text-base font-medium text-[#2F4156] cursor-pointer"
              >
                Emergency Service?
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-2">
              <button
                className="cursor-pointer capitalize w-full md:w-auto px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
                onClick={() => {
                  setOpen(false);
                  setErrors({});
                }}
              >
                Cancel
              </button>
              <button
                className="cursor-pointer capitalize w-full md:w-auto px-6 py-3 rounded-xl bg-[#417481] text-white font-medium hover:bg-[#2F4156] transition"
                onClick={handleFinishBook}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ServiceBook;
