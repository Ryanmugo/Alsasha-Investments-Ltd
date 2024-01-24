const Home = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url("/cleanliness.jpg")' }}
      >
        <div className="flex items-center justify-center text-center gap-6">
          <h1 className="text-4xl  font-bold">
            🌟 Transforming Chaos into Clean Spaces, One Step at a time! 🧹✨
          </h1>
          <p className="p-4 bg-orange-300 text-xl text-center border rounded">
            Vision: Be a leader in provision of efficient and affordable
            services in common area facility management
            <br />
            <br />
            Mission: To provide effective and quality services that enable
            clean, robust and friendly environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
