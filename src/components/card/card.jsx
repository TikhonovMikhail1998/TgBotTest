import './card.css'

function Card() {
  
 
  

  return (
    <>
    <div className='container'>
     <img className='photo' src={window.Telegram.WebApp.initDataUsafe?.user?.photo_url}></img>
     <div className='block'>
      <div>Имя+ {window.Telegram.WebApp.initDataUsafe?.user?.first_name}</div>
      <div>Фамилия + {window.Telegram.WebApp.initDataUsafe?.user?.last_name}</div>
      <div>Никнейм + {window.Telegram.WebApp.initDataUsafe?.user?.username}</div>
      </div>
      </div>
     
    </>
  )
}

export default Card
