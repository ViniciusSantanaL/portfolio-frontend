import styles from './styles.module.scss'

export function Text() {
  return (
    <aside className={styles['text-container']}>
      <h1>Hi! I&apos;m Vinícius Leão</h1>
      <div className={styles['tags-container']}>
        <span>Full Stack</span>
        <span>Developer</span>
      </div>

      <p>
        I&apos;m have 21 years old and I&apos;m from Brazil. Programmer is my
        favorite hoobiee. I&apos;m have 21 years old and I&apos;m from Brazil.
        Programmer is my favorite hoobiee I&apos;m have 21 years old and
        I&apos;m from Brazil. Programmer
      </p>
      <div>
        <h2>Java & React.js</h2>
      </div>
    </aside>
  )
}
