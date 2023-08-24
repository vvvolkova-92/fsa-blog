"use client"
import React from 'react';
import styles from './style.module.css';
import Button from "@/components/ui/Button/Button";
import {signIn, useSession} from "next-auth/react";
import Input from "@/components/ui/Input/Input";
import Link from "next/link";
import {REGISTER_URL} from "@/ulits/config";
import {useRouter} from "next/navigation";
const Login = (props) => {
  const {status} = useSession();
  const router = useRouter();
  if(status === "loading") return <p>Загрузка...</p>
  else if(status === "authenticated") router.push("/dashboard");
  const onSubmit = async (evt) => {
    evt.preventDefault();
    const email = evt.target[0].value;
    const password = evt.target[1].value;
    await signIn("credentials", { email, password});
  }
  const onBtnClick = () => signIn("yandex")
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input type="email" placeholder="email" required/>
        <Input type="password" placeholder="пароль" required/>
        <Button title="Войти"/>
      </form>
      <Link href="/dashboard/registration">Зарегистрироваться</Link>

      <Button onClick = {onBtnClick} title="Войти через Яндекс" />
    </div>
  );
}

export default Login;