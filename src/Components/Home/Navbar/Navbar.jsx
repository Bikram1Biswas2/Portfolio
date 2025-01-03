import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-teal-400 font-semibold"
                            : "text-gray-300 hover:text-teal-400 transition duration-300"
                    }
                >
                    Home
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-teal-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-800 rounded-lg mt-3 w-52 p-2 shadow-lg"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-extrabold text-teal-400">
                        BB
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="/public/My Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-gradient-to-r from-teal-400 to-teal-600 text-black hover:from-teal-500 hover:to-teal-700 transition shadow-lg"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
