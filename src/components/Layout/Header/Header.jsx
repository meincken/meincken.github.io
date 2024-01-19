import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.global_header}>
      <h1>This is a header</h1>
      <ul className={styles.nav_ul}>
        <li>Test A</li>
        <li>Test B</li>
        <li>Test C</li>
      </ul>
    </header>
  );
}