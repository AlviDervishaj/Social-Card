// Styling
import styles from "./Card.module.css";

// Components
import { Body } from "../Body";
import { Header } from "../Header";

export const Card = () => {
  return (
    <section className={styles.card}>
      <Header />
      <Body />
    </section>
  );
};
