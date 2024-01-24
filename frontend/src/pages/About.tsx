const About = () => {
  return (
    <div className="h-screen flex flex-col justify-start bg-gray-100">
      <h1 className="text-3xl sm:text-5xl font-normal underline text-orange-400 text-center mt-20">
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

      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-xl md:text-4xl lg:text-5xl text-orange-400 font-bold">
          🌐 Our Core Values ✨
        </h1>
        <div className="p-4 bg-orange-300 text-md md:text-xl  border rounded">
          <ul>
            <li className="font-bold">
              1. Building Long-Term Relationships: &nbsp;&nbsp;
              <p className="font-normal">
                We prioritize cultivating enduring connections with our clients,
                partners, and stakeholders. By fostering trust and mutual
                respect, we lay the foundation for sustained collaboration and
                success.
              </p>
            </li>
            <br />
            <li className="font-bold">
              2. Quality Service and Professionalism: &nbsp; &nbsp;
              <p className="font-normal">
                Dedication to delivering top-notch service with a high level of
                professionalism is at the heart of our operations. We strive for
                excellence in every aspect, ensuring our clients receive
                services that exceed expectations.
              </p>
            </li>
            <br />
            <li className="font-bold">
              3. Customer-Focused and Solution-Driven: &nbsp; &nbsp;
              <p className="font-normal">
                Our focus revolves around understanding and addressing the
                unique needs of our customers. We are committed to providing
                tailored solutions, ensuring customer satisfaction is at the
                forefront of every decision and action we take.
              </p>
            </li>
            <br />
            <li className="font-bold">
              4. Integrity: &nbsp; &nbsp;
              <p className="font-normal">
                Upholding the highest standards of honesty and integrity is
                non-negotiable for us. We conduct our business with transparency
                and ethical practices, fostering trust among our clients and
                stakeholders.
              </p>
            </li>
            <br />
            <li className="font-bold">
              5. Discipline and Teamwork: &nbsp; &nbsp;
              <p className="font-normal">
                We believe in the power of discipline to drive consistency and
                excellence. Combined with a strong spirit of teamwork, we
                leverage diverse skills and perspectives to achieve collective
                success and overcome challenges.
              </p>
            </li>
            <br />
            <li className="font-bold">
              6. Accountability and Transparency: &nbsp; &nbsp;
              <p className="font-normal">
                Taking ownership of our actions and being transparent in our
                processes are fundamental values. We believe in being
                accountable for our commitments, and we communicate openly to
                build a culture of trust and reliability.
              </p>
            </li>
          </ul>
          <br />
          <br />
          <h6 className="font-bold text-md">
            Foundations of Excellence: Crafting Our Company's DNA with
            Unwavering Values and Visionary Spirit! 🌐✨ #CoreValuesUnleashed
          </h6>
        </div>
      </div>
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
