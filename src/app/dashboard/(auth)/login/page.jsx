"use client"
import React from 'react';
import styles from './style.module.css';
import Button from "@/components/ui/Button/Button";
import {signIn} from "next-auth/react";
const Registration = (props) => {
  const onBtnClick = () => signIn("yandex")
  return (
    <div className={styles.wrapper}>
      <Button onClick = {onBtnClick} title="Войти через Яндекс" />
    </div>
  );
}

export default Registration;