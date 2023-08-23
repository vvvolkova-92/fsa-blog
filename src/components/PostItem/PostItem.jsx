"use client"
import React from 'react';
import styles from './postItem.module.css';
import Image from "next/image";
import Link from "next/link";
const PostItem = ({title, description, image, url = "#", key}) => {
  return (
    <article key={key}>
      <Link className={styles.wrapper} href={url}>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={image} alt={`Изображение к посту ${title}`} fill/>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </article>
  );
}

export default PostItem;