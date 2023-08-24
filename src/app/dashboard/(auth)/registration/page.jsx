"use client"
import React, {useState} from 'react';
import styles from './style.module.css';
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import {REGISTER_URL} from "@/ulits/config";
import {useRouter} from "next/navigation";
const Registration = (props) => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const onSubmit = async (evt) => {
    console.log('click');
    evt.preventDefault();
    const name = evt.target[0].value;
    const email = evt.target[1].value;
    const password = evt.target[2].value;
    try {
      const res = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, password
        })
      });
      res.status === 201 && router.push("/dashboard/login");
    }
    catch (e) {
      setError(true);
    }
  }
  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input type="text" placeholder="имя" required/>
        <Input type="email" placeholder="email" required/>
        <Input type="password" placeholder="пароль" required/>
        <Button title="Зарегистрироваться"/>
      </form>
      {error && <span>Что-то пошло не так...</span>}
      <Link href="/dashboard/login">Уже зарегистрированы? Войти</Link>
    </section>
  );
}

export default Registration;