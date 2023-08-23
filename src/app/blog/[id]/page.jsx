import React from 'react';
import styles from './style.module.css';
import Image from "next/image";
import {BLOG_URL, img} from "@/ulits/config";
import {notFound} from "next/navigation";

async function getPost(id) {
  const res = await fetch(`${BLOG_URL}/${id}`, { cache: 'no-store' })
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export const generateMetadata = async ({params}) => {
  const {id} = params;
  const post = await getPost(id);
  const {title, description} = post;
  return {
    title,
    description,
  }
}

const Post = async({params}) => {
  const post = await getPost(params.id);
  const {title, content, image} = post;
  const hardcode = {
    author: "Violetta Volkova",
    avatar: img,
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.about}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{content}</p>
          {/*переделать в компонент*/}
          <div className={styles.author}>
            <Image src={hardcode.avatar} alt={`Аватар пользователя ${hardcode.author}`} width={35} height={35} className={styles.icon} />
            <span>{hardcode.author}</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={`Изображение к посту ${title}`} fill/>
        </div>
      </div>
      <div className={styles.content}>{content}</div>
    </section>
  );
}

export default Post;