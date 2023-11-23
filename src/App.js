import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header projectName="emojipedia" />
      <div className="container">
        <Card />
      </div>
      <Footer brandname="Kaushik & Company" />
    </div>
  );
}

export default App;
