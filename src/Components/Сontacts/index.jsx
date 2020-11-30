import style from './index.module.css'

function Contacts() {
  return (
    <div className={style.ourContacts}>
      {<hr/>}
      {<div>
          <img className={style.ourContactsImg} src="https://i.imgur.com/NUfVXB4.png" alt="#"/>
      </div>}
      {<div className={style.ourContactsBlocks}>
          <div className={style.ourContactsMenu}>
            <ul>
              <li><a href="https://imgur.com/vesbjrt">Главная</a></li>
              <li><a href="https://imgur.com/vesbjrt">Каталог</a></li>
              <li><a href="https://imgur.com/vesbjrt">Регистрация</a></li>
              <li><a href="https://imgur.com/vesbjrt">Обо мне</a></li>
              <li><a href="https://imgur.com/vesbjrt">Контакты</a></li>
            </ul>
          </div>
          <div className={style.ourContactsNetworks}>
            <ul>
              <li>
                <div>
                  <a href="https://imgur.com/vesbjrt">
                  <img src="https://i.imgur.com/IdmIXmw.png" alt="#"/>  www.instagram.com/marafon</a>
                </div>
              </li>
              <li><div>
                  <a href="https://imgur.com/vesbjrt"> <img src="https://i.imgur.com/zQMZlXh.png" alt="#"/> www.telegram.org/marafon</a>
                </div></li>
              <li><div>
                  <a href="https://imgur.com/vesbjrt"> <img src="https://i.imgur.com/6B7KHXP.png" alt="#"/> marafon@example.com</a>
                </div></li>
            </ul>
          </div>
      </div>}
    </div>
  );
}

export default Contacts;
