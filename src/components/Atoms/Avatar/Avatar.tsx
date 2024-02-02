import Image from "next/image"
import styles from './Avatar.module.css';
import classnames from 'classnames';

interface Avatar {
  size?: 'small' | 'medium' | 'large';
}

export const Avatar = ({size}: Avatar) => {
  const sizes = classnames({
    [styles.avatar_small]: size === 'small' ,
    [styles.avatar_medium]: size === 'medium' ,
    [styles.avatar_large]: size === 'large' ,
  })

  const avatar = 'https://nickmeincken.me/static/3cafae7743c8117805b30c89e70f0a9c/b5014/profilepic.webp';
  const description = 'Nick Meincken';

  return (
    <Image
      className={`${styles.avatar} ${sizes}`}
      src={avatar}
      alt={description}
      width={200}
      height={200}
    />

  );
}
