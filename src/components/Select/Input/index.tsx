import { useRef, forwardRef, useState } from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { MyInput } from "src/components/Input";

interface SelectInputProps {
  label: string;
  isOpen: boolean;
  handleSelectOpen: (isOpen: boolean) => void;
}

export const SelectInput = forwardRef(function ({
  label,
  isOpen,
  handleSelectOpen,
}: SelectInputProps) {
  const [isMouseHover, setIsMouseHover] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleMouseOver = () => setIsMouseHover(true);
  const handleMouseLeave = () => setIsMouseHover(false);

  const handleCloseDropDown = () => {
    if (!isMouseHover) {
      handleSelectOpen(false);
    }
  };

  const handleClickInputIcon = () => {
    if (inputRef.current) {
      if (!isOpen) {
        inputRef.current.focus();
        handleSelectOpen(true);
      } else {
        handleSelectOpen(false);
      }
    }
  };

  return (
    <MyInput
      label={label}
      ref={inputRef}
      whileTap={{ scale: 0.97 }}
      onButtonMouseHover={handleMouseOver}
      onButtonMouseLeave={handleMouseLeave}
      onBlur={handleCloseDropDown}
      handleClickIcon={handleClickInputIcon}
    >
      <HiArrowSmDown
        style={{
          transition: `transform 0.5s ease-in-out`,
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
        }}
      />
    </MyInput>
  );
});
