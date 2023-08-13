"use client"
import React from 'react';
import Link from "next/link";
import {MENU} from "@/ulits/config";
import styles from './navbar.module.css';
const Navbar = (props) => {
  const onClickButton = () => {
    console.log("click")
  }
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo}>logo</Link>
      <nav className={styles.navbar}>
        <ul className={styles.menuItems}>
          {MENU.map(item => <li key={item.id} className={styles.menuItem}>
            <Link href={item.url} >{item.title}</Link>
          </li>)}
        </ul>
        <button className={styles.btn} onClick={onClickButton}>Вход</button>
      </nav>
    </header>
  );
}

export default Navbar;