import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Repos } from '@/model/Repos.types'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  repo: Repos
}
export function Card({ repo }: CardProps) {
  return (
    <div className="w-full max-h-[150px] rounded-lg bg-gray-850 mb-4 p-4 flex flex-col justify-between">
      <h2>{repo.name}</h2>
      <p>{repo.description ?? 'No has description!'}</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <span
            className={twMerge(
              'flex items-center gap-4',
              `before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-blue-550`,
            )}
          >
            HTML
          </span>
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
