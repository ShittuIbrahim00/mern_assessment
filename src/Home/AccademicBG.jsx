const academics = [
    {
      degree: "Bachelor of Science in Economics and Development Studies",
      institution: "Federal University Dutsin-ma, Katsina",
      year: "2018 - 2022",
    },
    {
      degree: "Full Stack Web development",
      institution: "Rework Accademy",
      year: "2024",
    },
  ];
  
  const AcademicBackground = () => {
    return (
      <div className="w-[85%] mx-auto my-10">
        <p className="text-white text-2xl font-semibold">Academic Background</p>
        <p className="border-b-2 w-28 border-blue-500 mt-1 mb-4"></p>
        <div className="space-y-5">
          {academics.map((item, index) => (
            <div key={index}>
              <p className="text-white font-semibold text-lg">{item.degree}</p>
              <p className="text-white text-sm">
                {item.institution} &mdash; <span className="italic">{item.year}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AcademicBackground;
  