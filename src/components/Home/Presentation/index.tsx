import { Animations } from './Animations'
import { Text } from './Text'

export function Presentation() {
  return (
    <section className="h-screen flex items-center justify-center lg:justify-between animate-fadeIn flex-col lg:flex-row gap-10">
      <Text />
      <Animations />
    </section>
  )
}
