import React from 'react';
import styles from './footer.module.css';
const Footer = (props) => {
  return (
    <div className={styles.wrapper}>
    <span>Копирайт</span>
    <div>Тут будут иконки</div>
  </div>
  );
}

export default Footer;