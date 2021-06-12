import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import React from "react";
import Footer from "./components/footer";



function App()  {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </React.Fragment>
  );
}


export default App;