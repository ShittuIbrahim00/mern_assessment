const hobbies = [
    "Reading Tech Blogs",
    "Outdoor",
    "Exploring New Tech",
    "Listening to Music",
    "Volunteering in Communities",
  ];
  
  const HobbiesAndInterests = () => {
    return (
      <div className="w-[85%] mx-auto my-10">
        <p className="text-white text-2xl font-semibold">Hobbies & Interests</p>
        <p className="border-b-2 w-20 border-blue-500 mt-1 mb-4"></p>
        <ul className="list-disc pl-5 text-white space-y-2">
          {hobbies.map((hobby, index) => (
            <li key={index} className="text-sm">{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default HobbiesAndInterests;
  