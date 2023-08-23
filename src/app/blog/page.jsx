import React from 'react';
import styles from './style.module.css';
import PostItem from "@/components/PostItem/PostItem";
import {BLOG_URL} from "@/ulits/config";

async function getPosts() {
  const res = await fetch(BLOG_URL, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Blog = async () => {
  const posts = await getPosts() || [];
  return (
    <section className={styles.wrapper}>
      {posts.map(post => <PostItem
        key={post._id}
        url={`/blog/${post._id}`}
        title={post.title}
        description={post.content}
        image={post.image}/>)}
    </section>
  );
}

export default Blog;