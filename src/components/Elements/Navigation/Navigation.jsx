import Link from 'next/link';
import styles from './Navigation.module.css'
import data from '@/data/nav.json'

export const Navigation = () => {
  return (
    <ul className={styles.nav_ul}>
      {data.nav.map((list) => (
        <li key={list.title}>
          <Link href={list.link}>
            {list.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}