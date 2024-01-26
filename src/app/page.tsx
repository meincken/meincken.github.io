import { Jumbotron } from '@/components/Elements'
import { Button, ScrollToTop } from '@/components/Atoms'
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
