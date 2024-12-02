import './card.css'
const tele=window.Telegram.WebApp
  console.log(tele.initDataUnsafe)
  console.log(tele.initDataUnsafe.user)
function Card() {
  
 
  

  return (
    <>
    <div className='container'>
      <div>
        <div>Фото профиля:</div>
      <img className='photo' src={window.Telegram.WebApp.initDataUnsafe?.user?.photo_url}></img>
      </div>
     <div style={{width:'100%'}}></div>
     <div className='block1'>
      <div className='info'>Имя: {window.Telegram.WebApp.initDataUnsafe?.user?.first_name}</div>
      <div className='info'>Фамилия: {window.Telegram.WebApp.initDataUnsafe?.user?.last_name}</div>
      <div className='info'>Username: {window.Telegram.WebApp.initDataUnsafe?.user?.username}</div>
      </div>
      </div>
     
    </>
  )
}

export default Card
