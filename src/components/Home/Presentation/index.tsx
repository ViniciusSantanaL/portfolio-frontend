import { Animations } from './Animations'
import { Text } from './Text'

export function Presentation() {
  return (
    <section className="min-h-app pt-[80px] mt-[40px] flex items-center justify-center lg:justify-between animate-fadeIn flex-col lg:flex-row gap-14 opacity-0">
      <Text />
      <Animations />
    </section>
  )
}
