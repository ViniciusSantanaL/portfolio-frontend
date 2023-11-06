import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { HiArrowSmDown } from 'react-icons/hi'
import { MyInput } from '@/components/Input'

interface SelectInputProps {
  label: string
  isOpen: boolean
  handleSelectOpen: (isOpen: boolean) => void
  handleChangeInput: (value: string) => void
}

export interface InputHandle {
  clearInput: () => string
  handleChangeInputValue: (value: string) => void
}

const SelectInput: React.ForwardRefRenderFunction<
  InputHandle,
  SelectInputProps
> = (props, ref) => {
  const [isMouseHover, setIsMouseHover] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleMouseEnter = () => setIsMouseHover(true)
  const handleMouseLeave = () => setIsMouseHover(false)
  const clearInput = () =>
    inputRef != null && inputRef.current ? (inputRef.current.value = '') : ''

  const handleCloseDropDown = () => {
    if (!isMouseHover) {
      props.handleSelectOpen(false)
    }
  }

  const handleChangeInputValue = (newValue: string) => {
    if (inputRef != null && inputRef.current) {
      inputRef.current.value = newValue
    }
  }

  const handleClickInputButton = () => {
    if (inputRef.current) {
      if (!props.isOpen) {
        inputRef.current.focus()
        props.handleSelectOpen(true)
      } else {
        props.handleSelectOpen(false)
      }
    }
  }

  useImperativeHandle(ref, () => {
    return { clearInput, handleChangeInputValue }
  })

  return (
    <MyInput
      ref={inputRef}
      label={props.label}
      motionProps={{ whileTap: { scale: 0.97 } }}
      inputProps={{
        onChange: (e) => props.handleChangeInput(e.target.value),
        onBlur: handleCloseDropDown,
      }}
      inputButtonProps={{
        onClick: handleClickInputButton,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }}
    >
      <HiArrowSmDown
        style={{
          margin: '13px 10px',
          transition: `transform 0.5s ease-in-out`,
          transform: `rotate(${props.isOpen ? 180 : 0}deg)`,
        }}
      />
    </MyInput>
  )
}

export default forwardRef(SelectInput)
