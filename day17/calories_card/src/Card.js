import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div className="wrapper-card">
            <div className="Card-container">
                <div className="card-card">
                    <h2 className="card-head">{props.recipie}</h2>
                    <p className="card-para">{props.calories}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
