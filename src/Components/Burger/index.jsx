import { slide as Menu } from 'react-burger-menu'
import React from "react"; 
import './index.css'
import { Link } from "react-scroll";

export default class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
        <Menu left pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link activeClass="active"
            to="header"
            smooth={true}
            offset={-10}
            duration= {500}>
            <a className="menu-item" href="">Главная</a>
          </Link>
          <Link activeClass="active"
            to="gallery"
            smooth={true}
            offset={-10}
            duration= {500}>
            <a className="menu-item" href="">Каталог</a>
          </Link>
          <Link activeClass="active"
            to="registration"
            smooth={true}
            offset={-10}
            duration= {500}>
            <a className="menu-item" href="">Регистрация</a>
          </Link>
          <Link activeClass="active"
            to="about"
            smooth={true}
            offset={-10}
            duration= {500}>
            <a className="menu-item" href="">Обо мне</a>
          </Link>
          <Link activeClass="active"
            to="contacts"
            smooth={true}
            offset={-10}
            duration= {500}>
            <a className="menu-item" href="">Контакты</a>
          </Link>
      </Menu>
    );
  }
}