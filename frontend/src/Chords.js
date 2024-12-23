import React, { useState } from 'react';

const chordData = [
    { name: 'A Major', fingering: 'x02220', difficulty: 'Beginner' },
    { name: 'C Major', fingering: 'x32010', difficulty: 'Beginner' },
    { name: 'D Major', fingering: 'xx0232', difficulty: 'Beginner' },
    { name: 'E Major', fingering: '022100', difficulty: 'Beginner' },
    { name: 'G Major', fingering: '320003', difficulty: 'Beginner' }
];

const ChordPage = () => {
    const [selectedChord, setSelectedChord] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center p-6">
            <header className="text-center mb-8 animate-fade-in">
                <h1 className="text-4xl font-bold text-purple-800 mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    Guitar Chord Explorer
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Learn and practice guitar chords with easy-to-understand fingering diagrams
                </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
                <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
                    <h2 className="text-2xl font-semibold mb-4 text-purple-700">
                        {selectedChord ? selectedChord.name : 'Select a Chord'}
                    </h2>
                    {selectedChord ? (
                        <div className="animate-slide-in">
                            <div className="text-gray-600 mb-4">
                                <p>Fingering: {selectedChord.fingering}</p>
                                <p>Difficulty: {selectedChord.difficulty}</p>
                            </div>
                            <div className="guitar-neck w-full h-48 bg-gray-100 rounded flex items-center justify-center">
                                <span className="text-gray-400">Chord Diagram Placeholder</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 py-12">
                            Click a chord to see details
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    {chordData.map((chord) => (
                        <button
                            key={chord.name}
                            onClick={() => setSelectedChord(chord)}
                            className={`w-full p-3 rounded-lg text-left transition-all duration-300 
                ${selectedChord?.name === chord.name
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-white hover:bg-purple-100 text-gray-800'}
                shadow-md hover:shadow-lg`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{chord.name}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChordPage;