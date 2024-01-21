import { Jumbotron, ScrollToTop, Table } from '@/components/Elements'
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
