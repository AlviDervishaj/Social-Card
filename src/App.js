// Styling
import styles from "./App.module.css";

// Components
import { Card } from "./components/Card";

function App() {
  return (
    <main className={styles.appContainer}>
      <Card />
    </main>
  );
}

export default App;
