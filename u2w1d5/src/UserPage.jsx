import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MyUser from "./Components/User";

function App() {
  return (
    <>
      <div className='bg-dark text-light min-vh-100'>
        <MyNavbar />
        <MyUser />
        <Footer />
      </div>
    </>
  );
}

export default App;
