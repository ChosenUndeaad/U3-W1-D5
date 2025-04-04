import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className='bg-dark text-light min-vh-100'>
        <MyNavbar />

        <Footer />
      </div>
    </>
  );
}

export default App;
