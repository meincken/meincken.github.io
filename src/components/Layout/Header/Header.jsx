import styles from './Header.module.css'
import { Logo } from '@/components/Atoms'
import { Navigation } from '@/components/Elements'

export const Header = () => {
  return (
    <header className={styles.global_header}>
      <div className={styles.wrapper}>
        <h1><Logo /></h1>
        <Navigation />
      </div>
    </header>
  );
}
