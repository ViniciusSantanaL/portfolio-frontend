import astronaut from "src/assets/astronaut-hello.png";
import javaIcon from "src/assets/java-icon.png";
import reactIcon from "src/assets/react-icon.png";
import githubIcon from "src/assets/github-icon.png";
import styles from "./styles.module.scss";

export function Animations() {
  return (
    <div className={styles["animation-container"]}>
      <div className={styles.glow} />
      <img className={styles.astronaut} src={astronaut} />
      <img className={styles["java-icon"]} src={javaIcon} />
      <img className={styles["react-icon"]} src={reactIcon} />
      <img className={styles["github-icon"]} src={githubIcon} />
    </div>
  );
}
