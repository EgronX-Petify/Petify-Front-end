import React, { useContext, useState } from "react";
import { FaCheck, FaTimes, FaCalendarCheck } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Return from "./Return";
import { Link } from "react-router-dom";
import RescheduleAppointment from "./RescheduleAppointment";
import { SPContext } from "../../contexts/SPContext";
import swal from "sweetalert";
import toast from "react-hot-toast";

const ManageAppointments = () => {
  const {
    appointments,
    setAppointments,
    selectedAppointment,
    setSelectedAppointment,
  } = useContext(SPContext);
  const [open, setOpen] = useState(false);

  const now = new Date();
  const upcoming = appointments.filter(
    (appt) => new Date(`${appt.date} ${appt.time}`) > now && !appt.done
  );
  const past = appointments.filter(
    (appt) => new Date(`${appt.date} ${appt.time}`) <= now || appt.done
  );

  function handleCancelAppointment(id) {
    swal({
      text: "Are you sure you want to cancel this appointment?",
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
    }).then((willDelete) => {
      if (willDelete) {
        setAppointments(appointments.filter((appt) => appt.id !== id));
        toast("Canceled", {
          icon: "✅",
          duration: "300",
        });
      }
    });
  }

  function makeApptDone(id) {
    swal({
      text: "Are you sure you want to make this appointment done?",
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
    }).then((willDone) => {
      if (willDone) {
        setAppointments(
          appointments.map((appt) =>
            appt.id === id ? { ...appt, done: true } : appt
          )
        );
        toast("This appointment marked as Done", {
          icon: "✅",
          duration: "300",
        });
      }
    });
  }

  return (
    <div className="bg-[#F8F9FA] p-5 rounded-xl shadow-sm w-full mx-auto">
      <Return showLabel={true} />
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white p-3 rounded-lg bg-[#417481]">
        <FaCalendarCheck />
        Appointments
      </h2>

      <div className="space-y-3">
        {!upcoming.length ? (
          <p className="py-3 px-2 text-gray-500 text-xl">
            No Upcoming Appointments
          </p>
        ) : (
          upcoming.map((a) => (
            <div
              key={a.id}
              className="flex justify-between items-center bg-white p-3 rounded-lg"
            >
              <div>
                <p className="font-medium text-sm text-[#2F4156]">{a.client}</p>
                <p className="hidden md:block text-xs text-gray-500">
                  {a.service} • {a.date} • {a.time}
                </p>
                <div className="md:hidden flex flex-col md:flex-row text-xs text-gray-500">
                  <p>{a.service}</p>
                  <p>{a.date}</p>
                  <p>{a.time}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 ">
                <button
                  className="cursor-pointer bg-green-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-green-600"
                  onClick={() => makeApptDone(a.id)}
                >
                  <FaCheck /> Done
                </button>
                <button
                  className="cursor-pointer bg-[#fd7d14db] text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-[#FD7E14]"
                  onClick={() => {
                    setOpen(true);
                    setSelectedAppointment(a);
                  }}
                >
                  <MdOutlineModeEditOutline /> Reschedule
                </button>
                <button
                  className="cursor-pointer bg-red-500 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600"
                  onClick={() => handleCancelAppointment(a.id)}
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            </div>
          ))
        )}

        {past.length > 0 && (
          <>
            <p className=" pl-2 font-medium text-[#417481] text-xl">
              Past Appointments
            </p>
            {past.map((a) => (
              <div
                key={a.id}
                className="flex justify-between items-center bg-white p-3 rounded-lg"
              >
                <div>
                  <p className="font-medium text-sm text-[#2F4156]">
                    {a.client}
                  </p>
                  <p className="hidden md:block text-xs text-gray-500">
                    {a.service} • {a.date} • {a.time}
                  </p>
                  <div className="md:hidden flex flex-col md:flex-row text-xs text-gray-500">
                    <p>{a.service}</p>
                    <p>{a.date}</p>
                    <p>{a.time}</p>
                  </div>
                </div>
              </div>
            ))}{" "}
          </>
        )}
      </div>

      <RescheduleAppointment
        open={open}
        setOpen={setOpen}
        appointments={appointments}
        appointment={selectedAppointment}
        setAppointments={setAppointments}
        setSelectedAppointment={setSelectedAppointment}
      />
    </div>
  );
};

export default ManageAppointments;
