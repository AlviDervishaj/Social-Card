// Styling
import styles from "./Card.module.css";

// Components
import { Body } from "../Body";
import {Header} from "../Header";

export const Card = () => {
  return (
    <section className={styles.card}>
      <Header
        username={"Alvi Dervishaj"}
        tag={"@alviiii"}
        createdDate={"Mar 2"}
      />
      <Body />
    </section>
  );
};
