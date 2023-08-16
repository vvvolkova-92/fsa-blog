import React from 'react';
import styles from './style.module.css';
import PostItem from "@/components/PostItem/PostItem";
const Blog = () => {
  return (
    <section className={styles.wrapper}>
      <PostItem
        url="/blog/testId"
        title="Lorem ipsum dolor sit amet, consectetur."
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cupiditate, doloremque earum eum ex exercitationem in iste maxime molestiae nihil perspiciatis quasi quia quod, rem saepe soluta unde vel?"
        image="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
      />
      <PostItem
        url="#"
        title="Lorem ipsum dolor sit amet, consectetur."
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cupiditate, doloremque earum eum ex exercitationem in iste maxime molestiae nihil perspiciatis quasi quia quod, rem saepe soluta unde vel?"
        image="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
      />
      <PostItem
        url="#"
        title="Lorem ipsum dolor sit amet, consectetur."
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cupiditate, doloremque earum eum ex exercitationem in iste maxime molestiae nihil perspiciatis quasi quia quod, rem saepe soluta unde vel?"
        image="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
      />


    </section>
  );
}

export default Blog;