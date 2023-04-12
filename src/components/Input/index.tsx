import { useRef, forwardRef, InputHTMLAttributes, PropsWithChildren, ForwardedRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import styles from "./styles.module.scss";

interface InputProps extends HTMLMotionProps<"div"> {
  label: string;
  type?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  onBlur?: () => void;
  onFocus?: () => void;
  handleClickIcon?: () => void;
  onBlurButton?: () => void;
  onButtonMouseHover?: () => void;
  onButtonMouseLeave?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const MyInput = forwardRef(function Input(
  {
    label,
    type = "text",
    inputProps,
    onBlur,
    onFocus,
    handleClickIcon,
    onBlurButton,
    onButtonMouseHover,
    onButtonMouseLeave,
    onKeyDown,
    children,
    ...props
  }: PropsWithChildren<InputProps>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const refInput = useRef<HTMLInputElement | null>(null);

  const onClickIcon = () => {
    if (!ref) {
      refInput.current!.focus();
    }
  };

  return (
    <motion.div className={styles["custom-input-container"]} {...props} tabIndex={-2}>
      <input
        type="text"
        id={label}
        ref={ref ?? refInput}
        className={styles["custom-input"]}
        placeholder=" "
        onBlur={onBlur}
      />
      <label htmlFor={label} className={styles["custom-input-label"]}>
        {label}
      </label>
      {children && (
        <button
          tabIndex={-1}
          onMouseLeave={onButtonMouseLeave}
          onMouseEnter={onButtonMouseHover}
          onBlur={onBlurButton}
          onClick={handleClickIcon ?? onClickIcon}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
});
