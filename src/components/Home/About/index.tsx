'use client'

import { motion } from 'framer-motion'
import { AboutDescription } from './Description'
import { AboutProfile } from './Profile'
import styles from './style.module.css'
import Image from 'next/image'

export function About() {
  return (
    <section className="min-h-app w-full flex justify-center items-center mt-28 lg:mt-0 animate-fadeIn opacity-0">
      <div className="w-full relative rounded-xl bg-gray-850 flex flex-col justify-center items-center gap-16 p-8 lg:flex-row">
        <motion.div
          className="max-w-[300px] lg:max-w-[500px] absolute mx-auto top-0 -z-10"
          whileInView={{ opacity: 1, y: '-58%' }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Image src="/assets/baby-yoda.png" width={500} height={500} alt="" />
        </motion.div>
        <AboutProfile />
        <div className="relative flex items-center justify-center w-full lg:w-[0%]">
          <div className={styles.lightsaber}>
            <label htmlFor="windu-example"></label>
            <input type="checkbox" id="windu-example" />
            <div className={styles.switch}></div>
            <div className={`${styles.plasma} ${styles.windu}`}></div>
          </div>
        </div>
        <AboutDescription />
      </div>
    </section>
  )
}
