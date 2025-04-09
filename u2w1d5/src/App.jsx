import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import MyNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import StarWarsRow from "./Components/StarWarsRow";
import LotrMovies from "./Components/LotrRow";
import ScreamMovies from "./Components/ScreamRow";
import MyUser from "./Components/User";
import MySettings from "./Settings";
import TvShows from "./Components/TvShows";

function App() {
  return (
    <div className='bg-dark text-light min-vh-100'>
      <MyNavbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <StarWarsRow />
              <LotrMovies />
              <ScreamMovies />
            </>
          }
        />

        <Route path='/user' element={<MyUser />} />
        <Route path='/settings' element={<MySettings />} />
        <Route path='/tv-shows' element={<TvShows />} />

        <Route
          path='*'
          element={<p className='text-center'>404 - Pagina non trovata</p>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
