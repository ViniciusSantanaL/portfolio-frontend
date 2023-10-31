import { useCallback, useEffect, useState } from 'react'
import { baseUrl, useApi } from 'src/hooks/useApi'
import { Repos } from 'src/model/Repos.types'
import { Card } from 'src/pages/Home/Project/ListCard/Card'
import { ControlListCard } from 'src/pages/Home/Project/ListCard/ControlCard'
import styles from './styles.module.scss'
export function ListCard() {
  const [repos, setRepos] = useState<Repos[]>([])
  const [actualPositions, setActualPositions] = useState({
    start: 0,
    end: 4,
  })
  const reposActual = repos.slice(actualPositions.start, actualPositions.end)
  const api = useApi()

  const fetchRepos = useCallback(async () => {
    const { data } = await api.get<Repos[]>(`${baseUrl}/repos`)
    setRepos(data)
  }, [api])

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <div className={styles['cards-container']}>
      {reposActual.map((item, _id) => (
        <Card key={_id} repo={item} />
      ))}
      <ControlListCard
        listCardSize={repos.length}
        setActualPositions={setActualPositions}
        actualPositions={actualPositions}
      />
    </div>
  )
}
