import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, getFilter }) => {
  return (
    <label className={styles.title}>
      Find contacts by name - {filter}
      <input
        type="text"
        value={filter}
        onChange={getFilter}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
