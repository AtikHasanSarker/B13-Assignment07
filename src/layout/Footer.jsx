import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-success-content text-white pt-20 pb-8">
      <div className="max-w-285 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold">KeenKeeper</h1>

        <p className="mt-4 text-gray-200">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mt-6">
          <p className="text-xl font-medium mb-4">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
              <PiInstagramLogoFill size={20} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF size={20} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
              <FaXTwitter size={20} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p className="mb-2 md:mb-0">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a className="hover:text-white transition">Privacy Policy</a>
            <a className="hover:text-white transition">Terms of Service</a>
            <a className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
