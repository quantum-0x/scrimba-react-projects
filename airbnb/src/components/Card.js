import React from "react"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="cardImage"><img src={props.card.coverImg} alt=""/>{props.card.location && <div className="cardTag">{props.card.location}</div>}</div>
            <div className="cardDetails">
                <div className="cardDetails--stars"><img src={star} alt="" /><p><span className="five">{props.card.stats.rating}</span> ({props.card.stats.reviewCount}) • </p><p>USA</p></div> 
                <p>{props.card.title}</p>
                <p><strong>From ${props.card.price} /</strong> person</p>
            </div>
        </div>
    )
}