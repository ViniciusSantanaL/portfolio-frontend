import { twMerge } from 'tailwind-merge'
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
    <div className="flex gap-4">
      {Array(carouselSize)
        .fill(null)
        .map((__, index) => (
          <button
            key={index}
            onClick={() => setActualIndexWork(index)}
            className={twMerge(
              'w-[80px] h-[15px] border-[2px] border-neutral-50 cursor-pointer',
              'first:rounded-l-2xl',
              'last:rounded-r-2xl',
              `${
                index === currentStepIndex
                  ? 'bg-neutral-50 transition-colors'
                  : ''
              }`,
            )}
          ></button>
        ))}
    </div>
  )
}
