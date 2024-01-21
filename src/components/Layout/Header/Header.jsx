import Link from 'next/link';
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.global_header}>
      <h1>Meincken</h1>
      <ul className={styles.nav_ul}>
        <li>
          <Link 
            href={`#about`}
          >
            About
          </Link>
        </li>
        <li>Test B</li>
        <li>Test C</li>
      </ul>
    </header>
  );
}
