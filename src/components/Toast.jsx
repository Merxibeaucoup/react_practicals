import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={closeToast}>CLose</button>
    </div>
  );
};

const Toast = () => {
  const handleNotify = () => {
    toast("Basic notification!", { position: toast.POSITION.TOP_LEFT });
    toast.success("Success notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
    toast.info("Info notification", { position: toast.POSITION.TOP_RIGHT });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false,
    });
    toast.error("Error notification!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    toast("Basic notification!", { position: toast.POSITION.BOTTOM_LEFT });
  };
  return (
    <div>
      <h1>Toastify practical</h1>
      <button onClick={handleNotify}>Notify</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
