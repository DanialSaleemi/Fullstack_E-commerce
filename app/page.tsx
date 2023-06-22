import Hero from '@/components/Hero/hero'
import {Productcard} from '@/components/Products/SanityProducts'
import Promotion from '@/components/Promotions/promotion'



export default async function Home() {
  
  return (
    <div className='px-40'>
    <Hero/>
    <Promotion/>
    {/* @ts-expect-error Server Component */}
    <Productcard/>
    </div>
  )
}