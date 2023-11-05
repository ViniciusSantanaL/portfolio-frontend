import { motion } from 'framer-motion'
import { AiFillLinkedin } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi'
import { FaGithubSquare } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import styles from './styles.module.scss'
import Image from 'next/image'

export function AboutProfile() {
  return (
    <div className="flex flex-col items-center w-[100%] lg:w-[30%] lg:min-h-[500px] p-8 bg-gray-925 rounded-xl gap-4">
      <Image
        src="/assets/me.jpeg"
        width={200}
        height={200}
        className="rounded-xl"
        alt=""
      />
      <h2 className="text-center w-[200px] text-3xl font-medium">
        Vinícius Leão
      </h2>
      <div className="flex justify-around items-center w-[200px] gap-4">
        <motion.a
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ ease: 'easeOut' }}
        >
          <FaGithubSquare className="text-icon-1" />
        </motion.a>
        <motion.a
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ ease: 'easeOut' }}
        >
          <AiFillLinkedin className="text-icon-2" />
        </motion.a>
        <motion.a
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ ease: 'easeOut' }}
        >
          <ImInstagram className="text-icon-3" />
        </motion.a>
      </div>
    </div>
  )
}
