import { AboutDescription } from "./Description";
import { AboutProfile } from "./Profile";
import { useScroll, motion } from "framer-motion";
import { useEffect } from "react";
import BabyYoda from "src/assets/baby-yoda.png";
import styles from "./styles.module.scss";

export function About() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <section className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <motion.img
          src={BabyYoda}
          className={styles["about-baby-yoda"]}
          whileInView={{ opacity: 1, y: "-58%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <AboutProfile />
        <AboutDescription />
      </div>
    </section>
  );
}
