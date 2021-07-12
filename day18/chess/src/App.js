import React from 'react'
import Count from './Count'
import './style.css'

const App = () => {
const color1 = "black";
const color2 = "white";

  return (
    <div className="app-container">
      <Count color1={color1} color2={color2}/>
      <Count color1={color1} color2={color2}/>
      <Count color1={color1} color2={color2}/>
      <Count color1={color1} color2={color2}/>
      <Count color1={color1} color2={color2}/>
      <Count color1={color1} color2={color2}/>
      <Count color1={color1} color2={color2}/>
      <Count color1={color1} color2={color2}/>
    </div>
  )
}

export default App
