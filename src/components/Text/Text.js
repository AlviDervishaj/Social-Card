// React
import {useState} from "react";

// Styling
import styles from "./Text.module.css";

export const Text = () => {
  const [text, setText] = useState('Hello World !');
  return (
    <textarea type="text" className={styles.cardText} value={text} onChange={(event) => setText(event.target.value)} />
  )
}
