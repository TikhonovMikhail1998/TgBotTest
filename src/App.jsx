import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const tele=window.Telegram.WebApp

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  useEffect(()=>{
    tele.ready();
  })
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount1((count1) => {count1=tele.initDataUnsafe;console.log(tele.initData)})}>
          count is {count1}
        </button>
        <button onClick={() => {console.log(tele)}}>
          count is {count}
        </button>
        <p>
          Edit <code>1232src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
