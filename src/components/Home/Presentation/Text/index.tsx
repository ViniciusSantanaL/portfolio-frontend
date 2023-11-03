import styles from './styles.module.scss'

export function Text() {
  return (
    <aside className="max-w-[460px] text-justify">
      <h1 className="text-shadow-principal tracking-wide text-4xl">
        Hi! I&apos;m Vinícius Leão
      </h1>
      <div className="flex w-full">
        <span className="text-center w-full py-2 rounded-lg font-bold tracking-wide mr-4 bg-purple-750">
          Full Stack
        </span>
        <span className="text-center w-full py-2 rounded-lg font-bold tracking-wide mr-4 bg-neutral-50 text-purple-750">
          Developer
        </span>
      </div>

      <p className="mt-4">
        I&apos;m have 21 years old and I&apos;m from Brazil. Programmer is my
        favorite hoobiee. I&apos;m have 21 years old and I&apos;m from Brazil.
        Programmer is my favorite hoobiee I&apos;m have 21 years old and
        I&apos;m from Brazil. Programmer.
      </p>
      <div>
        <h2>Java & React.js</h2>
      </div>
    </aside>
  )
}
