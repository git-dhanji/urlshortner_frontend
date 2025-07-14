import React from "react";
import { createRoot } from "react-dom/client";
import { Toast } from "../components/Toast";

export const ToastMessage = (message, duration = 3000) => {
  const toastRoot = document.createElement("div");
  document.body.appendChild(toastRoot);

  const root = createRoot(toastRoot);

  const remove = () => {
    root.unmount();
    document.body.removeChild(toastRoot);
  };

  root.render(<Toast message={message} duration={duration} onClose={remove} />);
};

export default ToastMessage;
