import React from 'react';
import styles from './style.module.css';
import {portfolio} from "@/ulits/config";
import Link from "next/link";
const Portfolio = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>Выберите категорию</h2>
      <div className={styles.gallery}>
        {portfolio.gallery.map(item => <Link key={item.id} href={item.url} className={styles.item}>
          <span className={styles.itemTitle}>{item.name}</span>
        </Link>)}
      </div>
    </div>
  );
}

export default Portfolio;