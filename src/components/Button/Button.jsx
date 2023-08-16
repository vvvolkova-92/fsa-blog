import React from 'react';
import styles from './button.module.css';
import Link from "next/link";
const Button = ({color = "#E68745", url="#", title = "Button"}) => {
  return (
    <Link href={url}>
      <button className={styles.wrapper} style={{backgroundColor: color}}>{title}</button>
    </Link>
  );
}

export default Button;