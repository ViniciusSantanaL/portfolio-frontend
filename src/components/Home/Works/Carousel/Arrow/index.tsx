import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

type ArrowProps = {
  direction: 'right' | 'left'
  onClickEvent: () => void
}

const arrow = tv({
  base: 'cursor-pointer inline-block border-neutral-50 border-r-[13px] border-b-[13px] p-10',
  variants: {
    variant: {
      left: 'rotate-[135deg] mr-20',
      right: 'rotate-[-45deg] ml-20',
    },
  },
})

export function Arrow({ direction, onClickEvent }: ArrowProps) {
  return (
    <motion.button
      className="hidden max-w-[250px] max-h-[250px] lg:flex items-center justify-center rounded-full cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClickEvent}
    >
      <i className={arrow({ variant: direction })}></i>
    </motion.button>
  )
}
