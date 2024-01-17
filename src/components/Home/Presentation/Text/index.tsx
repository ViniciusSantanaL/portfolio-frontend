export function Text() {
  return (
    <aside className="max-w-[500px]">
      <div className="lg:min-w-[500px]">
        <span className="text-purple-500 font-bold tracking-widest">
          Olá, meu nome é
        </span>
        <h1 className="w-full mt-2 text-4xl md:text-[56px] tracking-[.1em] mb-2 font-bold">
          <span className="">Vinícius Leão </span>
          <span className="animate-waving-hand">👨🏻‍💻</span>
        </h1>
      </div>
      <div className="flex w-full mb-4">
        <span className="text-center w-full py-2 rounded-lg font-bold tracking-[.20em] mr-4 bg-purple-750 text-lg">
          Full Stack
        </span>
        <span className="text-center w-full py-2 rounded-lg font-bold tracking-[.20em] bg-neutral-50 text-purple-750 text-lg">
          Developer
        </span>
      </div>

      <p className="text-4xl font-bold">
        Transformando <span className="text-purple-500">ideias</span> complexas
        em soluções tecnológicas robustas e{' '}
        <span className="text-purple-500">inovadoras</span>.
      </p>
    </aside>
  )
}
