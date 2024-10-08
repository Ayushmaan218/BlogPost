import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isSignedIn }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handlePostClick = (e) => {
        if (!isSignedIn) {
            e.preventDefault(); // Prevent the default link behavior
            alert("You are not signed in! Please sign up to create a post.");
            navigate('/signup');
        }
    };

    return (
        <nav className="w-full bg-white bg-opacity-70 drop-shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center text-black py-4 px-8 md:px-32">
                <Link to="/blogs" className="hidden xl:flex items-center font-semibold text-base">
                    <img src="#" alt="" className='w-10 hover:scale-105 transition-all' />
                    <h2 className="hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">BlogPost</h2>
                </Link>
                <nav>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link
                                to='/blogs'
                                className={`px-4 py-2 ${location.pathname === '/blogs' ? 'bg-blue-600 text-white' : 'text-blue-800'}`}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/post'
                                className={`px-4 py-2 ${location.pathname === '/post' ? 'bg-blue-600 text-white' : 'text-blue-800'}`}
                                onClick={handlePostClick}
                            >
                                Post
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/about'
                                className={`px-4 py-2 ${location.pathname === '/about' ? 'bg-blue-600 text-white' : 'text-blue-800'}`}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ul className='flex'>
                    <li>
                        <Link
                            to='/signup'
                            className={`px-4 py-2 ${location.pathname === '/signup' ? 'bg-blue-600 text-white' : 'text-blue-800'}`}
                        >
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/signin'
                            className={`px-4 py-2 ${location.pathname === '/signin' ? 'bg-blue-600 text-white' : 'text-blue-800'}`}
                        >
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
