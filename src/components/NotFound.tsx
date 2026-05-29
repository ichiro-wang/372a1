import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 h-full items-center justify-center">
      <h1 className="text-xl">Page Not Found</h1>
      <Link to="/notes" className="underline text-blue-500">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
