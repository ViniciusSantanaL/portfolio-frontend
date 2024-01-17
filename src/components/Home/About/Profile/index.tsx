import { motion } from 'framer-motion'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FaGithubSquare } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import Image from 'next/image'

export function AboutProfile() {
  return (
    <motion.div
      className="mt-10 p-8 bg-gray-925 rounded-xl relative grayscale hover:grayscale-0 duration-500"
      whileHover={{ scale: 1.05 }}
      transition={{ ease: 'easeOut' }}
    >
      <motion.div
        className="max-w-[300px] lg:max-w-[360px] absolute top-0 right-5  lg:right-1 -z-10"
        whileInView={{ opacity: 1, y: '-58%' }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image src="/assets/baby-yoda.png" width={500} height={500} alt="" />
      </motion.div>
      <Image
        src="/assets/me-orignal.jpeg"
        width={300}
        height={300}
        className="rounded-xl"
        alt=""
      />
      <h2 className="mt-4 text-center w-[200px] text-3xl font-medium">
        Vinícius Leão
      </h2>
    </motion.div>
  )
}
