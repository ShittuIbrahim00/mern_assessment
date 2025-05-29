import { Pen } from "lucide-react";

const WhatIDo = () => {
    const whatIdoData = [
      {
        icon: <Pen className="text-blue-500 text-3xl" />,
        title: "Copywriting",
        descp:
          "I create compelling copy that captures attention and communicates brand messages effectively.",
      },
      {
        icon: <Pen className="text-blue-500 text-3xl" />,
        title: "Backend Development",
        descp:
          "I design and build scalable backend systems with Node.js, Express, and MongoDB.",
      },
      {
        icon: <Pen className="text-blue-500 text-3xl" />,
        title: "API Integration",
        descp:
          "I integrate RESTful and third-party APIs to enhance app functionality and data exchange.",
      },
      {
        icon: <Pen className="text-blue-500 text-3xl" />,
        title: "Database Design",
        descp:
          "I design efficient database schemas for optimal performance, using relational and NoSQL databases.",
      },
    ];
  
    return (
      <div className="w-[85%] mx-auto my-10">
        <div>
          <p className="text-white text-2xl font-semibold">What I Do</p>
          <p className="border-b-2 w-14 border-blue-500 mt-1"></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            {whatIdoData.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div>{item.icon}</div>
                <div className="flex flex-col">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                  <p className="text-white text-sm my-2">{item.descp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatIDo;
  