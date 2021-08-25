import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { name } from './actions';
import { email } from './actions';
import './style.css'

const App = () => {
  const dispatch = useDispatch();
  const newName=useSelector((state)=>state.name);
  const newEmail=useSelector((state)=>state.email);
  console.log(newEmail);
  console.log(newName)

  return (
    <div className="container">
      <h2>Input</h2>
      <form>
        <input type="text" placeholder="Name" className="name"
        onChange={(e) => {
            dispatch(name(e.target.value))
        }}/>
        <input type="email" placeholder="Email" className="email"
        onChange={(e) => {
          dispatch(email(e.target.value))
      }}/>
      </form>

      <div className="data-container">
        <h2>Data</h2>
        <label className="name_lab"> Username: {newName}</label><br/>
        <label className="email_lab"> Email: {newEmail}</label>
      </div>
    </div>
  )
}

export default App
