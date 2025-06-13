import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-close after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type];

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center`}>
      <span>{message}</span>
      <button 
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;