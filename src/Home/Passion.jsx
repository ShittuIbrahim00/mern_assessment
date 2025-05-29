const passions = [
    {
      title: "Building Scalable Applications",
      desc: "I love designing systems that handle real-world problems with performance and reliability in mind.",
    },
    {
      title: "Open Source Contribution",
      desc: "Contributing to open-source projects helps me grow and give back to the developer community.",
    },
  ];
  
  const Passion = () => {
    return (
      <div className="w-[85%] mx-auto my-10">
        <p className="text-white text-2xl font-semibold">Passion</p>
        <p className="border-b-2 w-14 border-blue-500 mt-1 mb-4"></p>
        <div className="space-y-5">
          {passions.map((item, index) => (
            <div key={index}>
              <p className="text-white font-semibold text-lg">{item.title}</p>
              <p className="text-white text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Passion;
  