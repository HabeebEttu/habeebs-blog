import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-30 h-30 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
