import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map(card => {
    return (
      <Card 
        key={card.googleMapsUrl}
        {...card}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="cards--list">
        {cards}
      </div>
    </div>
  );
}

export default App;