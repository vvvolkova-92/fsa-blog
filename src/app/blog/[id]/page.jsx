import React from 'react';
import styles from './style.module.css';
import Image from "next/image";
import {img} from "@/ulits/config";
const Post = ({title = "Заголовок статьи", description, url = img, author = "Violetta Volkova", avatar = img, content}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.about}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          {/*<p className={styles.description}>{description}</p>*/}
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est neque odit sit voluptates! Ad amet atque aut corporis cum cupiditate debitis dignissimos doloribus dolorum facilis fuga fugiat ipsum iste libero magni modi nam nesciunt pariatur perspiciatis possimus provident reiciendis, rem sapiente sed sequi tempora totam velit voluptas voluptatem voluptatibus?</p>
          {/*переделать в компонент*/}
          <div className={styles.author}>
            <Image src={avatar} alt={`Аватар пользователя ${author}`} width={35} height={35} className={styles.icon} />
            <span>{author}</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={url} alt={`Изображение к посту ${title}`} fill/>
        </div>
      </div>
      {/*<div className={styles.content}>{content}</div>*/}
      <div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, laudantium nisi quas sequi sunt veritatis. Adipisci atque cumque ducimus ipsa molestias quasi voluptatem. Accusamus adipisci aliquid aperiam commodi consequuntur, cumque dicta dignissimos dolor eum excepturi exercitationem facilis ipsa iusto libero minima minus modi molestiae mollitia natus necessitatibus neque nesciunt nihil, numquam perspiciatis porro quia quibusdam reiciendis repellat rerum, tempora? Accusantium aliquam at consequatur cumque, deserunt eum laboriosam, minima nam neque nihil nisi pariatur porro quidem. Accusamus distinctio dolorem dolorum ducimus fugiat impedit ipsam iure libero magnam maiores maxime nesciunt nobis perferendis quo, repellat similique tempora vero. Accusantium beatae commodi delectus dicta dolorem ea eaque enim eveniet illum itaque labore laborum libero molestiae nostrum possimus provident, quisquam ratione reiciendis repellendus rerum tempora tempore voluptas. Consequuntur est inventore nihil pariatur recusandae rerum veritatis vero. Aut harum perferendis quisquam reiciendis sed. Accusantium consequuntur dolorum laboriosam nostrum porro possimus similique ullam. A accusamus ad alias aperiam asperiores, at atque consequatur corporis culpa, deleniti deserunt dignissimos eligendi esse eum eveniet impedit in incidunt laborum magnam magni modi molestias nemo nobis, non odio omnis placeat qui quibusdam quidem ratione sapiente sint suscipit tempore temporibus ullam vel vero. Aperiam deserunt dolorem doloribus facere fugit in minima mollitia, nam officia perspiciatis reprehenderit sunt tempore vel. Beatae commodi consequuntur cum enim eveniet facere, itaque libero molestiae nobis non nostrum officia perspiciatis, reprehenderit rerum saepe. Accusamus consequatur cumque deleniti enim, magnam minus natus quia quo tempora veritatis? Accusamus cum delectus minima optio recusandae! At consequuntur distinctio doloremque exercitationem iste minus quas sed vero voluptas? Animi, blanditiis consequuntur doloribus fuga harum illo illum in itaque libero magnam minima molestiae omnis perferendis perspiciatis quaerat quidem quis rerum sed tenetur totam? Ad architecto cum debitis esse, eveniet exercitationem facere, inventore laboriosam nihil nobis pariatur, repellendus. Distinctio doloribus eveniet excepturi necessitatibus nulla. Sit?</div>
    </section>
  );
}

export default Post;