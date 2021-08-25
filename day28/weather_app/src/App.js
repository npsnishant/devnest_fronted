import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'


const App = () => {

  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  console.log(placeData)

  const updatePlaceData = () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=b54f044d1b384cf8ae7123151212408&q=${place}`)
    .then(res => res.json())
    .then(data => {
      setPlaceData(data);
    })
  }

  return (
    <div className="main-container">
      <div className="inputs">
        <input className="search" type="text" placeholder="Enter city name"
        value={place} onChange={(e) => {
          setPlace(e.target.value);
        }}/>
        <button className="btn" type="submit" onClick={updatePlaceData}>Submit</button>
      </div>
      <div className="wrapper">
      <div className="container">
        {placeData.location?(
          <>
          <div className="left-container">
            <img src={placeData.current.condition.icon}></img>
            <div className="left">
              <div className="temp">{placeData.current.temp_c}°</div>
              <div className="mid">
              <div className="name">{placeData.location.name}</div>
              <div>{placeData.current.last_updated}</div>
              </div>
              <div className="text">{placeData.current.condition.text}</div>
            </div>
          </div>
          <div className="right-container">
          <div className="details">Weather Details</div>
          <hr className="line"/>
          <div className="cloudy">
            <div>Cloudy</div>
            <div >{placeData.current.cloud}</div>
          </div>
          <div className="humidity">
            <div>Humidity</div>
            <div>{placeData.current.humidity}</div>
          </div>
          <div className="wind">
            <div>Wind</div>
            <div>{placeData.current.wind_kph}</div>
          </div>
          <div className="precipition">
            <div>Precipition</div>
            <div>{placeData.current.precip_in}</div>
          </div>
          </div>
          </>
        ) : <h2>place not found</h2>}
      </div>
      </div>
    </div>
  )
}

export default App
