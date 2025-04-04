import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import StarWarsRow from "./Components/StarWarsRow";
import LotrMovies from "./Components/LotrRow";
import ScreamMovies from "./Components/ScreamRow";

function App() {
  return (
    <>
      <div className='bg-dark text-light min-vh-100'>
        <Navbar />
        <StarWarsRow />
        <LotrMovies />
        <ScreamMovies />
        <Footer />
      </div>
    </>
  );
}

export default App;
