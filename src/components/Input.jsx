// import React from 'react'

const Input = ({Icon : Icon, ...props}) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-green-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-gray-800 rounded-lg border-gray-700 ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder:text-white transition duration-200"
      />
    </div>
  );
};

export default Input;
