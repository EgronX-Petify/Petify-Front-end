import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Return = ({ label = "Back", showLabel = false }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="md:hidden flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
    >
      <FiArrowLeft className="text-2xl" />
      {showLabel && <span className="text-base font-medium">{label}</span>}
    </button>
  );
};

export default Return;
