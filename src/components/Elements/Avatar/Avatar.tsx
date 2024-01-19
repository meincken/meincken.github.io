import Image from "next/image"

export const Avatar = () => {
  const avatar = 'https://nickmeincken.me/static/3cafae7743c8117805b30c89e70f0a9c/b5014/profilepic.webp';
  const description = 'Nick Meincken';
  return (
    <Image
      className="avatar"
      src={avatar}
      alt={description}
      width={150}
      height={150}
    />
  );
}