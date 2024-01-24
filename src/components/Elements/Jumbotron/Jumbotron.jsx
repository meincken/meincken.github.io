import styles from './Jumbotron.module.css'

export const Jumbotron = () => {
  return (
    <section id={`home`} className={styles.jumbotron}>
      <div>
        <p>Hi, my name is Nick Meincken.</p>
        <p>I am a Front End Developer living in Surbiton Surrey.</p>
        <p></p>
      </div>    
    </section>
  )
}