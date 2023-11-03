import styles from './styles.module.scss'
import Image from 'next/image'

export function Animations() {
  return (
    <div className="w-full flex items-center  justify-center lg:justify-end ">
      <Image
        width={500}
        height={500}
        className="relative"
        src="/assets/astronaut-hello.png"
        alt=""
      />
      {/* <div className={styles.glow} /> */}
      <Image
        width={80}
        height={80}
        src="/assets/github-icon.png"
        alt=""
        className="absolute bg-gray-850 rounded-full right-4 top-52 p-0.5"
      />
      <Image
        width={80}
        height={80}
        className="absolute bottom-[10rem] left-0 bg-gray-850 rounded-full p-2"
        src="/assets/java-icon.png"
        alt=""
      />
      {/*  <Image
        width={80}
        height={80}
        className={styles['github-icon']}
        src="/assets/react-icon.png"
        alt=""
      /> */}
    </div>
  )
}
