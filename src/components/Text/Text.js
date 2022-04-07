// React
import {useState, useRef} from "react";

// Styling
import styles from "./Text.module.css";

export const Text = () => {
  const [text, setText] = useState('Hello World !');
  const [scrollHeight, setScrollHeight] = useState('');
  const handleOnChange = (event) => {
    setText(event.target.value);
    // set scroll height to height of textarea
    setScrollHeight(event.target.scrollHeight);
  }
  return (
    <textarea type="text"  className={styles.cardText} style={{height: scrollHeight}} value={text} onChange={(event) => handleOnChange(event)} />
  )
}
