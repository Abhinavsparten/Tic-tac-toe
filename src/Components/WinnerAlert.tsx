import React from "react";

type WinnerAlertProps = {
  message: string;
  onClose: () => void;
};

const WinnerAlert: React.FC<WinnerAlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed w-75 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 text-center shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default WinnerAlert;
