import React from "react";

const dummyUsers = [
  { id: 1, name: "Omar", type: "po", verified: true },
  { id: 2, name: "Sara", type: "sp", verified: false },
  { id: 3, name: "Ali", type: "sp", verified: true },
];

const UserTable = () => {
  const handleRemove = (id) => {
    console.log("Remove user", id);
  };

  const handleVerify = (id) => {
    console.log("Verify SP", id);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Users Management</h2>
      {!dummyUsers.length ? (
        <p className="text-xl font-semibold text-[#2F4156] capitalize">
          no users
        </p>
      ) : (
        <div className="grid gap-4">
          {dummyUsers.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
            >
              <div>
                <h3 className="font-semibold text-[#2F4156]">{user.name}</h3>
                <p className="text-sm text-gray-500 uppercase">
                  Role: {user.type}
                </p>
                <p className="text-sm">
                  Status:{" "}
                  {user.verified ? (
                    <span className="text-green-600 font-medium">
                      Verified ✅
                    </span>
                  ) : (
                    <span className="text-red-500 font-medium">
                      Not Verified ❌
                    </span>
                  )}
                </p>
              </div>

              <div className="flex gap-2">
                {user.type === "sp" && !user.verified && (
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600"
                    onClick={() => handleVerify(user.id)}
                  >
                    Verify
                  </button>
                )}
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                  onClick={() => handleRemove(user.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTable;
