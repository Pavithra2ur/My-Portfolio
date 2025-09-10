import style from './About.module.css'
import resume from '../assets/A.Pavithra.resume.pdf'

function About(){
  return(
    <div className={style["hero-section"]} id="About">
      <div className={style["hero-sec"]}>
        <h2>About me</h2>
        <p>I’m Pavithra, a Computer Science and Engineering graduate with a strong passion for creating responsive,
           user-friendly, and visually appealing web applications. My technical background includes hands-on 
           experience with HTML, CSS, JavaScript, React.js, and Django, which has enabled me to design and develop
            clean, functional interfaces and efficient back-end solutions.</p>
<p>Throughout my academic journey and internships, I have honed my problem-solving abilities,
 strengthened my collaboration skills, and learned to adapt quickly to new technologies.
  I enjoy transforming ideas into practical digital products that deliver a positive user experience, and I’m eager
   to continue growing as a full-stack developer contributing to impactful projects.</p>
      </div>
      <div className={style["education"]}>
        <h3>Education & Internship</h3>
        <dl>
          <dt>B.E. Computer Science & Engineering </dt>
            <dd>Bharathiyar institute of Engineering for women(2021 – 2025)</dd>
            <dd>Graduated with strong focus on full-stack web development.</dd>
          <dt>Junior Web Developer Intern</dt>
            <dd>Company : Altruisty(sep 2024 - nov 2024)</dd>
            <dd>Gained hands-on experience with HTML, CSS, JavaScript, React.js, and team collaboration.</dd>
            <dd>Contributed to the eCommerce Website, building modern, responsive pages and interactive features.</dd>
        </dl>
        <div className={style["resume-btn"]}>
          <a href={resume} target="_blank" rel="noopener noreferrer" download>
             Download Resume
          </a>
          <a href="https://drive.google.com/file/d/1_ztz2FLYqgfa7RMgSSFb-pbY3QsYuqUV/view?usp=drivesdk" target="_blank" >
             view Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default About