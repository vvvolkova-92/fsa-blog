"use client"
import React, {useEffect, useState} from 'react';
import styles from './style.module.css';
import useSWR from "swr";
import {BLOG_URL} from "@/ulits/config";
import {useSession} from "next-auth/react";


const Dashboard = (props) => {
  const [state, setState] = useState({
    data: [],
    isLoading: false,
    error: false,
  });

  const session = useSession();
  console.log(session);
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR(BLOG_URL, fetcher);
  console.log(state);
  return (
    <div className={styles.wrapper}>Dashboard</div>
  );
}

export default Dashboard;