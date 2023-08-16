"use client"
import React from 'react';
import styles from './textarea.module.css';
const TextArea = ({placeholder, cols = '30', rows = '10', onChange}) => {
  return (
    <textarea className={styles.textarea} placeholder={placeholder} onChange={onChange} cols={cols} rows={rows}/>
  );
}

export default TextArea;