import { Link } from "react-router-dom";

function Nav({ className }) {
  return (
    <nav className={className}>
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide text-yellow-300"
      >
        TodoFlow
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-yellow-300 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/feed"
          className="hover:text-yellow-300 transition duration-300"
        >
          Feed
        </Link>

        <Link
          to="/register"
          className="hover:text-yellow-300 transition duration-300"
        >
          Register
        </Link>

       
      </div>
    </nav>
  );
}

export default Nav;