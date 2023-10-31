import styles from 'src/pages/Home/Project/ListCard/ControlCard/styles.module.scss'
import React, { useCallback } from 'react'

interface ControlListCardProps {
  listCardSize: number
  actualPositions: {
    start: number
    end: number
  }
  setActualPositions: React.Dispatch<
    React.SetStateAction<{ start: number; end: number }>
  >
}
export function ControlListCard({
  listCardSize,
  actualPositions,
  setActualPositions,
}: ControlListCardProps) {
  const pageSize = Math.round(listCardSize / 4)

  const handleNextPage = useCallback(() => {
    setActualPositions({
      start: actualPositions.start + 4,
      end: actualPositions.end + 4,
    })
  }, [actualPositions])

  return (
    <div className={styles['control-cards-container']}>
      <button className={styles['control-cards-previous-button']}>
        PREVIOUS
      </button>
      <div className={styles['control-cars-span-container']}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...10</span>
      </div>
      <button className={styles['control-cards-next-button']}>NEXT</button>
    </div>
  )
}
