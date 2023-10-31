import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Repos } from 'src/model/Repos.types'
import styles from 'src/pages/Home/Project/ListCard/Card/styles.module.scss'

interface CardProps {
  repo: Repos
}
export function Card({ repo }: CardProps) {
  return (
    <div className={styles['card-container']}>
      <h2>{repo.name}</h2>
      <p>{repo.description ?? 'No has description!'}</p>
      <div className={styles['card-content-container']}>
        <div>
          <span className={styles['principle-language']}>HTML</span>
          <span>
            {repo.stargazers_count} <FontAwesomeIcon icon={faStar} />
          </span>
          <span>
            {repo.forks_count} <FontAwesomeIcon icon={faCodeFork} />
          </span>
        </div>
        <button>
          <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
            Acessar
          </a>
        </button>
      </div>
    </div>
  )
}
