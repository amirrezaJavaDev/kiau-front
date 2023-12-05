import PrimeryNavBar from '@/components/navbar/PrimeryNavBar'
import { IndexBanner } from '@/containers/IndexBanner'
import { Statistics } from '@/containers/StatisticsBanner'
import { WhyAiSection } from '@/containers/WhyAiBanner'
import ProgramHighlight from '@/containers/ProgramHighlights'
import ComprehensiveCurriculum from '@/containers/ComprehensiveCurriculum'
export default function Home() {
  return (
    <section className='relative '> 
      <PrimeryNavBar/>
      <section className='py-2'>
      <IndexBanner/>
      </section>
      <Statistics/>
      <WhyAiSection/>
      <ProgramHighlight/>
      <ComprehensiveCurriculum/>
    </section>
  )
}
