"use client"
import {useState} from 'react';
import styles from './style.module.css';
import useSWR from "swr";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Input from "@/components/ui/Input/Input";
import TextArea from "@/components/ui/Textarea/TextArea";
import Button from "@/components/ui/Button/Button";

const Dashboard = (props) => {
  const [state, setState] = useState({
    data: [],
    isLoading: false,
    error: false,
  });

  const session = useSession();
  console.log(session);
  const router = useRouter();
  const userEmail = session?.data?.user.email;
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR(`/api/posts?email=${userEmail}`, fetcher);
  const onSubmitHandler = async(evt) => {
    evt.preventDefault();
    const title = evt.target[0].value;
    const description = evt.target[1].value;
    const image = evt.target[2].value;
    const content = evt.target[3].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title, description, image, content, email: userEmail,
        })
      })
    } catch (e) {
      console.log(e);
    }
  }
  if(session.status === "loading") return <p>Загрузка...</p>
  else if(session.status === "unauthenticated") router.push("/dashboard/login")
  return session.status === "authenticated" && (
    <section className={styles.wrapper}>
      <ul className={styles.posts}>
        {isLoading ? "Loading... " : data?.map(post => <li className={styles.post} key={post._id}>
          <div className={styles.imgWrapper}>
            <Image src={post.image} alt={`Изображение к посту ${post.title}`} fill/>
          </div>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <span className={styles.postDelete}>x</span>
        </li>)}
      </ul>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h2>Добавить новый пост</h2>
        <Input placeholder="Заголовок" type="text" />
        <Input placeholder="Короткое описание" type="text" />
        <Input placeholder="Сссылка на изображение" type="text" />
        <TextArea placeholder="Содержимое статьи" rows={10} cols={30} />
        <Button title="Отправить" />
      </form>
    </section>
  )
}

export default Dashboard;