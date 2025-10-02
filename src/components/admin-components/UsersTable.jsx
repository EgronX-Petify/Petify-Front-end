import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import LoadingSpinner from "../LoadingSpinner";

const UserTable = () => {
  const { users, loading, handleBan, handleActivate, handleApprove } =
    useContext(UsersContext);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString();
  };

  return users?.length === 0 ? (
    <p className="col-span-full text-center bg-white  min-h-14 py-5 text-xl font-semibold text-[#2F4156] capitalize">
      No users available
    </p>
  ) : loading ? (
    <LoadingSpinner text="users are loading..." />
  ) : (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#2F4156]">
        Users Management
      </h2>

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
          >
            <div>
              <h3 className="font-semibold text-[#2F4156]">{user.email}</h3>
              <p className="text-sm text-gray-500 uppercase">
                Role: {user.role}
              </p>
              <span className="text-sm text-gray-400 inline">
                Status:
                <span
                  className={`ml-0.5  ${
                    user.status === "BANNED"
                      ? `text-red-500`
                      : user.status === "ACTIVE"
                        ? `text-green-500`
                        : `text-[#FD7E14]`
                  }`}
                >
                  {user.status}
                </span>
              </span>
              <p className="text-xs text-gray-400">
                Created At: {formatDate(user.createdAt)}
              </p>
            </div>

            <div className="flex gap-2">
              {user.role === "SERVICE_PROVIDER" &&
                user.status === "PENDING" && (
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
                    onClick={() => handleApprove(user.id)}
                  >
                    Verify
                  </button>
                )}
              <button
                className={`bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 ${user.role === "ADMIN" ? "opacity-70 cursor-not-allowed" : ""}`}
                onClick={() =>
                  user.status === "ACTIVE"
                    ? handleBan(user.id)
                    : handleActivate(user.id)
                }
              >
                {user.status === "ACTIVE" ? `Ban` : `Activate`}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
