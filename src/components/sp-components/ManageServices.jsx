import React, { useContext, useState } from "react";
import {
  FaClipboardList,
  FaBoxOpen,
  FaUserMd,
  FaCalendarCheck,
  FaEdit,
  FaCheckCircle,
  FaPhone,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Return from "./Return";
import UpdateServices from "./UpdateServices";
import { MdAdd } from "react-icons/md";
import AddService from "./AddService";
import toast from "react-hot-toast";
import UseSPServices from "../../hooks/UseSPServices";
import ServiceItem from "./ServiceItem";
import { SPContext } from "../../contexts/SPContext";

const ManageServices = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const services = UseSPServices();
  const { setServices } = useContext(SPContext);

  function handleRemoveService(id) {
    swal({
      text: "Are you sure you want to remove this service?",
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
    }).then((willRemove) => {
      if (willRemove) {
        setServices(services.filter((service) => service.id !== id));
        toast("Removed", {
          icon: "✅",
          duration: "300",
        });
      }
    });
  }
  return (
    <div className="bg-[#F8F9FA] p-5 rounded-2xl shadow-md w-full min-h-screen">
      <Return showLabel={true} />
      <h2 className="text-xl text-white font-semibold mb-4 flex items-center gap-2 p-3 rounded-lg bg-[#417481]">
        <FaClipboardList className="text-white" /> My Services
      </h2>
      <ul className="space-y-2 text-gray-600">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            setEditOpen={setEditOpen}
            handleRemoveService={handleRemoveService}
          />
        ))}
      </ul>
      <div className="flex justify-center mt-10">
        <button
          className="font-semibold text-lg capitalize cursor-pointer bg-[#417481b3] text-white px-5 py-3 rounded-md flex items-center gap-1 hover:bg-[#417481]"
          onClick={() => setAddOpen(true)}
        >
          <MdAdd /> add service
        </button>
      </div>
      <UpdateServices open={editOpen} setOpen={setEditOpen} />
      <AddService open={addOpen} setOpen={setAddOpen} />
    </div>
  );
};

export default ManageServices;
