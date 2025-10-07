import React, { useContext, useEffect, useState } from "react";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";
import UseAppointments from "../../hooks/UseAppointments";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import toast from "react-hot-toast";
import { ProfileContext } from "../../contexts/ProfileContext";
import { ServicesContext } from "../../contexts/ServicesContext";

const ServiceBook = ({ open, setOpen }) => {
  const { userPets } = useContext(ProfileContext);
  const { bookService } = useContext(ServicesContext);

  const [formData, setFormData] = useState({
    pet: "",
    date: "",
    time: "",
    emergency: false,
  });

  const [errors, setErrors] = useState([]);
  const selectedAppointment = UseSelectedAppointment();
  const { setAppointments } = useContext(AppointmentsContext);

  // validate form fields
  const validate = () => {
    const { pet, date, time } = formData;
    const newErrors = {};

    if (!pet) {
      newErrors.pet = "Please select a pet.";
    }
    if (!date) {
      newErrors.date = "Please select a date.";
    } else {
      const today = new Date();
      const selectedDate = new Date(date);

      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past.";
      }
    }

    if (!time) {
      newErrors.time = "Please select a time.";
    } else {
      const now = new Date();
      const selectedDateTime = new Date(`${date}T${time}`);
      if (
        new Date(date).toDateString() === now.toDateString() &&
        selectedDateTime < now
      ) {
        newErrors.time = "Time cannot be in the past.";
      }
    }

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

  function reset() {
    setFormData({
      pet: "",
      date: "",
      time: "",
      emergency: false,
    });
    setOpen(false);
    setErrors({});
  }
  const handleFinishBook = async () => {
    if (!validate()) return;

    const payload = {
      petId: formData.pet.id,
      serviceId: selectedAppointment.id,
      requestedTime: "",
      date: formData.date,
      time:formData.time,
    };
    console.log(payload);
    // const res = await bookService(payload);
    // console.log("appt::", res.date);
    // const newAppointment = {
    //   ...selectedAppointment,
    //   ...formData,
    // };
    // reset();
    // setAppointments((prev) => [...prev, newAppointment]);
  };

  // useEffect(() => {
  //   // call api backend
  //   console.log("Appointments updated:", appointments);
  // }, [appointments]);

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
                  {userPets?.map((pet) => (
                    <option key={pet.id} value={pet.name}>
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
                onClick={() => reset()}
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
