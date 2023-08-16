"use client"
import React from 'react';
import styles from './input.module.css';
const Input = ({placeholder = "Введите текст", onChange, type = "text", ...rest}) => {
  return (
    <input className={styles.input} placeholder={placeholder} onChange={onChange} type={type}/>
  );
}

export default Input;