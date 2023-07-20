import Carousel from '@/components/Carousel/carousel'
import Hero from '@/components/Hero/hero'
import { Jewellery } from '@/components/JewellerySection/jewellery'
import {Productcard} from '@/components/Products/SanityProducts'
import Promotion from '@/components/Promotions/promotion'



export default async function Home() {
  
  return (
    <div>
    <Hero/>
    <Promotion/>
    {/* @ts-expect-error Server Component */}
    <Productcard/>
    <Jewellery/>
    </div>
  )
}