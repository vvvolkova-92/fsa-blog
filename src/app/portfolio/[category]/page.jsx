import React from 'react';
import styles from './style.module.css';
import PortfolioItem from "@/components/PortfolioItem/PortfolioItem";
const Category = ({params}) => {
  const { category } = params;
  let title = category === 'illustrations' ? 'Иллюстрации': category === 'websites' ? 'Вебсайты' : 'Приложения';
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {/*hardcode*/}
      <PortfolioItem
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat itaque qui sed. Dolorem eum ex natus, pariatur totam veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat itaque qui sed. Dolorem eum ex natus, pariatur totam veniam."
        url="/test1"
        image="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
      />
      <PortfolioItem
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat itaque qui sed. Dolorem eum ex natus, pariatur totam veniam."
        url="/test1"
        image="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
      />
      <PortfolioItem
        title="Lorem ipsum dolor sit amet."
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat itaque qui sed. Dolorem eum ex natus, pariatur totam veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat itaque qui sed. Dolorem eum ex natus, pariatur totam veniam."
        url="/test1"
        image="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
      />
    </div>
  );
}

export default Category;