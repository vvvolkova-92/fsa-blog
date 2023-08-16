import React from 'react';
import styles from './toggle.module.css';
import {modes} from "@/ulits/config";
const Toggle = ({}) => {
  const mode = modes.DARK;
  return (
    <div data-mode={mode === modes.LIGHT? modes.LIGHT : modes.DARK} className={styles.wrapper} style={
      mode === modes.LIGHT ? { backgroundColor: "var(--gray-color)"} : { backgroundColor: "var(--background-color)"}
    }>
      <div className={styles.light}></div>
      <div className={styles.dark}></div>
      <div className={mode === modes.LIGHT? styles.ball : styles.moon} style={
        mode === modes.LIGHT ? {left: "4px"} : {right: "4px"}
      }></div>
    </div>
  );
}

export default Toggle;