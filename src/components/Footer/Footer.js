// Font awesome Icon Component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Font awesome icons
import {
  faHeart,
  faEnvelope,
  faComment,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
// Styling
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <button className={styles.footerButton}>
        <FontAwesomeIcon icon={faComment} /> 2
      </button>

      <button className={styles.footerButton}>
        <FontAwesomeIcon icon={faRetweet} /> 47
      </button>
      <button className={styles.footerButton}>
        <FontAwesomeIcon icon={faHeart} /> 190
      </button>
      <button className={styles.footerButton}>
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};
