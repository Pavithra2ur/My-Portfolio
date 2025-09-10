import React from 'react';
import myImg from '../assets/my image.jpeg';
import style from './Home.module.css'

function Home() {
  return (
   
      <div className={style.hero} id="Home">
        <div className={style["hero-container"]}>
         <div className={style["hero-sec"]}>
         <h3>Hello,</h3>
         <h1>I'm <span>Pavithra</span>,</h1>
         <h2>Web Developer</h2>
         <p>Building responsive and impactful web solutions that connect and inspire.</p>
         <a href="#About" class={style["know-btn"]}>Learn more about Me</a>
         </div>
        </div>
        <div className={style["image-container"]}>
          <div className={style["image-sec"]}>
            <img src={myImg}/>
          </div>
        </div>
      </div>
   

  )
}

export default Home;
