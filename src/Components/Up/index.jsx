import React from 'react'
import style from './index.module.css'
import icon from './img/up.svg'
import { Link } from "react-scroll";

export default class Up extends React.Component{
  state = {
    display: 'none'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 300) {
      this.setState({display: 'block'})
    } else {
      this.setState({display: 'none'})
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {
    return(
        <Link activeClass="active"
            to="header"
            smooth={true}
            offset={-70}
            duration= {500}
            style={{display: this.state.display}}
            >
            <button className={style.components}>
            <img className={style.image} src={icon} alt="up"/>
            </button>
        </Link>
     )
   }
}





