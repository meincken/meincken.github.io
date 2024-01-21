import styles from './Footer.module.css'
import { Giithub, LinkedIn } from '@/components/Elements';

export const Footer = () => {
  return (
    <footer className={styles.global_footer}>
      <h1>This is a footer</h1>
      <div className={styles.social}>
        <Giithub /><LinkedIn />
      </div>
      
    </footer>
  );
}