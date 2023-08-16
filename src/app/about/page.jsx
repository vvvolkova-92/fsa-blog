import React from 'react';
import styles from './style.module.css';
import Image from "next/image";
import {about} from "@/ulits/config";
import Button from "@/components/Button/Button";
const About = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={about.image} alt="Изображение на странице about" fill/>
        <div className={styles.imageTextwrapper}>
          <h1 className={styles.title}>{about.title}</h1>
          <h2 className={styles.description}>{about.description}</h2>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textItem}>
          <h3 className={styles.title}>{about.textWrapper1.title}</h3>
          <p className={styles.description}>{about.textWrapper1.description1}</p>
          <p className={styles.description}>{about.textWrapper1.description2}</p>
        </div>
        <div className={styles.textItem}>
          <h3 className={styles.title}>{about.textWrapper2.title}</h3>
          <p className={styles.description}>{about.textWrapper2.description1}</p>
          <p className={styles.description}>{about.textWrapper2.description2}</p>
          <Button title={about.button.title} url={about.button.url}/>
        </div>
      </div>
    </div>
  );
}

export default About;