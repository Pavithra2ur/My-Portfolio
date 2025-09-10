import style from './Skills.module.css';


function Skills() {
  return (
    <section className={style.skillsSection} id="Skills">
      <h2>Skills</h2>

      <div className={style.skillsContainer}>
        {/* Technical Skills */}
        <div className={style.skillCard}>
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript, Bootstrap</li>
            <li>React.js (Hooks, Components, Routing)</li>
            <li>Node.js</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git basics), Mongodb</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className={style.skillCard}>
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving & Analytical Thinking</li>
            <li>Teamwork & Collaboration</li>
            <li>Adaptability </li>
            <li>Time Management</li>
            <li>Effective communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
