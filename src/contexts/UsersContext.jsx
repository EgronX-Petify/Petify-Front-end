import React, { createContext, useEffect, useState } from "react";
import * as adminApi from "../APIs/adminAPI";
import { confirmMessage } from "../utils/confirmMessage";
import { toastPromise } from "../utils/toastPromise";

const UsersContext = createContext();
const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState({});
  const [pendingSP, setPendingSP] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const { data } = await adminApi.getAllUsers();
        setUsers(data);
        return data;
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUsersCount = async () => {
      try {
        const { data } = await adminApi.getUsersCount();
        setUsersCount(data);
        return data;
      } catch (error) {
        throw error;
      }
    };
    fetchUsersCount();
  }, []);

  useEffect(() => {
    const fetchPendingSP = async () => {
      setLoading(true);
      try {
        const { data } = await adminApi.getPendingSP();
        console.log(data);
        setPendingSP(data);
        return data;
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchPendingSP();
  }, []);

  // Ban user
  const handleBan = async (id) => {
    const willBan = await confirmMessage({
      text: `Are you sure you want to ban user ${id}?`,
    });

    if (!willBan) return;

    toastPromise(adminApi.banUser(id), {
      loading: `Banning user ${id}... ⏳`,
      success: "User banned successfully ✅",
      error: (err) => err.response?.data?.message || "Failed to ban user ❌",
    }).then(() => {
      // تحديث الـ state فوراً
      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: "BANNED" } : user
        )
      );
    });
  };

  // Activate user
  const handleActivate = async (id) => {
    const willActivate = await confirmMessage({
      text: `Are you sure you want to activate user ${id}?`,
    });

    if (!willActivate) return;

    toastPromise(adminApi.activateUser(id), {
      loading: `Activating user ${id}... ⏳`,
      success: "User activated successfully ✅",
      error: (err) =>
        err.response?.data?.message || "Failed to activate user ❌",
    }).then(() => {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: "ACTIVE" } : user
        )
      );
    });
  };

  // Approve SP
  const handleApprove = async (id) => {
    const willApprove = await confirmMessage({
      text: `Are you sure you want to verify service provider ${id}?`,
    });

    if (!willApprove) return;

    toastPromise(adminApi.approveSP(id), {
      loading: `Verifing SP ${id}... ⏳`,
      success: "Service provider verified",
      error: (err) => err.response?.data?.message || "Failed to verify SP ❌",
    }).then(() => {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, status: "ACTIVE" } : user
        )
      );
    });
  };

  // Remove service
  const handleRemoveService = async (id) => {
    const willDelete = await confirmMessage({
      text: `Are you sure you want to remove service ${id}?`,
    });

    if (!willDelete) return;

    toastPromise(adminApi.removeService(id), {
      loading: `Removing service ${id}... ⏳`,
      success: "Service removed ✅",
      error: (err) =>
        err.response?.data?.message || "Failed to remove service ❌",
    }).then(() => {
      setServices((prev) => prev.filter((s) => s.id !== id));
    });
  };

  // Remove product
  const handleRemoveProduct = async (id) => {
    const willDelete = await confirmMessage({
      text: `Are you sure you want to remove product ${id}?`,
    });

    if (!willDelete) return;

    toastPromise(adminApi.removeProduct(id), {
      loading: `Removing product ${id}... ⏳`,
      success: "Product removed ✅",
      error: (err) =>
        err.response?.data?.message || "Failed to remove product ❌",
    }).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        usersCount,
        loading,
        handleBan,
        handleActivate,
        handleApprove,
        handleRemoveService,
        handleRemoveProduct,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
export { UsersContext };
