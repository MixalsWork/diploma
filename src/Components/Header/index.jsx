import style from './index.module.css'
import instagram from './img/Instagram.svg'
import telegram from './img/Telegram.svg'
import mouse from './img/mouse.svg'
import { Link } from "react-scroll";

function Header() {
    return (
        <div className={style.components} id="header">
            <header className={style.header}>
                <div className={style.author}>
                    <div className={style.authorName}>
                        ЮЛИЯ <br/>
                        БАТКАЛОВА
                    </div>
                    <div className={style.authorJob}>
                        Тренер <br/>
                        Автор и спикер
                    </div>
                </div>
                <nav className={style.nav}>
                    <ol className={style.navList}>
                    <Link activeClass="active"
                        className={style.link}
                        to="header"
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                        <li className={style.navItem}>Главная</li>
                    </Link>
                    <Link activeClass="active"
                        className={style.link}
                        to="gallery"
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                        <li className={style.navItem}>Каталог</li>
                    </Link>
                    <Link activeClass="active"
                        className={style.link}
                        to="registration"
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                        <li className={style.navItem}>Регистрация</li>
                    </Link>
                    <Link activeClass="active"
                        className={style.link}
                        to="about"
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                        <li className={style.navItem}>Обо мне</li>
                    </Link>
                    <Link activeClass="active"
                        className={style.link}
                        to="contacts"
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                        <li className={style.navItem}>Контакты</li>
                    </Link>
                    </ol>
                </nav>
            </header>
            <div className={style.content}>
                <sidebar className={style.sidebar}>
                    <div className={style.sidebarText}>
                        Follow us
                    </div>
                    <div className={style.sidebarSocial}>
                        <a href="" className={style.sidebarSocialItem}><img src={instagram} alt="instagram"/></a>
                        <a href="" className={style.sidebarSocialItem}><img src={telegram} alt="telegram"/></a>
                    </div>
                </sidebar>
                <article className={style.article}>
                    <div className={style.articleAuthor}>
                        <span className={style.articleAuthorLine}></span>
                        <div className={style.articleAuthorName}>
                            ГЕНРИ ФОРД
                        </div>
                    </div>
                    <blockquote className={style.blockquote}>
                        <p>«Главная цель капитала - не добыть как можно больше денег, <br/>
                            а добиться того, чтобы деньги вели к улучшению жизни.»
                        </p>
                    </blockquote>
                </article>
            </div>
            <Link activeClass="active"
                        className={style.linkButton}
                        to="gallery"
                        smooth={true}
                        duration= {500}>
                        <button className={style.buttonDown}>
                            <img className={style.buttonDownImg} src={mouse} alt="mouse"/>
                        </button>
                    </Link>
            
        </div>
    );
  }
  
  export default Header;



