import { motion, useAnimationControls } from 'framer-motion'
import { Work } from '@/model/Work.types'
import { Arrow } from './Arrow'
import { Card } from './Card'
import styles from './styles.module.scss'

interface CarouselProps {
  works: Array<Work>
  actualIndexWork: number
  setActualIndexWork: React.Dispatch<React.SetStateAction<number>>
}
export function Carousel({
  works,
  actualIndexWork,
  setActualIndexWork,
}: CarouselProps) {
  const controls = useAnimationControls()
  const getPreviousOrNextIndex = (
    currentIndex: number,
    direction: 'previous' | 'next',
    lastIndex: number,
  ) => {
    if (direction === 'previous') {
      return currentIndex === 0 ? lastIndex : currentIndex - 1
    } else if (direction === 'next') {
      return currentIndex === lastIndex ? 0 : currentIndex + 1
    } else {
      return currentIndex
    }
  }

  const handleNextWork = (): void => {
    controls.start({ opacity: 0 })
    const lastIndex = works.length - 1
    const nextPosition = getPreviousOrNextIndex(
      actualIndexWork,
      'next',
      lastIndex,
    )
    setTimeout(() => {
      setActualIndexWork(nextPosition)
      controls.start({ opacity: 1, transition: { ease: 'easeIn' } })
    }, 200)
  }

  const handlePreviousWork = (): void => {
    controls.start({ opacity: 0 })
    const lastIndex = works.length - 1
    const previousIndex = getPreviousOrNextIndex(
      actualIndexWork,
      'previous',
      lastIndex,
    )
    setTimeout(() => {
      setActualIndexWork(previousIndex)
      controls.start({ opacity: 1, transition: { ease: 'easeIn' } })
    }, 200)
  }

  return (
    <div className="max-w-[1110px] rounded-xl flex justify-between items-center">
      <Arrow direction="left" onClickEvent={handlePreviousWork} />
      <motion.div animate={controls}>
        <Card work={works[actualIndexWork]} />
      </motion.div>
      <Arrow direction="right" onClickEvent={handleNextWork} />
    </div>
  )
}
