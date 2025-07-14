// components/Toast.jsx
import { useEffect, useState } from "react";

export const Toast = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 300); // wait for animation
    }, duration);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-15 right-0 z-50">
      <div className="bg-[#1F2937]/60 backdrop-blur-md text-[#F9FAFB] pl-2 pr-4 py-3 rounded-sm shadow-lg border border-[#374151] animate-slideDown flex items-center gap-4">
        <div className="h-2 w-2 rounded-full bg-[#34D399] animate-ping"></div>
        <span className="md:text-sm font-space-gro text-white">
          {message}
        </span>
      </div>
    </div>
  );
};

export default Toast;
