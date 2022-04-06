// Components
import {Carret} from "../Carret";
import {ProfileImage} from "../ProfileImage";

// Styling
import styles from "./Header.module.css";

export const Header = ({username, tag, createdDate}) => {
  return (
    <section className={styles.header}>
      <ProfileImage />
      {/* Username */}
      <p className={styles.username}>{username}</p>
      {/* User Tag */}
      <p className={styles.userTag}>{tag}</p>
      {/* Created Date */}
      <p className={styles.createdDate}>	&bull; {createdDate}</p>
      <Carret />
    </section>
  )
}