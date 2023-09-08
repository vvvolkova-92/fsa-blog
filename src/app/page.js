import styles from './page.module.css';
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
export default function Home() {
  return (
      <section className={styles.wrapper}>
        <div>
          <h1 className={styles.title}>Lorem ipsum dolor elit</h1>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur cumque cupiditate doloremque expedita laboriosam magni </p>
          <Button title="Связаться с нами" url="/contact"/>
        </div>
        <div>
          <Image src="/inHeader.png" alt="image in header" fill={true} className={styles.image} />
        </div>
      </section>
  )
}
