import React from 'react';
import Currencies from '../components/Currencies/Currencies';
import styles from '../App.module.css';

const Home = () => {
  return (
    <div className={styles.page_home}>
      <h1>Welcome my friend</h1>
      <div className={styles.box}>
        <Currencies />
      </div>
    </div>
  );
};

export default Home;
