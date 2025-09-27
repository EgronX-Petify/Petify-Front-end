import React, { useContext } from "react";
import {
  FaClipboardList,
  FaBoxOpen,
  FaUserMd,
  FaCalendarCheck,
  FaEdit,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import UseSPServices from "../../hooks/UseSPServices";
import { SPContext } from "../../contexts/SPContext";
import toast from "react-hot-toast";
import swal from "sweetalert";

const MainDashboard = () => {
  const services = UseSPServices();
  const { products, appointments, setAppointments } = useContext(SPContext);
  const now = new Date();
  const upcoming = appointments.filter(
    (appt) => new Date(`${appt.date} ${appt.time}`) > now && !appt.done
  );

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
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-bold text-[#2F4156] mb-6">
        Service Provider Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Services */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Link to="/services">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#2F4156]">
                <FaClipboardList /> My Services
              </h2>
              <FaEdit className="text-[#FD7E14] cursor-pointer text-xl" />
            </div>
          </Link>

          <ul className="space-y-2 text-gray-600">
            {services.map((s, id) => (
              <li className="flex justify-between" key={id}>
                {s.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Appointments */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Link to="/appointments">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#2F4156]">
                <FaCalendarCheck /> Upcoming Appointments
              </h2>
              <FaEdit className="text-[#FD7E14] cursor-pointer text-xl" />
            </div>
          </Link>
          {upcoming.length > 0 ? (
            <div className="space-y-3">
              {upcoming.map((up) => (
                <div className="flex justify-between items-center" key={up.id}>
                  <span className="text-gray-600">{`${up.client} - ${up.service}`}</span>
                  <button
                    className="flex items-center gap-1 text-green-600 hover:underline"
                    onClick={() => makeApptDone(up.id)}
                  >
                    <FaCheckCircle /> Mark Done
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="py-3 px-2 text-gray-500 text-xl">
              No Upcoming Appointments
            </p>
          )}
        </div>

        {/* Inventory */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Link to="/products">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#2F4156]">
                <FaBoxOpen /> Product Inventory
              </h2>
              <FaEdit className="text-[#FD7E14] cursor-pointer text-xl" />
            </div>
          </Link>
          <ul className="space-y-2 text-gray-600">
            {products.slice(0, 3).map((product, index) => (
              <li className="flex justify-between" key={product.id}>
                {product.name}
                <span className="text-sm text-gray-400">{`${product.stock} in stock`}</span>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </main>
  );
};

export default MainDashboard;
