import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [timer ,settimer ] = useState(0) ; 

  return (
    <>
     <div className='flex justify-center flex-col items-center h-screen w-screen '>
      <div className='text-5xl font-bold p-8 '>
      Walkifyy
      </div>
      <div className='flex flex-col justify itme-center font-semibold text-2xl'>
        <div className='flex  '>

        <div>Set timer-</div>
        <div>

        <input type="number"  placeholder='Enter your time '/>
        </div>
        </div>
         <div className='bg-red-600 text-center rounded cursor-pointer select-text px-4 py-2 '>Start Remainder</div>
         <div className='text-center' mt-10px p-5 >Go For A walk </div>
         
      </div>
     </div>
    </>
  )
}

export default App
