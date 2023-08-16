import React from 'react';
import styles from './style.module.css';
import {portfolio} from "@/ulits/config";
const Layout = ({children}) => {
  return (
    <section>
      <h1 className={styles.title}>{portfolio.title}</h1>
      {children}
    </section>
  );
}

export default Layout;