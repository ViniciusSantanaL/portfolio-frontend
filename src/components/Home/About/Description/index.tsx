import { ComponentPropsWithoutRef, forwardRef } from 'react'

type AboutDescriptionProps = ComponentPropsWithoutRef<'li'>

export const AboutDescription = forwardRef<HTMLLIElement>(
  (props: AboutDescriptionProps, ref) => {
    return (
      <div>
        <div className="w-full pl-5 mb-2 flex items-center gap-4">
          <h2 className="text-3xl flex-shrink-0 font-light">Sobre mim </h2>
          <div className="w-full h-[1px] bg-white opacity-30"></div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 bg-gray-925 gap-4 rounded-xl">
          <p className="text-gray-400">
            Olá, eu sou <span className="text-white">Vinícius Leão</span>, um
            desenvolvedor Full Stack de 22 anos com uma paixão ardente por criar
            soluções digitais que deixam uma marca. Atualmente, estou concluindo
            meu curso de{' '}
            <span className="text-white">Ciências da Computação</span> e já
            acumulei mais de quatro anos de experiência na área.
          </p>

          <p className="text-gray-400">
            Sou apaixanado por tecnologia e todo seu universo, mas sou fan de
            carterinha das linguagens <span className="text-white">Java</span> e{' '}
            <span className="text-white">TypeScript</span>. Acredito firmemente
            que a chave para sistemas excepcionais está na combinação de um
            código bem escrito com uma compreensão profunda das{' '}
            <span className="text-white">necessidades do usuário</span>.
          </p>
          <p className="text-gray-400">
            Fora do mundo do código, meus hobbies incluem jogar videogames e
            valorizar momentos preciosos com a{' '}
            <span className="text-white">família</span> e{' '}
            <span className="text-white">amigos</span>. Essas pausas da tela não
            apenas recarregam minhas energias, mas também me proporcionam uma
            perspectiva fresca e criativa que aplico no meu trabalho.
          </p>
        </div>
        <div className="pl-5 mt-2">
          <p className="text-gray-400">Principais tecnologias:</p>
          <ul className="grid grid-cols-3 gap-2">
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>Java
            </li>
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>TypeScript
            </li>
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>AWS
            </li>
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>Spring Boot
            </li>
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>React.js
            </li>
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>Kafka
            </li>
            <li className="text-gray-400" ref={ref}>
              <span className="text-purple-500 text-lg mr-2">▹</span>Spring
              WebFlux
            </li>
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>Tailwind
            </li>
            <li className="text-gray-400">
              <span className="text-purple-500 text-lg mr-2">▹</span>Docker
            </li>
          </ul>
        </div>
      </div>
    )
  },
)
