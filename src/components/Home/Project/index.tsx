import { ListCard } from './ListCard'
import { Research } from './Research'

export function Project() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center flex-col gap-4 my-4">
      <h2 className="text-5xl text-shadow-principal mb-8">Projects</h2>
      <Research />
      <ListCard />
    </section>
  )
}
