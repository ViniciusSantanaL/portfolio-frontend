import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SelectInput, { InputHandle } from "./Input";
import { Dropdown, DropdownItem } from "./Dropdown";
import styles from "./styles.module.scss";

interface SelectProps {
  label: string;
  items: Array<DropdownItem>;
  handleSelectItem: (value: DropdownItem) => void;
}

export function Select({ label, items, handleSelectItem }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectInput, setSelectInput] = useState<string>();

  const inputRef = useRef<InputHandle>(null);

  const itemFiltered = items.filter(
    (item) =>
      !selectInput || item.label.toLocaleLowerCase().includes(selectInput.toLocaleLowerCase())
  );

  const handleChangeInput = (value: string) => setSelectInput(value);
  const handleSelectOpen = (value: boolean) => setIsOpen(value);
  const setDropdownItem = (item: DropdownItem) => {
    handleSelectItem(item);
    setSelectInput("");
    inputRef.current?.clearInput();
  };

  return (
    <motion.div className={styles["select-container"]} animate={isOpen ? "open" : "closed"}>
      <SelectInput
        label={label}
        ref={inputRef}
        isOpen={isOpen}
        handleSelectOpen={handleSelectOpen}
        handleChangeInput={handleChangeInput}
      />
      <Dropdown isOpen={isOpen} items={itemFiltered} handleSelectItem={setDropdownItem} />
    </motion.div>
  );
}
