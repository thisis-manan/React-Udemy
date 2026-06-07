import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addVAlue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>React course {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addVAlue}>Add Value</button> {" "}
    <button onClick= {removeValue}>Remove Value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
