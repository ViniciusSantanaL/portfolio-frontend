import styles from "./styles.module.scss";
import Me from "src/assets/me.jpeg";
import { BiMap } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

export function AboutProfile() {
  return (
    <div className={styles["about-profile-container"]}>
      <img src={Me} className={styles["about-profile-image"]} />
      <h2>Vinícius Leão</h2>
      <span>
        <BiMap /> Brazil - Brasília
      </span>
      <div className={styles["about-profile-icons"]}>
        <FaGithubSquare />
        <AiFillLinkedin />
        <ImInstagram />
      </div>
    </div>
  );
}
