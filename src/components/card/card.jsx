import './card.css'
const tele=window.Telegram.WebApp
  console.log(tele.initDataUnsafe)
  console.log(tele.initDataUnsafe.user)
function Card() {
  
 
  

  return (
    <>
    <div className='container'>
     <img className='photo' src={window.Telegram.WebApp.initDataUnsafe?.user?.photo_url}></img>
     <div className='block'>
      <div>Имя+ {window.Telegram.WebApp.initDataUnsafe?.user?.first_name}</div>
      <div>Фамилия + {window.Telegram.WebApp.initDataUnsafe?.user?.last_name}</div>
      <div>Никнейм + {window.Telegram.WebApp.initDataUnsafe?.user?.username}</div>
      </div>
      </div>
     
    </>
  )
}

export default Card
