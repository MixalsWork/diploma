import style from './index.module.css';

function About() {
  return (

    <div className={style.aboutMe} >
        {<div className={style.aboutMeText}>
            <span>	&#8212;&#8212; ОБО МНЕ</span>
            <span><p>Lorem ipsum nam, tellus enim tempus in enim sodales morbi</p></span>
            <span><p>Lorem ipsum&nbsp;&mdash; curabitur odio elementum proin nibh gravida, massa eget enim&nbsp;&mdash; auctor nibh malesuada sed auctor nam pellentesque nibh sit&nbsp;&mdash; porttitor maecenas diam, vivamus adipiscing: pharetra elementum sagittis eu commodo sit in adipiscing auctor tellus</p></span>
            <span><p>Подробнее &#8594;</p></span>
        </div> }
        { <div>
            <img className={style.aboutMeImg} src="https://i.imgur.com/6UGgc8w.png" alt="#"/>
        </div> }
    </div>




  );

}

export default About;
