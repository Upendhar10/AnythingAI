import { useForm } from "react-hook-form"
import FormContainer from "./FormContainer"
import FormInput from "./FormInput"

export type LoginFormValues = {
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit: (data: LoginFormValues) => void
  isLoading?: boolean
  serverError?: string
} 

export default function LoginForm({
  onSubmit,
  isLoading,
  serverError,
}: LoginFormProps) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  return (
    <FormContainer
      title="Welcome back"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-sm text-gray-500 text-center font-medium">Enter your credentials below to login to your account</p>
      <FormInput
        type="email"
        label="Email"
        placeholder="Mike.tyson@yahoo.com"
        registration={register("email", {
          required: "Email is required",
        })}
        error={errors.email}
      />

      <FormInput
        type="password"
        label="Password"
        placeholder="* * * * * * * *"
        registration={register("password", {
          required: "Password is required",
        })}
        error={errors.password}
      />

      {serverError && (
        <p className="text-red-500 text-sm text-center">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-500 py-2 rounded cursor-pointer font-semibold hover:bg-gray-400 hover:transition-all"
      >
        {isLoading ? "Please wait..." : "Login"}
      </button>
      <p className="text-sm">Don't have an account ? <a href="#" className="hover:text-blue-500">Register Now</a></p>
    </FormContainer>
  )
}
