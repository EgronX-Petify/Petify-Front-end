// utils/toastPromise.js
import { toast } from "react-hot-toast";

export function toastPromise(promise, { loading, success, error }) {
  return toast.promise(promise, {
    loading: loading || "Loading... ⏳",
    success: success || "Success ✅",
    error:
      error ||
      ((err) =>
        err.response?.data?.message || "Something went wrong ❌"),
  });
}
