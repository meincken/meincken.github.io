import Link from 'next/link';
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
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
  )
}