import React from 'react';
import styles from './styles/contact.module.scss';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.content}>
        <h3>Find me here!</h3>
        <div className={styles.contactInfo}>
          <div className={styles.socialLinks}>
            <div>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tinazarb"
                    rel="noopener noreferrer"
                    target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tinazarb"
                    rel="noopener noreferrer"
                    target="_blank">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
