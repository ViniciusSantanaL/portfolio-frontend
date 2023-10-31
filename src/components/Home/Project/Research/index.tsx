import { MyInput } from 'src/components/Input'
import { Select } from 'src/components/Select'
import { useApi } from 'src/hooks/useApi'
import { Technology } from 'src/model/Technology.types'
import styles from './styles.module.scss'

export function Research() {
  const api = useApi()
  const technologies: Technology[] = [
    { label: 'Java', value: 1, imagePath: 'src/assets/java-icon.png' },
    { label: 'React', value: 2, imagePath: 'src/assets/java-icon.png' },
    { label: 'CSS', value: 3, imagePath: 'src/assets/java-icon.png' },
    { label: 'SASS', value: 4, imagePath: 'src/assets/java-icon.png' },
    { label: 'C', value: 5, imagePath: 'src/assets/java-icon.png' },
  ]

  const handleTechnology = (technology: Technology) => {
    api.get('https://github-api')
  }

  return (
    <div className={styles['research-container']}>
      <div className={styles['research-content']}>
        <div className={styles['group-input']}>
          <MyInput label="Project Name" />
          <Select
            label="Technologies"
            items={technologies}
            handleSelectItem={handleTechnology}
          />
        </div>
      </div>
    </div>
  )
}
