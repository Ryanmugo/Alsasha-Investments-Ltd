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
            className="text-2xl md:text-4xl lg:text-4xl sm:text-2xl text-orange-500 font-semibold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            🤔 Ready to launch your ideas? Let's chat! Connect with us today and
            let the magic begin!
          </h1>
          <div className="flex justify-center items-center w-[400px]">
            <form
              action="https://getform.io/f/868f365b-14a2-4dc0-99a3-e523d7b64438"
              method="POST"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name...."
                className="p-2 bg-transparent rounded-md border-2 focus:outline-none text-white placeholder-white mb-4 w-full"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email...."
                className="p-2 bg-transparent rounded-md border-2 focus:outline-none text-white placeholder-white mb-4 w-full"
              />
              <textarea
                name="message"
                rows={10}
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder-white mb-4 w-full"
                placeholder="Enter Your Message...."
              ></textarea>

              <button className="text-white bg-orange-500 px-6 py-3 rounded-md hover:scale-110 duration-300">
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
