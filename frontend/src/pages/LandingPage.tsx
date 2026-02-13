import Branding from "../features/auth/components/Branding";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-1.5">
      <Branding />

      <Link
        to="/login"
        className="py-6 text-3xl hover:text-white text-gray-500 cursor-pointer"
      >
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
}

export default LandingPage;
