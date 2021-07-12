import React from 'react'
import Counter from './Counter'

const App = () => {
  return (
    <div>
      <h1>There are 4 counter component instances that each manage their own state.</h1>
      <Counter/>
    </div>
  )
}

export default App
