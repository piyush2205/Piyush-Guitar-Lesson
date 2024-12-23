import React from 'react';

const songData = [
    {
        id: 1,
        image: 'path/to/image1.jpg',
        title: 'Song Title 1',
        artist: 'Artist 1',
        difficulty: 'Easy',
    },
    {
        id: 2,
        image: 'path/to/image2.jpg',
        title: 'Song Title 2',
        artist: 'Artist 2',
        difficulty: 'Medium',
    },
    // Add more song data as needed
];

const PopularSong = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6">

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
                {/* <div className="text-center mt-8 sm:mt-12">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full sm:w-auto">
                    View More Songs
                </button>
            </div> */}
            </section>

        </main>

    );
};

export default PopularSong;