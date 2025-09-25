import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaTimes, FaStar } from "react-icons/fa";
import { useContext } from "react";
import { SPContext } from "../../contexts/SPContext";

const ServiceItem = ({ service, setEditOpen, handleRemoveService }) => {
  const { setSelectedService } = useContext(SPContext);
  return (
    <li className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-lg gap-4 shadow-sm">
      <div className="flex gap-3 items-start md:items-center">
        <img
          src={service.photo}
          alt={service.name}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div>
          <p className="font-medium text-[#2F4156]">{service.name}</p>
          <p className="text-sm text-gray-500">Price: ${service.price}</p>
          <p className="flex items-center gap-1 text-sm text-yellow-600">
            <FaStar className="text-yellow-500" /> {service.rate}
          </p>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
            {service.description}
          </p>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex gap-2 self-end md:self-center">
        <button
          className="cursor-pointer bg-green-500 text-white px-3 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-green-600"
          onClick={() => {
            setEditOpen(true);
            setSelectedService(service);
          }}
        >
          <MdOutlineModeEditOutline /> Edit
        </button>
        <button
          className="cursor-pointer bg-red-500 text-white px-3 py-1 text-xs rounded-md flex items-center gap-1 hover:bg-red-600"
          onClick={() => handleRemoveService(service.id)}
        >
          <FaTimes /> Remove
        </button>
      </div>
    </li>
  );
};

export default ServiceItem;
