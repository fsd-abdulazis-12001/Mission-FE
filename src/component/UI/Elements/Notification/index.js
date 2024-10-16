import { Bounce, toast } from 'react-toastify';

export const Notification = (message, type, promise = null) => {
  console.log(message, type);
  if (type === "error") {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  } else if (type === "success") {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  } else if (type === "promise" && promise) {
    toast.promise(
      promise,
      {
        pending: 'Tunggu sebentar...',
        success: `${message} 👌`,
        error: {
          render({ data }) {
            const errorMessage = data?.response?.data?.message || "Terjadi kesalahan";
            return `${errorMessage} 🤯`;
          },
        },
      },
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      }
    );
  }
};
