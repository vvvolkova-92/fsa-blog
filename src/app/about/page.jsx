import React from 'react';
import styles from './style.module.css';
import Image from "next/image";
import {about} from "@/ulits/config";
const About = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={about.image} alt="Изображение на странице about" fill/>
        <div className={styles.imageTextwrapper}>
          <h1 className={styles.title}>{about.title}</h1>
          <h2 className={styles.description}>{about.description}</h2>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textItem}>
          <h3 className={styles.title}></h3>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fugit inventore quasi sapiente temporibus, tenetur. A, accusamus architecto eos error fuga libero, maxime non odio quas sequi suscipit temporibus.</p>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textItem}>
          <h3 className={styles.title}></h3>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt fugit inventore quasi sapiente temporibus, tenetur. A, accusamus architecto eos error fuga libero, maxime non odio quas sequi suscipit temporibus.</p>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
}

export default About;