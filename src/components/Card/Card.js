// Styling
import styles from "./Card.module.css";

// Components
import { Body } from "../Body";
import { ProfileImage } from "../ProfileImage/ProfileImage";

export const Card = () => {
  return (
    <section className={styles.card}>
      <ProfileImage />
      <Body />
    </section>
  );
};
