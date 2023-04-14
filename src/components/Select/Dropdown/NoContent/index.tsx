import { HiOutlineEmojiSad } from "react-icons/hi";
import styles from "./styles.module.scss";

export function DropdownNoContent() {
  return (
    <div className={styles["dropdown-no-content"]}>
      <HiOutlineEmojiSad />
      <span>Sorry, Not Found this Technology !</span>
    </div>
  );
}
