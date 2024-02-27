const Contacts = () => {
  return (
    <div className="h-screen w-full bg-slate-500">
      <div
        className="bg-cover bg-center h-screen  flex items-center justify-center"
        style={{
          backgroundImage: 'url("/map.jpg")',
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8"></div>
          </div>
          <h1
            className="text-2xl md:text-4xl lg:text-4xl text-orange-500 font-semibold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            🤔 Ready to launch your ideas? Let's chat! Connect with us today and
            let the magic begin!
          </h1>
          <div className="flex justify-center items-center">
            <form
              action="mailto:gathariryan@gmail.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name...."
                className="p-2 bg-transparent rounded-md border-2 focus:outline-none text-white placeholder-white"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email...."
                className="my-4 p-2 bg-transparent rounded-md border-2 focus:outline-none text-white placeholder-white w-[600px]"
              />
              <textarea
                name="message"
                rows={10}
                cols={50}
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-white"
                placeholder="Enter Your Message...."
              ></textarea>

              <button className="text-white  bg-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
