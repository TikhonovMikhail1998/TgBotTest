import { useEffect } from 'react'
import './App.css'
import Header from './components/header/header';
import Card from './components/card/card';

const tele=window.Telegram.WebApp
  console.log(tele.initDataUnsafe)
  console.log(tele.initDataUnsafe.user)

function App() {
  
  useEffect(()=>{
    tele.ready();
  })
 

  return (
    <>
    <div>
      <Header></Header>
      <Card></Card>
      </div>
    </>
  )
}

export default App
