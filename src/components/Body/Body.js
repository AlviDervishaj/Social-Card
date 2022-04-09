// Components
import { Text } from "../Text";
import { Image } from "../Image";
import { Footer } from "../Footer";

// Styling
import styles from "./Body.module.css";

export const Body = () => {
  return (
    <section className={styles.cardBody}>
      <Text />
      <Image />
      <Footer />
    </section>
  );
};
