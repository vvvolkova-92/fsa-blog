"use client"
import React from 'react';
import styles from './portfolioItem.module.css';
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
const PortfolioItem = ({title, description, image, url}) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button title="Подробнее" url={url} />
      </div>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={image} alt={`Изображение к посту ${title}`} fill/>
      </div>
    </article>
  );
}

export default PortfolioItem;