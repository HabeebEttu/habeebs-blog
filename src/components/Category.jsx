import React from 'react'

export default function Category({ categoryName ,amount}) {
  return (
    <div className="flex items-center justify-between ">
          <div className="text-gray-500 hover:text-blue-700 capitalize text-base">{categoryName}</div>
          <div className="font-semibold border rounded-md px-2 py-0 ">{amount}</div>
    </div>
  );
}
