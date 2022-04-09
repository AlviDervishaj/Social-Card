// React
import { useContext } from "react";
// Components
import { Carret } from "../Carret";
import { ProfileImage } from "../ProfileImage";

// Styling
import styles from "./Header.module.css";

// Context
import { CardContext } from "../Context";

export const Header = () => {
  const { cardProps } = useContext(CardContext);
  return (
    <section className={styles.header}>
      <ProfileImage />
      {/* Username */}
      <p className={styles.username}>{cardProps.username}</p>
      {/* User Tag */}
      <p className={styles.userTag}>{cardProps.tag}</p>
      {/* Created Date */}
      <p className={styles.createdDate}> &bull;{cardProps.createdDate}</p>
      <Carret />
    </section>
  );
};
