const About = () => {
  return (
    <div className="h-screen flex flex-col justify-start bg-gray-100">
      <h1 className="text-3xl sm:text-5xl font-semibold underline text-orange-300 text-center mt-20">
        About
      </h1>
      <p className="mt-14 mb-12 text-center text-orange-600 ">
        Since its inception in 2009, Alsasha Investments Ltd has rapidly grown
        into a prominent player in the real estate sector. Specializing in
        common area facility management for residential and commercial units, we
        offer a comprehensive range of services, including maintenance of
        grounds, power, plumbing, lighting, air conditioning, cleaning, and
        security.
      </p>
      <div className="ml-20 sm:mx-auto grid grid-cols-2 gap-4 place-items-center p-6 bg-orange-500 border rounded-lg">
        <img src="main2.jpg" alt="Image 1" className="w-[500px] h-[240px]" />
        <img src="main3.jpg" alt="Image 2" className="w-[500px] h-[240px]" />
      </div>
      <p className="mb-4 text-center text-slate-700"></p>
      <p className="mb-4 text-center text-slate-700"></p>
      <p className="mt-5 mb-2 text-black text-center font-bold"></p>
    </div>
  );
};

export default About;
