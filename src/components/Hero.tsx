export default function Hero() {
  return (
    <section className="mt-32 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* left section */}
        <div>
          <h2 className="text-2xl w-5xl md:text-4xl font-medium text-gray-800 mb-4">
            {" "}
            Find & Hire iOS Developers with Ease
          </h2>
          <p className="text-gray-600 font-medium">
            Bring the right talent to your team effortlessly with Talrn
          </p>
          <p className="pt-6 text-gray-600 w-lg mb-8">
            Hire pre-vetted remote iOS developers with strong technical &
            communication skills within 48 hours.
          </p>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Your work email"
              className="border border-gray-300 border-r-0 rounded-l-lg px-4 py-2 w-64 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 -ml-2 rounded-lg font-semibold hover:bg-blue-700">
              Hire iOSDev
            </button>
          </div>
          <p className="text-gray-600 pt-8 text-lg">
            Looking for remote iOS dev jobs{" "}
            <span className="text-blue-600 underline">Apply here</span>
          </p>
        </div>
        {/* Right section */}
      </div>
      <div className="mt-16">
        <div>
          <div className="mx-auto flex justify-center items-center text-gray-600 text-lg font-semibold">
            <h3>
              Explore 411+ iOS developers from 70+ countries, delivering 2503+
              projects.
            </h3>
          </div>
          <div className="mx-auto flex justify-center items-center text-gray-600 text-lg font-semibold">
            <p>
              Discover 102+ industry expert in Ecommerce, Health and Fitness &
              more with, 326+ technology specialists in Swift, ObjectiveC & more
            </p>
          </div>
        </div>
        {/* banner */}
        <div className="bg-blue-950 text-white py-13 mt-10 w-5xl rounded-xl mx-auto ">
          <div className="px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-semibold mb-4 md:mb-0">
              <h1>
                Augment your team with <br />
                highly-skilled iOS Developers
              </h1>
            </div>
            <div>
              <button className="w-xs bg-white text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
                View Profiles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
