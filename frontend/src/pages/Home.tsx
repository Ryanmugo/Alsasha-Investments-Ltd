const Home = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url("/tip.jpg")' }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h1
            className="text-2xl md:text-4xl lg:text-5xl text-orange-400 font-bold"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            🌟 Transforming Chaos into Clean Spaces, One Step at a time! 🧹✨
          </h1>

          <p className="p-4 bg-orange-300 text-md md:text-2xl text-center border rounded">
            Vision: Be a leader in the provision of efficient and affordable
            services in common area facility management
            <br />
            <br />
            Mission: To provide effective and quality services that enable a
            clean, robust, and friendly environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
