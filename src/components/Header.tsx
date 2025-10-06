export default function Header() {
  return (
    <>
      <header className=" bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-blue-500">Talrn</h1>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#why" className="hover:text-blue-600 py-2">
              Why
            </a>
            <a href="#industries" className="hover:text-blue-600 py-2">
              Industries <span></span>
            </a>
            <a href="#find" className="hover:text-blue-600 py-2">
              Find iOS Dev
            </a>
            <a href="/join" className="hover:text-blue-600 py-2">
              Apply as Vendor
            </a>
            <button className="bg-blue-600 text-white p-2 rounded-full font-semibold hover:bg-blue-700">
              Hire iOS Dev
            </button>
            <a href="/login" className="hover:text-blue-600 py-2">
              Login
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
