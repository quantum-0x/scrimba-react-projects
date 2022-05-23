import React from "react";
import pin from "../images/pin.svg"

export default function Locations(props) {
    return (
        <div className="locationCard">
          <div className="locationBox">
            <img src={props.card.imageUrl} alt="fuji" />
              <div className="locationDetails">
                <div className="locationCountry">
                    <div className="location">
                      <img src={pin} alt="pin" />
                      <p>{props.card.location}</p>
                    </div>
                    <p className="view"><a href={props.card.googleMapsUrl}>view on Google Maps</a></p>
                </div>
                <h1 className="heading">{props.card.title}</h1>
                <p className="date">{props.card.startDate} - {props.card.endDate}</p>
                <p className="description">{props.card.description}</p>
            </div>
          </div>
        </div>
    )
}