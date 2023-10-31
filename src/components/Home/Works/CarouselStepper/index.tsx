import styles from './styles.module.scss'

interface CarouselStepperProps {
  carouselSize: number
  currentStepIndex: number
  setActualIndexWork: React.Dispatch<React.SetStateAction<number>>
}

export function CarouselStepper({
  carouselSize,
  currentStepIndex,
  setActualIndexWork,
}: CarouselStepperProps) {
  return (
    <div className={styles['carousel-stepper-container']}>
      {Array(carouselSize)
        .fill(null)
        .map((__, index) => (
          <div
            key={index}
            onClick={() => setActualIndexWork(index)}
            className={`${styles['carousel-step']} ${
              index === currentStepIndex ? styles.current : ''
            }`}
          ></div>
        ))}
    </div>
  )
}
