import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import React from "react";




function App()  {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
      </div>
    </React.Fragment>
  );
}


export default App;