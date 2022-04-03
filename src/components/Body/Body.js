// Components
import { Header } from "../Header";
import {Text} from "../Text";
import {Image} from "../Image";

// Styling
import styles from "./Body.module.css";

export const Body = () => {
  return (
    <section className={styles.cardBody}>
      <Header
        username={"Alvi Dervishaj"}
        tag={"@alviiii"}
        createdDate={"Mar 2"}
      />
      <Text />
      <Image image={"https://picsum.photos/200/200"} />
    </section>
  );
};
