import styles from './Header.module.css'
import { Navigation } from '@/components/Elements'

export const Header = () => {
  return (
    <header className={styles.global_header}>
      <div className={styles.wrapper}>
        <h1>Meincken</h1>
        <Navigation />
      </div>
    </header>
  );
}
