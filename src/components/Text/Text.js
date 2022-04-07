// React
import { useState } from "react";

// Styling
import styles from "./Text.module.css";

export const Text = () => {
  const [text, setText] = useState("Hello World !");
  const [scrollHeight, setScrollHeight] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
    // check if event target value is empty string
    if (event.target.value.trim() === "") {
      // if text area is empty set the default height
      return setScrollHeight("5rem");
    }
    // set scroll height to height of textarea
    setScrollHeight(event.target.scrollHeight);
  };
  return (
    <textarea
      type="text"
      className={styles.cardText}
      style={{ height: scrollHeight }}
      value={text}
      onChange={(event) => handleOnChange(event)}
    />
  );
};
