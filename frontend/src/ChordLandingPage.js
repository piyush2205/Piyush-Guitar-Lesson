import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const songData = [
    {
        id: 1,
        title: 'Wonderwall',
        artist: 'Oasis',
        image: '/api/placeholder/300/200',
        chords: ['Em', 'G', 'D', 'A7sus4'],
        difficulty: 'Beginner'
    },
    {
        id: 2,
        title: 'Let Her Go',
        artist: 'Passenger',
        image: '/api/placeholder/300/200',
        chords: ['D', 'Bm', 'G', 'A'],
        difficulty: 'Easy'
    },
    {
        id: 3,
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        image: '/api/placeholder/300/200',
        chords: ['Am', 'C', 'G', 'D'],
        difficulty: 'Intermediate'
    },
    {
        id: 4,
        title: 'Perfect',
        artist: 'Ed Sheeran',
        image: '/api/placeholder/300/200',
        chords: ['G', 'Em', 'C', 'D'],
        difficulty: 'Beginner'
    }
];

const featureIcons = [
    {
        icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
        title: 'Learn Chords',
        description: 'Easy-to-follow chord diagrams for beginners and advanced players.'
    },
    {
        icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197',
        title: 'Community',
        description: 'Connect with other guitar enthusiasts and share your progress.'
    },
    {
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        title: 'Practice Tracks',
        description: 'Personalized practice sessions to improve your skills.'
    }
];

const ChordLandingPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const imageGallery = [
        { id: 1, src: 'https://images.freeimages.com/images/large-previews/360/guitar-1415372.jpg', alt: 'Guitarist playing' },
        { id: 2, src: 'https://images.freeimages.com/images/large-previews/360/guitar-1415372.jpg', alt: 'Guitar closeup' },
        { id: 3, src: 'https://images.freeimages.com/images/large-previews/360/guitar-1415372.jpg', alt: 'Music studio' },
        { id: 4, src: 'https://images.freeimages.com/images/large-previews/360/guitar-1415372.jpg', alt: 'Live performance' },
        { id: 5, src: 'https://images.freeimages.com/images/large-previews/360/guitar-1415372.jpg', alt: 'Acoustic session' },
        { id: 6, src: 'https://images.freeimages.com/images/large-previews/360/guitar-1415372.jpg', alt: 'Guitar workshop' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6">
                {/* Hero Section */}
                <section className="grid lg:grid-cols-2 gap-8 items-center py-8 sm:py-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-4 sm:mb-6">
                            Learn Guitar, Master Your Chords
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                            Discover easy chord tutorials, practice tracks, and connect with a community of guitar enthusiasts.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full sm:w-auto">
                                Start Learning
                            </button>
                            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-100 w-full sm:w-auto">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            src="/api/placeholder/600/400"
                            alt="Guitar Learning"
                            className="rounded-xl shadow-lg w-full"
                        />
                    </div>
                </section>

                {/* Songs Grid */}
                <section className="py-8 sm:py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-8 sm:mb-12">
                        Popular Songs to Learn
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {songData.map((song) => (
                            <div key={song.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                                <img
                                    src={song.image}
                                    alt={song.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg text-purple-800">{song.title}</h3>
                                    <p className="text-gray-600">{song.artist}</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                            {song.difficulty}
                                        </span>

                                        <button className="text-purple-600 hover:text-purple-800">
                                            View Chords
                                        </button>


                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8 sm:mt-12">
                        <Link to={"/AllChords"}>
                            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full sm:w-auto">
                                View More Songs
                            </button>
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-8 sm:py-16 bg-white rounded-xl shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-8 sm:mb-12">
                        Why Learn with Us
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
                        {featureIcons.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d={feature.icon}
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-8 sm:py-16 text-center bg-purple-700 text-white rounded-xl my-8 sm:my-16 px-4">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
                        Start Your Guitar Journey Today
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 sm:mb-8">
                        Join thousands of musicians learning and growing together.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <button className="bg-white text-purple-800 px-8 py-4 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                            Sign Up Free
                        </button>
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-purple-800 w-full sm:w-auto">
                            Learn More
                        </button>
                    </div>
                </section>

                {/* Image Gallery */}
                <section className="py-8 sm:py-16 bg-gray-50">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-8 sm:mb-12">
                        Our Community in Action
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {imageGallery.map((image) => (
                            <div
                                key={image.id}
                                className="overflow-hidden rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-48 sm:h-64 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white py-8 sm:py-12 border-t mt-8">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <p className="text-gray-600">
                        © 2024 Piyush Guitar Lesson. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Modal for selected image - making it responsive */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-4xl w-full max-h-[80vh]">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChordLandingPage;