import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-4xl ml-18 px-6 grid md:grid-cols-4 gap-2">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Talrn</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                View iOS Profiles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Discover
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Vendor</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Apply As Vendor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Vendor Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Get Verified
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Remote Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Resources
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t-4 border-gray-700 mt-12 pt-6 mb-18 text-sm flex flex-col md:flex-row justify-between items-center px-6">
        <p>
          © 2022 - 2025 <span className="text-white font-semibold">Talrn</span>{" "}
          - Labor Omnia Vincit ⚡ by{" "}
          <a href="#" className="text-blue-500 hover:underline">
            CG Advantage
          </a>
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
