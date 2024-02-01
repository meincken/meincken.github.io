import { Avatar, Heading, Button } from '@/components/Atoms'

export const About = () => {
  return (
    <article id={`about`} className={`about`}>
      <Avatar size='large' />
      <div>
        <Heading variant='heading-1' color='white' classNameOverride='test'>Meincken</Heading>
        <Button size={`large`} type={`primary`}>Test</Button>
      </div>
    </article>
  );
}
