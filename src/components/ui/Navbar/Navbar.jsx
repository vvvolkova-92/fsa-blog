"use client"
import React from 'react';
import Link from "next/link";
import {MENU} from "@/ulits/config";
import styles from './navbar.module.css';
import Image from "next/image";
import Toggle from "@/components/ui/Toggle/Toggle";
import {signOut, useSession} from "next-auth/react";
const Navbar = (props) => {
  const {status} = useSession();
  const isAuth = status === 'authenticated';
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" alt="Логотип" width={50} height={50}/>
        <span>Logo</span>
      </Link>
      <nav className={styles.navbar}>
        <ul className={styles.menuItems}>
          <Toggle />
          {MENU.map(item => <li key={item.id} className={styles.menuItem}>
            <Link href={item.url} >{item.title}</Link>
          </li>)}
        </ul>
        {isAuth && <button className={styles.btn} onClick={signOut}>Выход</button>
        }
      </nav>
    </header>
  );
}

export default Navbar;