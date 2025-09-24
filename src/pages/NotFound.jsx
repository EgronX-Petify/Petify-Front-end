import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[linear-gradient(135deg,#417481_0%,#9ca3af_100%)] text-white text-center px-4">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-[#417481] rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
