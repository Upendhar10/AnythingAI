type FormContainerProps = {
  title: string
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

export default function FormContainer({
  title,
  onSubmit,
  children,
}: FormContainerProps) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 ">
      <h2 className="text-2xl font-bold mb-3 text-center">
        {title}
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        {children}
      </form>
    </div>
  )
}
