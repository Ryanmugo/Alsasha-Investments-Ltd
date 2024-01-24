const About = () => {
  return (
    <div className="h-screen flex flex-col justify-start bg-gray-100">
      <h1 className="text-3xl sm:text-5xl font-semibold underline text-orange-400 text-center mt-20">
        About
      </h1>
      <p className="mt-14 mb-12 text-center font-semibold text-orange-500">
        Since its inception in 2009, Alsasha Investments Ltd has rapidly grown
        into a prominent player in the real estate sector. Specializing in
        common area facility management for residential and commercial units, we
        offer a comprehensive range of services, including maintenance of
        grounds, power, plumbing, lighting, air conditioning, cleaning, and
        security.
      </p>
      <div className="grid grid-cols-2 gap-2  place-items-center">
        <img
          src="main3.jpg"
          alt="Image 1"
          className="w-full md:w-[400px] h-auto"
        />

        <img
          src="mow.jpg"
          alt="Image 2"
          className="w-full md:w-[400px] h-auto"
        />
      </div>
      <p className="mt-4 text-center text-orange-500 font-semibold text-lg">
        Elevating Excellence: Where Every Detail Is Crafted to Perfection!
      </p>
      <br />
      <br />
      <p className="mt-2 text-center font-semibold text-orange-500">
        At Alsasha Investments Ltd, we prioritize safety, security,
        cost-effectiveness, and environmental responsibility in all our
        operations. Our dedicated team ensures the seamless functioning of real
        estate, focusing on the long-term preservation of assets.
      </p>
      <p className="mt-2  text-orange-500 text-center font-semibold">
        Beyond basic facility management, we extend our services to landscaping
        and janitorial tasks, creating a clean, sanitized, and pleasant
        environment for residents. Our commitment to excellence makes Alsasha
        Investments Ltd the preferred choice for those seeking top-notch
        expertise in common area facility management.
      </p>
      <br />

      <p className="mt-2  text-orange-500 text-center font-bold">
        Embark on a journey with us to transform spaces into vibrant havens that
        withstand the sands of time! 🌟🏡 <br /> <br />
        Let's create lasting impressions through meticulous care and innovation.{" "}
        <br /> Together, we build environments that thrive! <br /> <br /> 🌿💼
        #TransformingSpaces &nbsp; &nbsp; #TimelessExcellence
      </p>
    </div>
  );
};

export default About;
