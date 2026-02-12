import type { FieldError } from "react-hook-form"
import type {UseFormRegisterReturn} from "react-hook-form"

type FormInputProps = {
  type: string
  label : string
  placeholder: string
  registration: UseFormRegisterReturn
  error?: FieldError
}

export default function FormInput({
  type,
  label,
  placeholder,
  registration,
  error,
}: FormInputProps) {
  return (
    <div>
      <label className="w-full font-normal">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className="w-full border p-2 rounded mt-2"
      />
      {error && (
        <p className="text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </div>
  )
}
