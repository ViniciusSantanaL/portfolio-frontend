'use client'

import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { AboutDescription } from './Description'
import { AboutProfile } from './Profile'

import styles from './style.module.css'

export function About() {
  const descriptionRef = useRef(null)
  const isInView = useInView(descriptionRef)

  const labelRef = useRef<HTMLLabelElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isInView && !inputRef.current?.checked) {
      labelRef.current?.click()
    }
  }, [isInView])

  return (
    <section className="min-h-screen w-full flex justify-center items-center mt-28 lg:mt-0 animate-fadeIn opacity-0">
      <div className="w-full rounded-xl flex flex-col justify-center items-center gap-16 md:p-8 lg:flex-row">
        <AboutDescription ref={descriptionRef} />
        <div className="relative flex items-center justify-center w-full lg:w-[0%]">
          <div className={styles.lightsaber}>
            <label htmlFor="windu-example" ref={labelRef}></label>
            <input type="checkbox" id="windu-example" ref={inputRef} />
            <div className={styles.switch}></div>
            <div className={`${styles.plasma} ${styles.windu}`}></div>
          </div>
        </div>
        <AboutProfile />
      </div>
    </section>
  )
}
