export default function Team() {
  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* left section */}
        <div className="text-gray-600 font-semibold">
          <h1 className="text-4xl mb-4">
            Scale your team with Talrn's immediately available resources
          </h1>
          <p className=" text-lg mb-4">
            Find pre-vetted iOS developers that have previously worked in the
            same industry instantly.
          </p>
          <p className="text-lg mb-4">What is your industry?</p>
          <div>
            <button className="rounded-full p-2 mr-2 mb-2 border-gray-400 text-blue-500 border-1 ">
              Healthcare
            </button>
            <button className="rounded-full p-2 mr-2 border-gray-400 text-blue-500 border-1 ">
              Automotive
            </button>
            <button className="rounded-full p-2 mr-2 border-gray-400 text-blue-500 border-1 ">
              Banking
            </button>
            <button className="rounded-full p-2 mr-2 border-gray-400 text-blue-500 border-1 ">
              Capital Markets{" "}
            </button>
            <button className="rounded-full p-2 mr-2 border-gray-400 text-blue-500 border-1 ">
              Travel
            </button>
            <button className="rounded-full p-2 mr-2 border-gray-400 text-blue-500 border-1 ">
              Digital Commerce
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div>
          <img src="/team.png" alt="Team" />
        </div>
      </div>
    </section>
  );
}
