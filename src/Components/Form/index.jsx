import React from 'react';
import emailjs from 'emailjs-com';
import style from  './index.module.css'


function Form() {

  function showModal(titleText) {
    let modalWrapper = document.querySelector('#modalWrapper')
    let modalTitle =document.querySelector('#modalTitle')
    modalTitle.innerHTML = titleText
    modalWrapper.style.display='flex'
  }

  function closeModal(){
    let modalWrapper = document.querySelector('#modalWrapper')
    modalWrapper.style.display='none'
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_efa630h', 'template_skzpoib', e.target, 'user_quqyabjzp6Av6KJKpzklv')
      .then((result) => {
          showModal(`Спасибо за вашу регистрацию , <br/> скоро мы с вами свяжемся!`)
          setTimeout(closeModal,3000)
      }, (error) => {
        showModal(`Ой что-то пошло не так <br/>  попробуйте пожже`)
          console.log(error.text);
      });
  }

  return (
    <div className={style.wrapper}>
      <form className={style.form} id='registration' onSubmit={sendEmail}>
        <h2 className={style.title}>
          Форма для регистрации <br/>
          на Финансовый марафон
        </h2>
        <div className={style.inputBox}>
          <label for='user_name' className={style.label}>Имя</label>
          <input type="text" name="user_name" id='user_name' placeholder='Ольга'  className={style.input}/>
        </div>
        <div className={style.inputBox}>
          <label for='contact_number' className={style.label}>Телефон</label>
          <input type="tel" name="contact_number" id='contact_number' placeholder='+38 (050) 123 65 89'  className={style.input}/>
        </div>
        <div className={style.inputBox}>
          <label for='user_email' className={style.label}>E-mail</label>
          <input type="email" name="user_email" id='user_email' placeholder="yourname@example.com"  className={style.input}/>
        </div>
        <input type="submit" value="Регистрация" className={style.button}/>
      </form>
      <div className={style.modalWrapper} id='modalWrapper'>
        <div className={style.modal}>
              <h2 className={style.titleModal} id='modalTitle'>
              </h2>
          </div>
      </div>
    </div>
  );
}

export default Form