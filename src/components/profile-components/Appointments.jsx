import React from "react";
import UpcomingAppointments from "./UpcomingAppointments";
import PastAppointments from "./PastAppointments";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      vetName: "Dr. Ahmed - Happy Paws Clinic",
      clinicAddress: "123 Nile St, Cairo",
      date: "2025-09-12",
      time: "10:00 AM",
    },
    {
      id: 2,
      vetName: "Dr. Sara - Pet Wellness Center",
      clinicAddress: "45 Tahrir Sq, Giza",
      date: "2025-09-15",
      time: "2:30 PM",
    },
    {
      id: 3,
      vetName: "Cairo Pet Hospital",
      clinicAddress: "Ring Rd, Maadi, Cairo",
      date: "2025-09-20",
      time: "11:15 AM",
    },
    {
      id: 4,
      vetName: "Dr. Hossam - Animal Care",
      clinicAddress: "12 Abbasia St, Cairo",
      date: "2025-08-28",
      time: "4:00 PM",
    },
    {
      id: 5,
      vetName: "Dr. Mona - Vet Clinic",
      clinicAddress: "67 October City",
      date: "2025-08-18",
      time: "9:30 AM",
    },
    {
      id: 6,
      vetName: "Pet Lovers Clinic",
      clinicAddress: "Alexandria Corniche",
      date: "2025-09-25",
      time: "5:45 PM",
    },
    {
      id: 7,
      vetName: "Dr. Kareem - Paws & Claws",
      clinicAddress: "Zamalek, Cairo",
      date: "2025-09-05",
      time: "12:00 PM",
    },
    {
      id: 8,
      vetName: "Happy Tail Vet Center",
      clinicAddress: "Mansoura Downtown",
      date: "2025-07-30",
      time: "3:00 PM",
    },
  ];
  const now = new Date();

  // Split appointments into upcoming & past
  const upcoming = appointments.filter(
    (appt) => new Date(`${appt.date} ${appt.time}`) > now
  );
  const past = appointments.filter(
    (appt) => new Date(`${appt.date} ${appt.time}`) <= now
  );

  return (
    <div className="max-w-6xl mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-3xl  text-[#2F4156] mb-6 text-center">
        My Appointments
      </h2>

      {/* Upcoming */}
      <UpcomingAppointments appointments={upcoming} />

      {/* Past */}
      <PastAppointments appointments={past} />
    </div>
  );
};

export default Appointments;
