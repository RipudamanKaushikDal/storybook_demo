import React from 'react';
import Card from './Card';
import "./Shelf.css"


const Shelf = ({details,joke,Clicked}) => {

 
    console.log(Clicked)

    return (
        <>
        <div className="card_shelf" onClick={Clicked}>
            {details.map((detail) => (
                <Card Title={detail.Title} ImageUri={detail.ImageUri} />
            ))}
        </div>
        {Clicked && <h1 style={{color:'white'}}>{joke.setup} <br/> {joke.punchline}</h1>}
        </>
    )
}

export default Shelf
