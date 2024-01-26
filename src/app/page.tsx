import { Jumbotron, ScrollToTop } from '@/components/Elements'
import { Button } from '@/components/Atoms'
import { About } from '@/components/Sections'

export default function Home() {
  return (
    <>
      <Jumbotron />
      <main>
        <About />
        <Button size={`large`} type={`primary`} children='Button Test' />
        <ScrollToTop />
      </main>
    </>
  )
}
