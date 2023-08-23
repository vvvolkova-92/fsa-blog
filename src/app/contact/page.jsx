"use client"
import React from 'react';
import styles from './style.module.css';
import Image from "next/image";
import {contact} from "@/ulits/config";
import Input from "@/components/ui/Input/Input";
import TextArea from "@/components/ui/Textarea/TextArea";
import Button from "@/components/ui/Button/Button";

export const metadata = {
  title: 'Контактная информация',
  description: 'Просто свяжитесь со мной =)',
}

const Contact = (props) => {
  const onChangeInput = () => {

  };
  const onChangeTextArea = () => {

  }

  const onSubmit = (evt) => {
    evt.preventDefault();
  }
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{contact.title}</h1>
      <div className={styles.info}>
        <div className={styles.imageWrapper}>
          <Image src={contact.image} alt="Изображение на странице с контактами" fill className={styles.image}/>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <Input type="text" onChange={onChangeInput} placeholder="имя" />
          <Input type="text" onChange={onChangeInput} placeholder="email" />
          <TextArea onChange={onChangeTextArea} placeholder="сообщение" />
          <Button title="Отправить" />
        </form>
      </div>
    </section>
  );
}

export default Contact;