import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img src={props.data.imageUrl} className="card-img"/>
            </div>
            <div className="card-content">
                <div className="card-info">
                    <h4>{props.data.icao}</h4>
                    <a href={props.data.wikiUrl} target="_blank" className="card-location-link">Wikipedia</a>
                </div>
                <h2>{props.data.type}</h2>
                <p>{props.data.manufactur}</p>
                <p className="card-text">The {props.data.type} is {props.data.length} long and can carry up to {props.data.passengers} passengers over {props.data.range}. It's first commercial flight was made by {props.data.launchingCustomer} in {props.data.firstFlight}.</p>
            </div>
        </div>
    )
}