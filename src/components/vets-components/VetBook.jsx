import React, { useContext, useState } from "react";
import UseSelectedVet from "../../hooks/UseSelectedVet";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";
import toast from "react-hot-toast";
import LoadingSpinner from "../LoadingSpinner";

const VetBook = ({ open, setOpen }) => {
  const pets = [
    { id: 1, name: "Bella" },
    { id: 2, name: "Max" },
    { id: 3, name: "Luna" },
  ];
  const selectedVet = UseSelectedVet();
  const { setSelectedAppointment, setAppointments } =
    useContext(AppointmentsContext);

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPet, setSelectedPet] = useState("");
  const [emergency, setEmergency] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setSelectedDay(null);
    setSelectedPet(null);
    setSelectedTime(null);
    setEmergency(false);
    setError("");
    setOpen(false);
  }

  function validate(selectedDay, selectedTime, selectedPet) {
    if (!selectedDay || !selectedTime || !selectedPet) {
      return "Please select a day, a time, and a pet.";
    }
    return "";
  }

  // build appointment date object
  function buildAppointmentDate(selectedDay, selectedTime) {
    const today = new Date();
    const appointmentDate = new Date();

    const dayIndex = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ].indexOf(selectedDay);

    // move appointment date to the upcoming selected day
    appointmentDate.setDate(
      today.getDate() + ((dayIndex + 7 - today.getDay()) % 7)
    );

    const [time, modifier] = selectedTime.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes || 0, 10);

    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    appointmentDate.setHours(hours, minutes, 0, 0);

    return appointmentDate;
  }

  // format date/time
  function formatDateTime(dateObj) {
    return {
      date: dateObj.toISOString().split("T")[0], // YYYY-MM-DD
      time: dateObj.toTimeString().split(" ")[0].slice(0, 5), // HH:MM
    };
  }

  function handleBook() {
    setError("");

    const validationError = validate(selectedDay, selectedTime, selectedPet);
    if (validationError) {
      setError(validationError);
      return;
    }

    const appointmentDate = buildAppointmentDate(selectedDay, selectedTime);

    if (appointmentDate < new Date()) {
      setError("You cannot book an appointment in the past.");
      return;
    }

    const { date, time } = formatDateTime(appointmentDate);

    const appt = {
      id: Date.now(),
      name: selectedVet.name,
      clinicAddress: selectedVet.clinicAddress,
      pet: selectedPet,
      date,
      time,
      emergency,
    };

    console.log("Booked Appointment:", appt);

    setAppointments((prev) => [...prev, appt]);
    setSelectedAppointment(appt);
    reset();
    toast.success("Appointment Booked Successfully!");
  }

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
        <div className="flex flex-col gap-6 items-center bg-white py-6 px-5 rounded-2xl w-full max-w-lg md:max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg">
          {/* Title */}
          <div className="flex flex-col items-center text-center px-3">
            <h2 className="text-[#2F4156] font-bold text-xl md:text-2xl">
              Select Your Visit Date & Time
            </h2>
            <p className="text-[#2f415699] mt-1 text-sm md:text-base">
              Choose a date and time from the available vet's schedule
            </p>
          </div>
          {!selectedVet ? (
            <LoadingSpinner text="Loading..." />
          ) : (
            <>
              {/* Pet Selector */}
              <div className="w-full px-3">
                <h3 className="text-[#2F4156] font-semibold text-base md:text-xl mb-3">
                  Select Pet
                </h3>
                <select
                  value={selectedPet || ""}
                  onChange={(e) => setSelectedPet(e.target.value)}
                  className="w-full text-[#2f415699] border rounded-xl px-3 py-2 text-sm md:text-lg"
                >
                  <option value="" className="text-[#2f415699]">
                    Choose a Pet
                  </option>
                  {pets.map((pet) => (
                    <option
                      key={pet.id}
                      value={pet.name}
                      className="text-[#2f415699]"
                    >
                      {pet.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Emergency Checkbox */}
              <div className="w-full px-3 flex items-center gap-2">
                <input
                  id="emergency"
                  type="checkbox"
                  checked={emergency}
                  onChange={(e) => setEmergency(e.target.checked)}
                  className="w-5 h-5"
                />
                <label
                  htmlFor="emergency"
                  className="text-[#2F4156] text-sm md:text-base"
                >
                  Mark as Emergency
                </label>
              </div>

              {/* Days */}
              <div className="w-full px-3">
                <h3 className="text-[#2F4156] font-semibold text-base md:text-xl mb-3">
                  Available Days
                </h3>
                <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                  {selectedVet.availability.map((day, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-xl text-sm md:text-lg shadow-sm transition ${
                        selectedDay === day.day
                          ? "bg-[#417481] text-white"
                          : "text-[#FD7E14] bg-gray-100 hover:bg-[#417481] hover:text-white"
                      }`}
                      onClick={() => {
                        setSelectedDay(day.day);
                        setSelectedTime(null);
                        setError(""); // clear error when choosing
                      }}
                    >
                      {day.day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Times */}
              {selectedDay && (
                <div className="w-full px-3">
                  <h3 className="text-[#2F4156] font-semibold text-base md:text-xl mb-3">
                    Available Times
                  </h3>
                  <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                    {selectedVet.availability
                      .find((d) => d.day === selectedDay)
                      ?.times.map((time, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 rounded-xl text-sm md:text-lg shadow-sm transition ${
                            selectedTime === time
                              ? "bg-[#417481] text-white"
                              : "text-[#FD7E14] bg-gray-100 hover:bg-[#417481] hover:text-white"
                          }`}
                          onClick={() => {
                            setSelectedTime(time);
                            setError(""); // clear error when choosing
                          }}
                        >
                          {time}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Error (fixed height to prevent shifting) */}
              <div className="h-6 flex items-center">
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse md:flex-row justify-center md:justify-end gap-3 w-full px-3">
                <button
                  className="cursor-pointer capitalize w-full md:w-fit px-5 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
                  onClick={() => reset()}
                >
                  Cancel
                </button>
                <button
                  className="cursor-pointer capitalize w-full md:w-fit px-5 py-3 rounded-xl bg-[#417481] text-white font-medium hover:bg-[#2F4156] transition"
                  onClick={() => handleBook()}
                >
                  Confirm
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default VetBook;
