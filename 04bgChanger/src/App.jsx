import { useState } from 'react'
import './App.css'

function App() {
 const [color , setColor] = useState('#8E9492')

  return (
    <>
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <buttton 
        onClick={() => setColor('red')}
        className= "outline-none px-4 py-1 rounded-full text-black shadow-lg "
        style={{backgroundColor: 'red'}}
        >
          Red
        </buttton>
        <buttton 
        onClick={() => setColor('blue')}
        className= "outline-none px-4 py-1 rounded-full text-black shadow-lg "
        style={{backgroundColor: 'blue'}}>
          Blue
        </buttton>
        <buttton 
        onClick={() => setColor('green')}
        className= "outline-none px-4 py-1 rounded-full text-black shadow-lg "
        style={{backgroundColor: 'green'}}>
          Green
        </buttton>

      </div>
    </div>
    </div>
    </>
  )
}

export default App
