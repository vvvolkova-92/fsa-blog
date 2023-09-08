import React from 'react';
import styles from './button.module.css';
import Link from "next/link";
const Button = ({onClick, color = "#E68745", url, title = "Button", size, ...rest}) => {
  const btn = url ? <Link href={url}>
    <div data-size={size} onClick={onClick} className={styles.wrapper} style={{backgroundColor: color}} {...rest}>{title}</div>
  </Link> : <button data-size={size} onClick={onClick} className={styles.wrapper} style={{backgroundColor: color}}>{title}</button>
  return btn;
}

export default Button;