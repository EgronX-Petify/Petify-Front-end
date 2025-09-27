import React, { useContext, useState } from "react";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import UseAppointments from "../../hooks/UseAppointments";
import swal from "sweetalert";
import RescheduleAppointment from "../sp-components/RescheduleAppointment";
import toast, { Toaster } from "react-hot-toast";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";

const AppointmentTemp = ({ appt, show = false }) => {
  const { setAppointments } = useContext(AppointmentsContext);
  const { setSelectedAppointment } = useContext(AppointmentsContext);
  const appointments = UseAppointments();
  const appointment = UseSelectedAppointment();

  const [rescheduleOpen, setRescheduleOpen] = useState(false);

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

  return (
    <div className="px-8 py-4 border border-[#2f41565a] rounded-2xl flex justify-between items-center hover:bg-gray-50 transition">
      <div>
        <h3 className="text-lg font-medium text-[#2F4156]">{appt?.name}</h3>
        <p className="text-sm text-gray-600">
          {appt.clinicAddress || "No address provided"}
        </p>
        <p className="text-sm text-gray-500">
          {appt?.date} • {appt?.time}
        </p>
        <p className="text-sm text-gray-500">{`for ${appt?.pet} `}</p>
      </div>
      {show && (
        <div className="flex flex-col gap-2">
          <button
            className="cursor-pointer px-4 py-2 text-sm rounded-lg bg-[#2f4156a0] text-white hover:bg-[#2f4156] transition"
            onClick={() => {
              setSelectedAppointment(appt);
              setRescheduleOpen(true);
            }}
          >
            Reschedule
          </button>
          <button
            onClick={() => handleCancelAppointment(appt?.id)}
            className="cursor-pointer px-4 py-2 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
          >
            Cancel
          </button>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <RescheduleAppointment
        open={rescheduleOpen}
        setOpen={setRescheduleOpen}
        appointments={appointments}
        appointment={appointment}
        setAppointments={setAppointments}
        setSelectedAppointment={setSelectedAppointment}
      />
    </div>
  );
};

export default AppointmentTemp;
