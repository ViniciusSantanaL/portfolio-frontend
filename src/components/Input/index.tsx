import { HTMLMotionProps, motion } from 'framer-motion'
import {
  ButtonHTMLAttributes,
  ForwardedRef,
  InputHTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useRef,
} from 'react'
import styles from './styles.module.scss'

interface InputProps {
  label: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  inputButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>
  motionProps?: HTMLMotionProps<'div'>
  onBlur?: () => void
  onFocus?: () => void
  handleClickIcon?: () => void
  onBlurButton?: () => void
  onButtonMouseHover?: () => void
  onButtonMouseLeave?: () => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}

export const MyInput = forwardRef(function Input(
  {
    label,
    inputProps,
    inputButtonProps,
    motionProps,
    children,
  }: PropsWithChildren<InputProps>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const refInput = useRef<HTMLInputElement | null>(null)

  const onClickIcon = () => {
    if (!ref) {
      if (refInput !== null && refInput.current !== null) {
        refInput.current.focus()
      }
    }
  }

  return (
    <motion.div
      className={styles['custom-input-container']}
      {...motionProps}
      tabIndex={-2}
    >
      <input
        id={label}
        ref={ref ?? refInput}
        className={styles['custom-input']}
        placeholder=" "
        {...inputProps}
      />
      <label htmlFor={label} className={styles['custom-input-label']}>
        {label}
      </label>
      {children && (
        <button
          tabIndex={-1}
          onClick={inputButtonProps?.onClick ?? onClickIcon}
          {...inputButtonProps}
        >
          {children}
        </button>
      )}
    </motion.div>
  )
})
