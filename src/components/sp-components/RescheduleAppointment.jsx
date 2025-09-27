import React, { useContext, useState } from "react";
import { FaCalendarAlt, FaClock, FaRedo } from "react-icons/fa";
import toast from "react-hot-toast";

const RescheduleAppointment = ({
  open,
  setOpen,
  setAppointments,
  setSelectedAppointment,
  appointments,
  appointment,
}) => {
  const id = appointment?.id;

  const [formData, setFormData] = useState({ date: "", time: "" });
  const [errors, setErrors] = useState({ date: "", time: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { date: "", time: "" };

    const today = new Date();
    const selectedDate = new Date(formData.date);

    if (!formData.date) {
      newErrors.date = "Date is required.";
      valid = false;
    } else if (selectedDate < today.setHours(0, 0, 0, 0)) {
      newErrors.date = "Date cannot be in the past.";
      valid = false;
    }

    if (!formData.time) {
      newErrors.time = "Time is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  function reset() {
    setSelectedAppointment(null);
    setFormData({ date: "", time: "" });
    setErrors({ date: "", time: "" });
    setOpen(false);
  }
  const handleRescheduleAppointment = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    swal({
      text: "Are you sure you want to reschedule this appointment?",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className:
            "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",
        },
        confirm: {
          text: "Yes",
          value: true,
          visible: true,
          className:
            "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",
        },
      },
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        setAppointments(
          appointments.map((appt) =>
            appt.id === id
              ? { ...appt, date: formData.date, time: formData.time }
              : appt
          )
        );
        reset();
        toast.success("Appointment Rescheduled Successfully!");
      }
    });
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div
          className="
            max-w-[90%] md:w-3xl 
            bg-white rounded-2xl shadow-md 
            max-h-[90vh] 
            overflow-y-auto
            p-4 md:p-6
          "
        >
          <h2 className="text-xl font-semibold mb-5 flex items-center gap-2 text-[#2F4156]">
            <FaRedo /> Reschedule Appointment
          </h2>

          <form
            onSubmit={handleRescheduleAppointment}
            className="flex flex-col gap-4"
          >
            {/* New Date */}
            <div>
              <label className="text-sm font-medium text-[#2F4156] mb-1 flex items-center gap-1">
                <FaCalendarAlt /> New Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.date
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#2f415677] focus:ring-[#FD7E14]"
                }`}
              />
              <p className="text-xs text-red-500 h-4">{errors.date}</p>
            </div>

            {/* New Time */}
            <div>
              <label className="text-sm font-medium text-[#2F4156] mb-1 flex items-center gap-1">
                <FaClock /> New Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.time
                    ? "border-red-500 focus:ring-red-500"
                    : "border-[#2f415677] focus:ring-[#FD7E14]"
                }`}
              />
              <p className="text-xs text-red-500 h-4">{errors.time}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3">
              <button
                type="button"
                className="sm:w-auto bg-red-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => reset()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 bg-[#FD7E14] text-white py-2 rounded-lg font-medium hover:bg-[#e66f0f] transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default RescheduleAppointment;
