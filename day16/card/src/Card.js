import React from 'react'
import image from './image.jpg';

const Card = () => {
    return (
        <div className="wrapper">
            <h1 className="card-template">Card Template</h1>
            <div className="card-container">
                <div className="imgs">
                    <img src={image} alt="img"/>
                </div>
                <h1 className="text">React Card</h1>
                <p className="para">Meme card</p>
            </div>
        </div>
    )
}

export default Card
