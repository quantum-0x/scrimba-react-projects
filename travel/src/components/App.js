import React from "react";
import Header from "./Header";
import Locations from "./Locations";
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return <Locations 
                title={card.title}
                card={card}
                location={card.location} 
                googleMapsUrl={card.googleMapsUrl}
                startDate={card.startDate}
                endDate={card.endDate}
                description={card.description}
                imageUrl={card.imageUrl} />
    })
  return (
    <div className="wrapper">
        <Header />
        <div className="locations">
            {cards}
        </div>
    </div>
  );
}
