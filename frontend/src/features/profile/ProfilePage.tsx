import { useAppSelector } from "../../app/hooks";
import { FaArrowLeft  } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProfilePage() {

  const user = useAppSelector((state) => state.auth.user)
  
  return (
    <div className="min-h-screen flex justify-center items-start pt-12 px-4">
      <div className="w-full max-w-xl shadow-lg rounded-2xl p-8">

        <div className="flex justify-between items-center mb-6">
          <Link to={'/dashboard'}>
            <FaArrowLeft />
          </Link>
          <h2 className="text-2xl font-bold text-white-800">
            My Profile
          </h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-md font-medium text-white mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={user?.fullName}
              disabled
              className= {`w-full border bg-black text-white rounded-lg px-4 py-2 transition `}
            />
          </div>

          <div>
            <label className="block text-md font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              className="w-full border bg-black rounded-lg px-4 py-2 text-white cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              value="********"
              disabled
              className="w-full border rounded-lg px-4 py-2 bg-black text-white cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
