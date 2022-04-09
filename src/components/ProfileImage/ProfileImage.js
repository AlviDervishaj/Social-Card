// React
import { useContext } from "react";

// Styling
import styles from "./ProfileImage.module.css";

// Context
import { CardContext } from "../Context";

export const ProfileImage = () => {
  const { cardProps } = useContext(CardContext);
  return (
    <img
      src={cardProps.userImage}
      alt="Profile"
      className={styles.profileImage}
    />
  );
};
