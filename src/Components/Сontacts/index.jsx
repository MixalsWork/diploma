import style from './index.module.css'
import instagram from './images/instagram.svg'
import telegram from './images/telegram.svg'
import email from './images/email.svg'

function Contacts() {
  return (
    <div className={style.ourContacts} id='contacts'>
      {<hr className={style.line}/>}
      {<div>
          <img className={style.ourContactsImg} src="https://i.imgur.com/NUfVXB4.png" alt="#"/>
      </div>}
      {<div className={style.ourContactsBlocks}>
          {/* <div className={style.ourContactsMenu}>
            <ul>
              <li><a href="https://imgur.com/vesbjrt">Главная</a></li>
              <li><a href="https://imgur.com/vesbjrt">Каталог</a></li>
              <li><a href="https://imgur.com/vesbjrt">Регистрация</a></li>
              <li><a href="https://imgur.com/vesbjrt">Обо мне</a></li>
              <li><a href="https://imgur.com/vesbjrt">Контакты</a></li>
            </ul>
          </div> */}
          <div className={style.ourContactsNetworks}>
            <ul>
              <li className={style.listNetworks}>
                <div className={style.menu}>
                  <a className={style.linkNetworks} href="https://instagram.com/yulia.batkalova?igshid=17gg39hhghl8t">
                  <img src={instagram} alt="https://instagram.com/yulia.batkalova?igshid=17gg39hhghl8t"/> &#160; @yulia.batkalova
                  </a>
                </div>
              </li>
              <li className={style.listNetworks}>
                <div className={style.menu}>
                  <a className={style.linkNetworks} href="https://t.me/BatkalovaFinance"> <img src={telegram} alt="https://t.me/BatkalovaFinance"/> &#160; Batkalova.Finance</a>
                </div>
                </li>
              <li className={style.listNetworks}>
                <div className={style.menu}>
                  <a className={style.linkNetworks} href="yulia.batkalova@gmail.com"> <img src={email} alt="yulia.batkalova@gmail.com"/> &#160; yulia.batkalova@gmail.com</a>
                </div>
                </li>
            </ul>
          </div>
      </div>}
    </div>
  );
}

export default Contacts;
