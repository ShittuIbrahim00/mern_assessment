// import React from 'react'

const Hero = () => {
  return (
    <div className="w-8/12 mx-auto text-white flex items-center h-screen">
      <div className="flex gap-4 w-[100%]">
        <div className="bg-gray-500 rounded-full p-4 w-[50%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfIdl2NyDteQ5z3cK0QFTcQhVQP69Vs"
            alt="image"
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 w-[50%]">
          <p>Full Stack developer</p>
          <h1 className="text-2xl text-white">Shittu Ibrahim</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tempora dolorem beatae ipsum sed distinctio officia consequatur
            perferendis voluptates. Dolorem quis, aliquid doloribus dolores
            autem ratione accusantium laborum iste est amet et aspernatur
            tempora minus, maxime perferendis voluptatibus quas deleniti!
          </p>
          <div className="flex gap-4">
            <button className="border border-blue-500 rounded-full px-8 py-3 bg-gray-500 font-semibold hover:bg-blue-500 text-sm">
              Download CV
            </button>
            <button className="border border-white rounded-full px-8 py-3 bg-gray-500 font-semibold hover:bg-white hover:text-black text-sm">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
