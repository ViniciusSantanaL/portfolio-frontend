import { motion } from 'framer-motion'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FaGithubSquare } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import Me from 'src/assets/me.jpeg'
import styles from './styles.module.scss'

export function AboutProfile() {
  return (
    <div className={styles['about-profile-container']}>
      <img src={Me} className={styles['about-profile-image']} alt="" />
      <h2>Vinícius Leão</h2>
      <span>
        <BiMap /> Brazil - Brasília
      </span>
      <div className={styles['about-profile-icons']}>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ ease: 'easeOut' }}>
          <FaGithubSquare className={styles['github-icon']} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ ease: 'easeOut' }}>
          <AiFillLinkedin className={styles['linkedin-icon']} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ ease: 'easeOut' }}>
          <ImInstagram className={styles['instagram-icon']} />
        </motion.a>
      </div>
    </div>
  )
}
