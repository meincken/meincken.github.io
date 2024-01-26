import styles from './Button.module.css';
import classnames from 'classnames';

interface Button {
  type?: 'primary' | 'secondary';
  children: string;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({type, children, size}: Button) => {
  const types = classnames({
    [styles.primary]: type === 'primary',
    [styles.secondary]: type === 'secondary'
  });

  const sizes = classnames({
    [styles.small]: size === 'small' ,
    [styles.medium]: size === 'medium' ,
    [styles.large]: size === 'large' ,
  })

  return <button className={`${styles.btn} ${types} ${sizes}`}>{children}</button>;
};
