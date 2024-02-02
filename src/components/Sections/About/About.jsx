import { Avatar, Heading } from '@/components/Atoms'

export const About = () => {
  return (
    <article id={`about`} className={`about container`}>
      <div className='col-span-2'>
        <Avatar size='large' />
      </div>
      <div className='col-span-8'>
        <Heading variant='heading-2' color='white'>About Me</Heading>
        <p>I am an experienced AEM Front End Developer. I specialise in creating clean semantic code to ensure fast load times. A champion of atomic design principles and where possible, develop style guides and pattern libraries to ensure consistent and rapid development when working as part of a team. I am as comfortable coding in raw HTML as I am using products such as React. I enjoy working as part of an Agile team and have worked on some of the countries largest e-commerce sites.</p>
      </div>
    </article>
  );
}
