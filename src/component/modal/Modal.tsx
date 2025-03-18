import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }: any) => {
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-transprent bg-opacity-30 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

// Add this keyframe animation to your global CSS or tailwind config
// @keyframes fadeIn {
//   from { opacity: 0; transform: scale(0.95); }
//   to { opacity: 1; transform: scale(1); }
// }
//
// .animate-fade-in {
//   animation: fadeIn 0.2s ease-out forwards;
// }

export default Modal;
