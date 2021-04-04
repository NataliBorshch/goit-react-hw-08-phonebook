import React from 'react';
import PropTypes from 'prop-types';

import ContactCard from '../ContactCard';
import styles from './ContactsList.module.css';

const ContactsList = ({ items }) => {
  return (
    <div>
      <ul className={styles.contacts_list}>
        {items.length > 0 &&
          items.map(item => {
            return (
              <li>
                <ContactCard item={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ContactsList;
