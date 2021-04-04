import React from 'react';
import styles from './Spiner.module.css';

const Spiner = () => {
  return (
    <div class={styles.loader}>
      <div class={styles.loader_inner}>
        <div class={styles.loader_line_wrap}>
          <div class={styles.loader_line}></div>
        </div>
        <div class={styles.loader_line_wrap}>
          <div class={styles.loader_line}></div>
        </div>
        <div class={styles.loader_line_wrap}>
          <div class={styles.loader_line}></div>
        </div>
        <div class={styles.loader_line_wrap}>
          <div class={styles.loader_line}></div>
        </div>
        <div class={styles.loader_line_wrap}>
          <div class={styles.loader_line}></div>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
