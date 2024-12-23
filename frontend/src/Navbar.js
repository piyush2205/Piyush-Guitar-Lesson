// src/Navbar.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [selectedSong, setSelectedSong] = useState(null);
    // const [selectedImage, setSelectedImage] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (

        <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-4 sm:px-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    {/* <button
                       onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                       className="mr-4 text-gray-600 hover:text-purple-600 lg:hidden"
                   >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                       </svg>
                   </button> */}
                    <div className="text-xl sm:text-2xl font-bold text-purple-800">
                        Piyush Guitar Lesson
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 hover:text-purple-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-4 items-center">
                    <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>
                    <a href="#" className="text-gray-700 hover:text-purple-600">Songs</a>
                    <a href="#" className="text-gray-700 hover:text-purple-600">Chords</a>
                    <Link to={"/signup"}>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4`}>
                <div className="flex flex-col space-y-4">
                    <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
                    <a href="#" className="text-gray-700 hover:text-purple-600">Songs</a>
                    {/* <Link to={"/chords"}>
                       Chords
                   </Link> */}
                    <a href="#" className="text-gray-700 hover:text-purple-600">Chords</a>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
