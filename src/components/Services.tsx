export default function Services() {
  return (
    <section className="mt-16 ">
      <div className="bg-black text-white mx-auto rounded-xl p-10 w-6xl h-2/5">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Talrn's managed <br />
            services.
          </h1>
          <p className="text-gray-400 text-lg">
            Full-scale resource augmentation with a dedicated success manager to
            manage your team's <br />
            performance. Book a free call with our team.
          </p>
        </div>
        {/* 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-500  hover:bg-white hover:text-blue-500  rounded-lg py-4 px-6 text-white shadow-lg hover:scale-105 transition-transform">
            {" "}
            <h2 className="mb-4 font-semibold text-lg">Premium Plan</h2>
            <p>$160 /mo</p>
            <button className="bg-white border-2 border-white hover:bg-blue-500 hover:text-white px-2 py-1 mt-4 text-black rounded-xl">
              Know More
            </button>
          </div>
          <div className="bg-blue-500  hover:bg-white hover:text-blue-500 rounded-lg py-4 px-6 text-white shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-4 font-semibold text-lg">SStandard Plan</h2>
            <p>$0 /mo</p>
            <button className="bg-white border-2 border-white hover:bg-blue-500 hover:text-white px-2 py-1 mt-4 text-black rounded-xl">
              Know More
            </button>
          </div>
          <div className="bg-blue-500 hover:bg-white hover:text-blue-500  rounded-lg py-4 px-6 text-white shadow-lg hover:scale-105 transition-transform">
            <h2 className="mb-4 font-semibold text-lg">Customized Plan</h2>
            <p>Get in touch with our team</p>
            <button className="bg-white border-2 border-white hover:bg-blue-500 hover:text-white px-2 py-1 mt-4 text-black rounded-xl">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
