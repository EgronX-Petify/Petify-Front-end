import React from "react";

const AdminFooter = () => {
  return (
    <footer className="w-full bg-[#FFFFFF] py-4 px-6 flex justify-between items-center text-sm text-gray-600">
      <span>© {new Date().getFullYear()} Petify Admin. All rights reserved.</span>
      <div className="flex gap-4">
        <a href="/privacy" className="hover:text-[#2f4156]">Privacy</a>
        <a href="/terms" className="hover:text-[#2f4156]">Terms</a>
      </div>
    </footer>
  );
};

export default AdminFooter;
