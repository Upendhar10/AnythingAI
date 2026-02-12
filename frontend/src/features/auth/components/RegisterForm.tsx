import { useForm } from "react-hook-form"
import FormContainer from "./FormContainer"
import FormInput from "./FormInput"

export type RegisterFormValues = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

type RegisterFormProps = {
  onSubmit: (data: RegisterFormValues) => void
  isLoading?: boolean
  serverError?: string
}

export default function RegisterForm({
  onSubmit,
  isLoading,
  serverError,
}: RegisterFormProps) {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>()

  const password = watch("password")

  return (
    <FormContainer
      title="Create your account"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-sm text-gray-500 text-center font-medium">Fill in the form below to create your account</p>
      <FormInput
        type="text"
        label="Full Name"
        placeholder="Mike Tyson"
        registration={register("fullName", {
          required: "Full name is required",
        })}
        error={errors.fullName}
      />

      <FormInput
        type="email"
        label="Email"
        placeholder="mike.tyson@yahoo.com"
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

      <FormInput
        type="password"
        label="Confirm Password"
        placeholder="* * * * * * * * "
        registration={register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
        error={errors.confirmPassword}
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
        {isLoading ? "Please wait..." : "Register"}
      </button>
      <p className="text-sm">Already have an account ? <a href="#" className="hover:text-blue-500">Login Now</a></p>
    </FormContainer>
  )
}
