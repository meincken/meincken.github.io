import { Jumbotron } from '@/components/Elements'
import { ScrollToTop } from '@/components/Atoms'
import { About } from '@/components/Sections'

export default function Home() {
  return (
    <>
      <Jumbotron />
      <main>
        <About />
        <ScrollToTop />
      </main>
    </>
  )
}
