const Contacts = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="bg-cover bg-center h-screen  flex items-center justify-center "
        style={{
          backgroundImage: 'url("/map.jpg")',
        }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h1
            className="text-2xl md:text-4xl lg:text-4xl text-orange-500 font-semibold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            🤔 Ready to launch your ideas? Let's chat! Connect with us today and
            let the magic begin!
          </h1>
          <p className="p-4 bg-orange-300 text-md md:text-xl font-semibold text-center border rounded">
            📲&nbsp; Telephone No: &nbsp; +254 720 677 577
            <br />
            <br />
            📩 &nbsp; Email Address:&nbsp; alsashainvestments@gmail.com
            <br />
            <br />
            📬 &nbsp; Mailing Address:&nbsp; P.O Box 60332-00200 &nbsp;Nairobi,
            Kenya
            <br />
            <br />
            📌 &nbsp; Physical Address:&nbsp; Theta Lane, Kilimani, Nairobi
            <br />
            <br />
            🏢 Branch Office:&nbsp; Tom Mboya Road, Milimani, Kisumu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
