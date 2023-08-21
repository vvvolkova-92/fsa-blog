"use client"
import React, {useContext} from 'react';
import styles from './toggle.module.css';
import {modes} from "@/ulits/config";
import {ThemeContext} from "../../../../context/ThemeContex";
const Toggle = ({}) => {

  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div data-mode={theme === modes.LIGHT? modes.LIGHT : modes.DARK} className={styles.wrapper} style={
      theme === modes.LIGHT ? { backgroundColor: "var(--gray-color)"} : { backgroundColor: "var(--background-color)"}
    } onClick={changeTheme}>
      <div className={styles.light}></div>
      <div className={styles.dark}></div>
      <div className={theme === modes.LIGHT? styles.ball : styles.moon} style={
        theme === modes.LIGHT ? {left: "4px"} : {right: "4px"}
      }></div>
    </div>
  );
}

export default Toggle;