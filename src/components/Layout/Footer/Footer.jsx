import Link from 'next/link';
import styles from './Footer.module.css'
import { Github, LinkedIn } from '@/components/Elements'
import data from '@/data/user.json'

export const Footer = () => {
  return (
    <footer className={styles.global_footer}>
      <div className={styles.social}>
        <Link href={`https://github.com/${data.social.github}`}>
          <Github />
        </Link>
        <Link href={`https://www.linkedin.com/in/${data.social.linkedin}/`}>
          <LinkedIn />
        </Link>
      </div>
      <small>&copy;{new Date().getFullYear()} {data.name} built with NextJS</small>
    </footer>
  );
}