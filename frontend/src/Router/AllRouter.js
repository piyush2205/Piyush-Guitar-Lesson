import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ChordLandingPage from '../ChordLandingPage';
import ChordPage from '../Chords';
import SignUpPage from '../Signup';
import LoginPage from '../Login';
import PopularSong from '../PopularSong';
import Navbar from '../Navbar';
import Footer from '../Footer';

function AllRouter() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<ChordLandingPage />} />
                <Route path="/chords" element={<ChordPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                {/* <Route path='/forgot-password' element={<div>Forgot Password</div>} /> */}
                <Route path='/AllChords' element={<PopularSong />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
            <Footer />
        </>

    );
}

export default AllRouter;
