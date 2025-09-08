import React from 'react'

const PastAppointments = ({appointments}) => {
  return (
    <div>
      <h3 className="text-xl text-[#2F4156] mb-3">
        Past Appointments
      </h3>
      {appointments.length > 0 ? (
        <div className="flex flex-col gap-5">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="px-8 py-4 border border-[#2f41565a] rounded-2xl flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div>
                <h3 className="text-lg font-medium text-[#2F4156]">
                  {appt.vetName}
                </h3>
                <p className="text-sm text-gray-600">{appt.clinicAddress}</p>
                <p className="text-sm text-gray-500">
                  {appt.date} • {appt.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No past appointments.</p>
      )}
    </div>
  );
}

export default PastAppointments
