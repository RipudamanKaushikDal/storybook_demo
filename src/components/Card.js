import React from "react";
import "./Card.css";

function Card({Title,Clicked,ImageUri}) {

    return (
        <div className="card" style={{backgroundImage:`url(${ImageUri})`}} onClick={Clicked}>
            <h1>{Title}</h1>
        </div>
    )
}

export default Card