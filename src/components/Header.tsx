interface HeaderProps {
  bannerVisible?: boolean;
}

export default function Header({ bannerVisible = true }: HeaderProps) {
  return (
    <>
      <header className={`bg-white w-full z-40 fixed transition-all duration-300 ${bannerVisible ? 'top-16' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-blue-500">Talrn</h1>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#why" className="hover:text-blue-600 py-2">
              Why
            </a>
            <div className="relative group">
              <a href="#industries" className="hover:text-blue-600 py-2 flex items-center">
                Industries 
                <svg className="w-3 h-3 ml-1 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Dropdown Panel */}
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Travel</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Automotive</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Banking</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Capital Markets</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Healthcare</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600">Digital Commerce</a>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">View all</a>
                  </div>
                </div>
              </div>
            </div>
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
