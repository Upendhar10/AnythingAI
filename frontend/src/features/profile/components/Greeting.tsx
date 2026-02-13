interface GreetingProps {
  name: string | undefined;
}

function Greeting({name}: GreetingProps) {

  return (
    <div className="flex flex-col px-6">
      <h2 className="text-2xl font-semibold text-gray-400 mb-2">
        Welcome back, <span className="text-white">{name}</span> 👋
      </h2>
      <p className="text-gray-500 text-md mt-1">
        Here’s what’s happening with your tasks today.
      </p>
    </div>
  );
}

export default Greeting;
