import { About } from '@/components/Home/About'
import { Project } from '@/components/Home/Project'
import { Works } from '@/components/Home/Works'
import { Presentation } from '@/components/Home/Presentation'
import { Header } from '@/components/Header'
import './styles.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Works />
        <Project />
      </main>
      <footer>
        <h1>Hello</h1>
      </footer>
    </>
  )
}
