// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// Styling
import styles from "./Carret.module.css";

export const Carret = () => {
  return <FontAwesomeIcon icon={faAngleDown} className={styles.carret} />;
};
