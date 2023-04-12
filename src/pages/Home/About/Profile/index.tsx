import styles from "./styles.module.scss";
import Me from "src/assets/me.jpeg";
import { BiMap } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { motion } from "framer-motion";

export function AboutProfile() {
  return (
    <div className={styles["about-profile-container"]}>
      <img src={Me} className={styles["about-profile-image"]} />
      <h2>Vinícius Leão</h2>
      <span>
        <BiMap /> Brazil - Brasília
      </span>
      <div className={styles["about-profile-icons"]}>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ ease: "easeOut" }}>
          <FaGithubSquare className={styles["github-icon"]} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ ease: "easeOut" }}>
          <AiFillLinkedin className={styles["linkedin-icon"]} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ ease: "easeOut" }}>
          <ImInstagram className={styles["instagram-icon"]} />
        </motion.a>
      </div>
    </div>
  );
}
