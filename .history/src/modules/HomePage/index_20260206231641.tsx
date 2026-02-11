import Image from 'next/image'

import { Marquee } from '@/components/ui/marquee'

import Hero from './Hero'
import About from './About'
import PoweredByTech from './PoweredByTech'
import Products from './Products'
import Service from './Service'
import Contact from './Contact'
import { Constraction } from './Constraction'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="my-8 bg-white py-4">
        <Marquee pauseOnHover className="[--duration:60s] [--gap:3rem]">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="relative aspect-[192/80] h-20 w-[192px]">
              <Image src={`/images/logo${i + 1}.png`} fill alt={`logo ${i + 1}`} className="object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
      <About />
      <Constraction />
      <PoweredByTech />
      <Products />
      <Service />
      <Contact />
    </div>
  )
}

export default HomePage
