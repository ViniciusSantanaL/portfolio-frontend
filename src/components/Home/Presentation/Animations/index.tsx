import astronaut from 'src/assets/astronaut-hello.png'
import githubIcon from 'src/assets/github-icon.png'
import javaIcon from 'src/assets/java-icon.png'
import reactIcon from 'src/assets/react-icon.png'
import styles from './styles.module.scss'

export function Animations() {
  return (
    <div className={styles['animation-container']}>
      <div className={styles.glow} />
      <img className={styles.astronaut} src={astronaut} alt="" />
      <img className={styles['java-icon']} src={javaIcon} alt="" />
      <img className={styles['react-icon']} src={reactIcon} alt="" />
      <img className={styles['github-icon']} src={githubIcon} alt="" />
    </div>
  )
}
