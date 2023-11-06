import { About } from '@/components/Home/About'
import { Project } from '@/components/Home/Project'
import { Works } from '@/components/Home/Works'
import { Presentation } from '@/components/Home/Presentation'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1116px] mx-auto px-4 relative">
        <Presentation />
        <About />
        <Works />
        <Project />
      </main>
    </>
  )
}
