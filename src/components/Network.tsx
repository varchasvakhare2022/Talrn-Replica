export default function Network() {
  return (
    <section className="mt-16 ">
      <div className="bg-black text-white mx-auto rounded-xl p-10 w-6xl h-2/5">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Talrn is the world’s largest network of <br />
            top iOS talent.
          </h1>
          <p className="text-gray-400 text-lg">
            Save 70% on staff costs, while driving innovation & growth.
            Guaranteed.
          </p>
        </div>
        {/* 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-500  hover:bg-white hover:text-blue-500  rounded-lg py-4 px-6 text-white shadow-lg hover:scale-105 transition-transform">
            {" "}
            <h2 className="mb-4 font-semibold text-lg">
              Featured works on Talrn
            </h2>
            <p> Explore the best works delivered by developers</p>
          </div>
          <div className="bg-blue-500  hover:bg-white hover:text-blue-500 rounded-lg py-4 px-6 text-white shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-4 font-semibold text-lg">
              See all profiles on Talrn
            </h2>
            <p>Discover top developer profiles available on Talrn</p>
          </div>
          <div className="bg-blue-500 hover:bg-white hover:text-blue-500  rounded-lg py-4 px-6 text-white shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-4 font-semibold text-lg">Apply as a developer</h2>
            <p> Start your journey as a developer with Talrn</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="mx-auto flex justify-center items-center text-gray-600 text-3xl font-semibold">
          We’ve helped <span className="text-blue-500"> 250+</span> clients
          outsource their software development
        </h1>
        <p className="mx-auto flex justify-center items-center text-gray-600 text-lg font-semibold">
          And just to name a few...
        </p>
      </div>
    </section>
  );
}
