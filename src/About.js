import React from 'react';
import styles from './styles/about.module.scss';
import aboutImg from './assets/images/me.jpg';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2>About Me</h2>

      <div className={styles.aboutRow}>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            <p>
              I'm a recent graduate from{' '}
              <a
                href="https://www.gracehopper.com/"
                rel="noopener noreferrer"
                target="_blank">
                The Grace Hopper Coding Bootcamp
              </a>
              , which I attended with the help of a scholarship from{' '}
              <a
                href="https://lesbianswhotech.org"
                rel="noopener noreferrer"
                target="_blank">
                Lesbians Who Tech
              </a>
              .
            </p>
            <p>
              Previously, I worked in photography as a digital technician, using
              camera capturing programs on photo shoots and ensuring file
              organization and proper file structuring. Coding on the command
              line for Amazon Web Services in my photography work, I got a
              glimpse of the possibilities in the terminal and what a computer
              is capable of. I wanted to dive deeper in, and started learning
              JavaScript!
            </p>
            <p>
              My love of creation and problem solving drive me to design and
              build functional and engaging apps. I'm looking to work on
              meaningful projects and make a difference as a software engineer.
            </p>
          </div>
          <div className={styles.skills}>
            <div className={styles.column}>
              <h6>Languages</h6>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h6>Front End</h6>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React Native</li>
                <li>Sass</li>
                <li>CSS Modules</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h6>Back End</h6>
              <ul>
                <li>Express</li>
                <li>Sequelize</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.photo}>
          <img alt="Tina" src={aboutImg} />
        </div>
      </div>
    </section>
  );
};

export default About;
