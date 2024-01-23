import styles from './Jumbotron.module.css'

export const Jumbotron = () => {
  return (
    <section id={`home`} className={styles.jumbotron}>
      <p>This is a Jumbotron</p>
    </section>
  )
}