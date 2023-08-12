import React from 'react';
import styles from './footer.module.css';
import Image from "next/image";
import {SOCIAL_ICONS_SIZE} from "@/ulits/config";
const Footer = (props) => {
  return (
    <div className={styles.wrapper}>
    <span>Копирайт</span>
    <ul className={styles.icons}>
      <li><Image className={styles.icon} src="/icons/vk-light.png" alt="Иконка соцсети - vk.com" width={SOCIAL_ICONS_SIZE} height={SOCIAL_ICONS_SIZE}/></li>
      <li><Image className={styles.icon} src="/icons/instagram-light.png" alt="Иконка соцсети - instagram.com" width={SOCIAL_ICONS_SIZE} height={SOCIAL_ICONS_SIZE}/></li>
      <li><Image className={styles.icon} src="/icons/linkedin-light.png" alt="Иконка соцсети - linkedin.com" width={SOCIAL_ICONS_SIZE} height={SOCIAL_ICONS_SIZE}/></li>
    </ul>
  </div>
  );
}

export default Footer;