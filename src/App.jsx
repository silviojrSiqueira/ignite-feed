import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>Timeline</main>
      </div>
    </div>
  );
}

export default App;
