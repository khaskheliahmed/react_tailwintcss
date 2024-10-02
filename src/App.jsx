import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './compounts/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 p-5 rounded-3xl '>Tailwind Test</h1>

     <div className='text-center m-2 flex p-2 '>
     <img className='pr-20' src="https://th.bing.com/th?id=OIP.f4leNJZgvH7Qphjkyxrj4AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
    
     <img  className='pr-10' src="https://th.bing.com/th?id=OIP.f4leNJZgvH7Qphjkyxrj4AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
     <img  className='pr-10' src="https://th.bing.com/th?id=OIP.f4leNJZgvH7Qphjkyxrj4AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
     


     </div>



     <div className='text-center m-2 flex p-2  '>
     <img className='pr-20' src="https://th.bing.com/th?id=OIP.f4leNJZgvH7Qphjkyxrj4AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
    
     <img  className='pr-10' src="https://th.bing.com/th?id=OIP.f4leNJZgvH7Qphjkyxrj4AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
     <img  className='pr-10' src="https://th.bing.com/th?id=OIP.f4leNJZgvH7Qphjkyxrj4AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" />
     


     </div>

     
<card/>

    </>
  )
}

export default App
