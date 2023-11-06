'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Dropdown, DropdownItem } from './Dropdown'
import SelectInput, { InputHandle } from './Input'
import styles from './styles.module.css'

interface SelectProps {
  label: string
  items: Array<DropdownItem>
  handleSelectItem: (value: DropdownItem) => void
}

export function Select({ label, items, handleSelectItem }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectInput, setSelectInput] = useState<string>()

  const inputRef = useRef<InputHandle>(null)

  const itemFiltered = items.filter(
    (item) =>
      !selectInput ||
      item.label.toLocaleLowerCase().includes(selectInput.toLocaleLowerCase()),
  )

  const handleChangeInput = (value: string) => setSelectInput(value)
  const handleSelectOpen = (value: boolean) => setIsOpen(value)
  const setDropdownItem = (item: DropdownItem) => {
    handleSelectItem(item)
    setSelectInput(item.label)
    inputRef.current?.handleChangeInputValue(item.label)
  }

  return (
    <motion.div
      className={styles['select-container']}
      animate={isOpen ? 'open' : 'closed'}
    >
      <SelectInput
        label={label}
        ref={inputRef}
        isOpen={isOpen}
        handleSelectOpen={handleSelectOpen}
        handleChangeInput={handleChangeInput}
      />
      {isOpen && (
        <Dropdown
          isOpen={isOpen}
          items={itemFiltered}
          handleSelectItem={setDropdownItem}
        />
      )}
    </motion.div>
  )
}
