// Styling
import styles from "./CardLayout.module.css";

// Components
import { Card } from "./components/Card";
import { Code } from "./components/Code";
import { CardContextProvider } from "./components/Context";

function CardLayout() {
  return (
    <CardContextProvider>
      <main className={styles.cardLayoutContainer}>
        <Card />
        <Code />
      </main>
    </CardContextProvider>
  );
}

export default CardLayout;
