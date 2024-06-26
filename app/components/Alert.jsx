import React from "react";

const AlertOverlay = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10  shadow-md">
        <p className="text-base/relaxed font-medium drop-shadow-sm mb-6">
          {message}
        </p>
        <button
          onClick={onClose}
          className="flex items-center px-6 text-sm font-medium leading-none border-sky-700 border-solid border rounded text-white hover:text-sky-700 h-10 hover:bg-white bg-sky-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertOverlay;
