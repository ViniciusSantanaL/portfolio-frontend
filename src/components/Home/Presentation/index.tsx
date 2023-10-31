import { Animations } from './Animations'
import { Text } from './Text'
import styles from './styles.module.scss'

export function Presentation() {
  return (
    <section className={styles['presentation-container']}>
      <Text />
      <Animations />
    </section>
  )
}
