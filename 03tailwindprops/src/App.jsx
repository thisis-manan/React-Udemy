import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
      <h1 className='bg-red-500 text-black p-4 rounded-xl mb-4 flex items-center justify-center'>Tailwind & React</h1>
      <Card username="Itachi" btnText="click me" imglink="https://images.coolpfp.com/itachi-pfp-29.png"/>
      <Card username="Gojo" imglink="https://assets.gqindia.com/photos/69a9739d9507297de2a275fb/16:9/w_2240,c_limit/Daily-BW-for-March-6-(best-anime-to-watch).jpg
      " />
    </>
  )
}

export default App
