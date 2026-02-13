import RegisterForm from "../components/RegisterForm";
import type { RegisterFormValues } from "../components/RegisterForm";

import { useAppDispatch } from "../../../app/hooks"
import {registerUserThunk} from "../authThunks"
import { useNavigate } from "react-router-dom";

function RegisterPage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  function handleRegistration(data : RegisterFormValues){
    console.log(data);
    dispatch(registerUserThunk({
      fullName : data.fullName,
      email : data.email,
      password : data.password
    }))
    .unwrap()
    .then(() => {
      alert("Registration Successful, Please Login")
      navigate("/login");
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-evenly px-2">
      
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center md:gap-12">

      <div className="w-full max-w-md">
        <RegisterForm onSubmit={handleRegistration} />
      </div>

      </div>
    </div>
  )
}

export default RegisterPage