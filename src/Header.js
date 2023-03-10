import React from 'react';
import Navbar from './Navbar';
import styles from './styles/header.module.scss';
import background from './assets/images/background-1.jpg';

const backgroundStyle = {
  backgroundImage: `url(${background})`,
};

const Header = () => {
  return (
    <header id="header" className={styles.header} style={backgroundStyle}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.text}>
        <h2>
          <span>Hi, I'm </span>Tina{' '}
        </h2>
        <h2>
          <span> A</span> software engineer
          <span> based in </span>New York
        </h2>
      </div>
    </header>
  );
};

export default Header;
