import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import emojis from "./emojis.json";
function App() {
  return (
    <div>
      <Header projectName="emojipedia" />
      <div className="container">
        {emojis.map((emoji, index) => {
          return <Card key={index} icon={emoji.symbol} iconName={emoji.title} iconDescription={emoji.keywords} />;
        })}
      </div>
      <Footer brandname=<a href="https://github.com/ankitkaushikx">ankitkaushikx</a> />
    </div>
  );
}

export default App;
