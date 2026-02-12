interface GreetingProps {
  username: string;
}

function Greeting({ username }: GreetingProps) {
  return (
    <div className="flex flex-col px-6">
      <h2 className="text-3xl font-semibold text-gray-400 mb-4">
        Welcome back, <span className="text-white">{username}</span> 👋
      </h2>
      <p className="text-gray-500 text-md mt-1">
        Here’s what’s happening with your tasks today.
      </p>
    </div>
  );
}

export default Greeting;
