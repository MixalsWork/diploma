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
          <div className={style.ourContactsNetworks}>
            <ul>
              <li className={style.listNetworks}>
                <div className={style.menu}>
                  <a className={style.linkNetworks} href="https://instagram.com/yulia.batkalova?igshid=17gg39hhghl8t">
                  <img src={instagram} alt="@yulia.batkalova"/> @yulia.batkalova
                  </a>
                </div>
              </li>
              <li className={style.listNetworks}>
                <div className={style.menu}>
                  <a className={style.linkNetworks} href="https://t.me/BatkalovaFinance"> <img src={telegram} alt="Batkalova.Finance"/> Batkalova.Finance</a>
                </div>
                </li>
              <li className={style.listNetworks}>
                <div className={style.menu}>
                  <a className={style.linkNetworks} href="mailto:yulia.batkalova@gmail.com"> <img src={email} alt="yulia.batkalova@gmail.com"/> yulia.batkalova@gmail.com</a>
                </div>
                </li>
            </ul>
          </div>
      </div>}
    </div>
  );
}

export default Contacts;
