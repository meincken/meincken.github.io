import { Jumbotron, ScrollToTop, Button } from '@/components/Elements'
import { About } from '@/components/Sections'

export default function Home() {
  return (
    <>
      <Jumbotron />
      <main>
        <About />
        <Button size={`lg`} variant='primary'>Test</Button>
        <ScrollToTop />
      </main>
    </>
  )
}
