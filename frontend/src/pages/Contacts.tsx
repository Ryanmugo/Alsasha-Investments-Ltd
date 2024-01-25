const Contacts = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="bg-cover bg-center h-screen  flex items-center justify-center "
        style={{
          backgroundImage: 'url("/contact.jpg")',
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h1
            className="text-2xl md:text-4xl lg:text-5xl text-white font-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            🚀 Ready to launch your ideas? Let's chat! 🤝 Connect with us today
            and let the magic begin! 🌟
          </h1>

          <p className="p-4 bg-blue-300 text-md md:text-2xl text-center border rounded">
            <b>📲&nbsp; Telephone No:</b>
            &nbsp; <b>+254 720 677 577</b>
            <br />
            <br />
            <b>📩 &nbsp; Email Address:</b>&nbsp;{" "}
            <b>alsashainvestments@gmail.com</b>
            <br />
            <br />
            <b>📬 &nbsp; Mailing Address:</b>&nbsp;{" "}
            <b>P.O Box 60332-00200 &nbsp;Nairobi, Kenya</b>
            <br />
            <br />
            <b>📌 &nbsp; Physical Address:</b>&nbsp;
            <b>Theta Lane, Kilimani, Nairobi</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
