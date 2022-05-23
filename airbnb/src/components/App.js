import React from "react"
import Header from "./Header"
import Hero from "./Hero"
import Card from "./Card"
// import zaferes from "./zaferes.png"
import data from "./data"
// import wedding from "./wedding.png"
// import bike from "./bike.png"


export default function App() {
    const cards = data.map(card => {
        return <Card 
                key={card.id}
                card={card} img={card.coverImg} 
                tag={card.location}
                rating={card.stats.rating}
                ratingNo={card.stats.reviewCount}
                title={card.title}
                price={card.price}/>
    })
    return (
        <div className="wrapper">
            <Header />
            <Hero />
            <div className="allCards">
                {cards}
            </div>
        </div>
    )
}