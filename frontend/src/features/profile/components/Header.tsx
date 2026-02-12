import { FaUserAltSlash , FaUser   } from "react-icons/fa";

function Logo() {
  return (
    <div className="text-2xl font-bold tracking-wide">
      <span className="text-white">Anything.</span>
      <span className="text-gray-200">AI</span>
    </div>
  );
}

function Header() {
  return (
    <header className="w-full h-16 shadow-sm border-b-2 flex items-center justify-between px-8">
      <Logo />
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-lg transition">
          <FaUserAltSlash  className="text-2xl text-gray-300" />
          <span className="text-sm font-medium text-gray-300 hidden sm:block">
            Logout
          </span>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-lg transition">
          <FaUser  className="text-1xl text-gray-300" />
          <span className="text-sm font-medium text-gray-300 hidden sm:block">
            My Account
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;
