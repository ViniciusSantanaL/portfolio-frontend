import styles from './styles.module.scss'
import Image from 'next/image'

export function Animations() {
  return (
    <div className="w-full flex items-center  justify-center lg:justify-end ">
      <div className="relative w-full max-w-xs lg:max-w-md">
        <Image
          width={500}
          height={500}
          className="relative animate-float w-full"
          src="/assets/astronaut-hello.png"
          alt=""
        />
        <div className="absolute -z-10 right-[39%] top-[20%] shadow-glow w-[20%] h-[55%] rounded-full opacity-70 animate-float" />
        <Image
          width={80}
          height={80}
          src="/assets/github-icon.png"
          alt=""
          className="w-[18%] absolute bg-gray-850 rounded-full right-4 top-0 p-0.5 shadow-gitGlow animate-floatGit"
        />
        <Image
          width={80}
          height={80}
          className="w-[18%] absolute bottom-[10rem] left-0  top-0 lg:top-[-40px] bg-gray-850 rounded-full p-2 shadow-javaGlow animate-floatJava"
          src="/assets/java-icon.png"
          alt=""
        />
        <Image
          width={80}
          height={80}
          className="w-[18%] absolute bottom-0 right-0  p-2 bg-gray-850 rounded-full shadow-reactGlow animate-floatReact"
          src="/assets/react-icon.png"
          alt=""
        />
      </div>
    </div>
  )
}
