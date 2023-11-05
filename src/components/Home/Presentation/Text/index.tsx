import styles from './styles.module.scss'

export function Text() {
  return (
    <aside className="max-w-[460px] text-justify">
      <h1 className="text-shadow-principal text-4xl font-medium tracking-[.1em] mb-2">
        Hi! I&apos;m Vinícius Leão{' '}
        <span className="inline-block animate-waving-hand">👋</span>
      </h1>
      <div className="flex w-full mb-4">
        <span className="text-center w-full py-2 rounded-lg font-bold tracking-[.20em] mr-4 bg-purple-750">
          Full Stack
        </span>
        <span className="text-center w-full py-2 rounded-lg font-bold tracking-[.20em] bg-neutral-50 text-purple-750">
          Developer
        </span>
      </div>

      <p>
        I&apos;m have 21 years old and I&apos;m from Brazil. Programmer is my
        favorite hoobiee. I&apos;m have 21 years old and I&apos;m from Brazil.
        Programmer is my favorite hoobiee I&apos;m have 21 years old and
        I&apos;m from Brazil. Programmer.
      </p>
      <div>
        <h2 className="text-2xl font-bold">Java & React.js</h2>
      </div>
    </aside>
  )
}
