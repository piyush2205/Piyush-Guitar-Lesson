// import { useEffect } from 'react';

// import React, { useState } from 'react';
import './App.css';
// import Home from "./ChordLandingPage"
import AllRouter from './Router/AllRouter';

// const SongList = ({ songs, onSelectSong }) => {
//   return (
//     <ul className="song-list">
//       {songs.map((song, index) => (
//         <li key={index} onClick={() => onSelectSong(song)}>
//           {song.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const SongDisplay = ({ selectedSong }) => {
//   return (
//     <div className="song-display">
//       <h2>{selectedSong.title}</h2>
//       <div className="chords">{selectedSong.chords}</div>
//       <div className="lyrics">{selectedSong.lyrics}</div>
//     </div>
//   );
// };

// const songs = [

//   {
//     title: 'Hua Main',
//     chords: (
//       <pre>
//         {`
// Gm
// Chhua Toone
//              Cm
// Beh Gaya Main Heeriye
// D#
// Jo Ab Tak Kisi Ne
// F
// Kabhi Na Kiya

// Gm                 Cm
// Ishq Aisa Ishq Aisa Chahiye
// D#
// Aisi Deewanagi Se
//      F
// Main Chahun Tujhe
// Cm
// Jaise Pehli Dafa
// Cm
// Koyi Paagal Hua

// Gm           C        Gm    C
// Hua Main Hua Main, Hua Main
// Gm          C
// Dua Se Main Utha
//    Gm  D# C
// Jo Tera
// Gm           C   Gm         C
// Hua Main Hua Main Raanjhanaa

// [Verse 1]
// Gm
// Hua Main
// Gm
// Dekha Nahi Toone Abhi
// C
// Jaadu Hua Kya
// F
// Dono Jahan Jahan
//            Gm
// Jahan Gaye Thehar
// Gm
// Tere Badan Ki Roshani
//      C               F
// Mere Badan Mein Abhi Abhi
//                Gm
// Abhi Abhi Gayi Utar

// Gm
// Koyi Doori Nahi Baaki
// Cm
// Piya Re Ae..
// D#
// Be-khabar Hoke
//             F
// Baahon Mein Soja Meri
//    Cm
// Tu Hawa Aur Main
//                 Gm
// Tera Baadal Hua Hawa Mein

// [Chorus]
// C         Gm       C
// Hawa Mein Main Uda
// Gm     C
// Dua Se Main Utha
// Gm
// Jo Tera
// Gm           C    Gm         C
// Hua Main Hua Main Raanjhanaa
// Gm
// Hua Main
//       `}
//       </pre>
//     )
//   }, {
//     title: 'Phale bhi main',
//     chords: (
//       <pre>
//         {`
// [Intro]
// A#m  G#  D#m  Fm   x2

// [Verse]
// A#m                  G#
// Pehle Bhi Main Tumse Mila Hoon
// D#m                  Fm
// Pehli Dafa Hi Milke Laga
// A#m                   G#
// Toone Chhua Zakhmon Ko Mere
// D#m                  Fm
// Marham Marham Dil Pe Laga

// [Pre-Chorus]
// F#
// Paagal Paagal Hain Thode
// A#m
// Baadal Baadal Hain Dono
// F#                       Fm
// Khul Ke Barse Bheege Aa Zara

// [Chorus]
// A#m                  G#
// Pehle Bhi Main Tumse Mila Hoon
// D#m                 Fm
// Pehli Dafa Hi Milke Laga
// A#m                  G#
// Toone Chhua Zakhmon Ko Mere
// D#m                 Fm
// Marham Marham Dil Pe Laga

// [Interlude]
// A#m - G# - D#m - Fm
// ho ho ho ho

// [Bridge]
// A#m
// Ghalat Kya Sahi Kya
// G#
// Mujhe Na Pata Hai
// D#m
// Tumhein Agar Pata Ho
// Fm
// Bata Dena

// C#
// Main Arse Se Khud Se
// G#
// Zara Laapata Hoon
// D#m
// Tumhein Agar Milun Toh
// G#
// Pata Dena

// D#m
// Kho Na Jaana Mujhe
// Fm
// Dekhte Dekhte

// [Verse]
// A#m             G#
// Tu Hi Zariya
// D#m            Fm
// Tu Hi Manzil Hai
// A#m             G#
// Ya Ke Dil Hai
// D#m             Fm
// Itna Bata
// A#m              G#
// Toone Chhua Zakhmon Ko Mere
// D#m              Fm
// Marham Marham Dil Pe Laga

// [Pre-Chorus]
// F#
// Paagal Paagal Hain Thode
// A#m
// Baadal Baadal Hain Bheege
// F#                   Fm
// Barse Barse Bheege Aa Zara

// [Chorus]
// A#m                   G#
// Pehle Bhi Main Tumse Mila Hoon
// D#m                 Fm
// Pehli Dafa Hi Milke Laga
// A#m                   G#
// Toone Chhua Zakhmon Ko Mere
// D#m                 Fm
// Marham Marham Dil Pe Laga

// [Outro]
// A#m - G# - D#m - Fm
// ho ho ho ho

// `}
//       </pre>
//     )
//   }, {
//     title: 'Chaleya',
//     chords: (
//       <pre>
//         {`
//          Music
// Am   Dm
// Am   Dm
// Am
// Ishq Mein Dil Bana Hai
//               Dm
// Ishq Mein Dil Fanna Hai Ho
// Am
// Mita De Ya Bana De
//               Dm    
// Maine Tujhko Chuna 
// Em
// Hai  Ho Ho
//        F
// Tere Saare Rang Odh Ke 
// Dhang Odh Ke
// Em                         
// Tera Hua Main Sabko
//         Am    Em
//  Chhod Ke Ho Ho Ho
//              F                       
// Ishq Ni Karna Naap 
// Tol Ke Raaj Khol Ke
// Em                         
// Aaya Hoon Main
//              C
//  Sabko Bol Ke Ho
// Dm/G             Am
// Oh     Main Taan Chaleya 
// Teri Oar
// Em
// Tera Chaleya Hai Zor
//        F 
// Tera Hoya Main Yaar Ve
// Dm
// Bhuleya Ae Sansaar Ve
// Am
// Chaleya Teri Oar
// Em
// Tera Chaleya Hai Zor
//       F 
// Tera Hoya Main Yaar Ve
// Dm
// Bhuleya Ae Sansaar Ve
// Am9
// Jag Tere Liye Chhodiya
// Dil Tere Sang Jodiya
// Dm7
// Ab Tera Main Toh Ho Gaya
// Em7
// Paa Ke Tujhe Main Kho Gaya

// Am9
// Jag Tere Liye Chhodiya
// Dil Tere Sang Jodiya
// Dm7
// Ab Tera Main Toh Ho Gaya
// Em7
// Paa Ke Tujhe Main Kho Gaya
// Em7
// Kho Gaya Haan
// Am
// Ishq Mein Dil Bana Hai
// Em                    F  
// Ishq Mein Dil Fanna Hai Ho
// Dm Em
// Ho Ho Ho

// Am
// Hansa De Ya Rula De
// Em                    F  
// Maine Tujhko Chuna Hai Oh
// Dm    Em
// Oh Ho Ho
//               F   
// Duniya Kehti Ishq Bhool Hai Befizool Hai
// Em
// Humko Toh Dil Se
//            Am      Em
// Kubool Hai Oh Oh Ho Ho

//               F   
// Tujhme Dikhta Rabb Ka Noor Hai Ek Suroor Hai
// Em                        Dm
// Tu Hai Apna Yeh Guroor Hai Oh
// Em
// Oh Oh Ho


// Dm/G             Am
// Oh     Main Taan Chaleya Teri Oar
// Em
// Tera Chaleya Hai Zor
//         F 
// Tera Hoya Main Yaar Ve
// Dm
// Bhuleya Ae Sansaar Ve
// Am
// Chaleya Teri Oar
// Em
// Tera Chaleya Hai Zor
//       F 
// Tera Hoya Main Yaar Ve
// Dm
// Bhuleya Ae Sansaar Ve

//        Am7            G
// Ishq-E-Khwab Khwab Sa Hai
//      F7         G
// Mera Behisab Sa Hai
//      F            Em
// Tere Lavs Choomlu Main
//      Am          G
// Urdu Ki Kitab Sa Hai

//        Am7            G
// Ishq-E-Khwab Khwab Sa Hai
//      F7         G
// Mera Behisab Sa Hai
//      F           Em
// Tere Lavs Chumlu Main
//      Am          G
// Urdu Ki Kitab Sa Hai


// Am9
// Jag Tere Liye Chhodiya
// Ishq Mein Dil Fanna Hai
// Dil Tere Sang Jodiya
// Ishq Mein Dil Fanna Hai Ho Ho


// Dm7
// Ab Tera Main Toh Ho Gaya
// Paa Ke Tujhe Main Kho Gaya
// Jag Tere Liye Chhodiya
// Mita De Ya Bana De


// Em7
// Dil Tere Sang Jodiya
// Maine Tujhko Chuna Hai Ho Ho
// Paa Ke Tujhe Main Kho Gaya
// Kho Gaya Haan


//       `}
//       </pre>
//     )
//   },
//   // Add more songs as needed
// ];
const App = () => {
  // const [selectedSong, setSelectedSong] = useState(null);
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const selectedSongTitle = queryParams.get('song');
  //   const foundSong = songs.find((song) => song.title === selectedSongTitle);
  //   if (foundSong) {
  //     setSelectedSong(foundSong);
  //   }
  // }, []);



  // const handleSelectSong = (song) => {
  //   setSelectedSong(song);
  //   const queryParams = new URLSearchParams(window.location.search);
  //   queryParams.set('song', song.title);
  //   window.history.pushState(null, null, `?${queryParams.toString()}`);
  // };



  return (
    <>
      {/* <Home /> */}

      <AllRouter />
    </>

    // <div className="App">
    //   <div className="sidebar">
    //     <h1>Guitar Songs</h1>
    //     <SongList songs={songs} onSelectSong={handleSelectSong} />
    //   </div>
    //   <div className="main-content">
    //     {selectedSong ? (
    //       <SongDisplay selectedSong={selectedSong} />
    //     ) : (
    //       <p>Select a song from the list to view chords and lyrics.</p>
    //     )}
    //   </div>
    // </div>
  );
};

export default App;
