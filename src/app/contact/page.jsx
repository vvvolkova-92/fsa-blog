import React from 'react';
import styles from './style.module.css';
import Image from "next/image";
const About = (props) => {
  return (
    <section className={styles.wrapper}>
      <h1>Lorem ipsum dolor sit amet!</h1>
      <div className={styles.info}>
        <Image src="/contactImg.png" alt="Изображение на странице с контактами" />
        <form className={styles.form}>
        </form>
      </div>
    </section>
  );
}

export default About;