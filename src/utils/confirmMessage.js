import swal from "sweetalert";

export function confirmMessage({
  text = "Are you sure?",
  confirmText = "Yes",
  cancelText = "Cancel",
}) {
  return swal({
    text,
    buttons: {
      cancel: {
        text: cancelText,
        value: false,
        visible: true,
        className:
          "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",
      },
      confirm: {
        text: confirmText,
        value: true,
        visible: true,
        className:
          "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",
      },
    },
    dangerMode: true,
  });
}
