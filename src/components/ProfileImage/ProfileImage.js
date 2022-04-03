// User Image
import Image from "../../assets/windowsImage.jpeg";

// Styling
import styles from "./ProfileImage.module.css";

export const ProfileImage = () => {
  return <img src={Image} alt="Profile" className={styles.profileImage} />;
};
