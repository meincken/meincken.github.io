import styles from './Footer.module.css'
import Link from 'next/link';
import { Giithub, LinkedIn } from '@/components/Elements';

export const Footer = () => {
  return (
    <footer className={styles.global_footer}>
      <div className={styles.social}>
        <Link href={`https://github.com/meincken`}>
          <Giithub />
        </Link>
        <Link href={`https://www.linkedin.com/in/meincken/`}>
          <LinkedIn />
        </Link>
      </div>
      <small>&copy;{new Date().getFullYear()} Nick Meincken</small>
    </footer>
  );
}