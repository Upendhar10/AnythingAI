import { FaUserAltSlash , FaUser   } from "react-icons/fa";
import { useAppDispatch } from "../../../app/hooks";

import { useNavigate, Link } from "react-router-dom";

function Logo() {
  return (
    <div className="text-2xl font-bold tracking-wide">
      <span className="text-white">Anything.</span>
      <span className="text-gray-200">AI</span>
    </div>
  );
}

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  function handleLogout(){
    dispatch({ type: "auth/logout" });
    navigate('/login')
  }

  return (
    <header className="w-full h-16 shadow-sm border-b-2 flex items-center justify-between px-8">
      <Logo />
      <div className="flex items-center gap-3 cursor-pointer">
        <div onClick={handleLogout}
        className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-lg transition">
          <FaUserAltSlash  className="text-2xl text-gray-300" />
          <span className="text-sm font-medium text-gray-300 hidden sm:block">
            Logout
          </span>
        </div>
        <Link to="/profile"
          className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-lg transition">
          <FaUser  className="text-1xl text-gray-300" />
          <span className="text-sm font-medium text-gray-300 hidden sm:block">
            My Account
          </span>
        </Link>

      </div>
    </header>
  );
}

export default Header;
