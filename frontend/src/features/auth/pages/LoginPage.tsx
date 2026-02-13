import LoginForm from "../components/LoginForm"
import type { LoginFormValues } from "../components/LoginForm"

import { useAppDispatch } from "../../../app/hooks"
import {loginUserThunk} from "../authThunks"
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  async function handleLogin(data: LoginFormValues) {
    try {
      await dispatch(
        loginUserThunk({ email: data.email, password: data.password })
      ).unwrap()

      navigate('/dashboard')
    } catch (error : any) {
      alert(`Login Failed!, ${error}`)
      // console.error("Login failed:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-evenly px-2">
      
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center md:gap-12">

        <div className="w-full max-w-md">
          <LoginForm onSubmit={handleLogin} />
        </div>

      </div>
    </div>
  )
}

export default LoginPage
