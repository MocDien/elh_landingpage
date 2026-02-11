import Image from 'next/image'

import Container from '@/components/Container'

const Hero = () => {
  return (
    <section className="relative mt-8">
      <Container className="relative z-10 h-full">
        <div className="bg-bg_hero_about relative z-[-2] h-[600px] bg-cover bg-center bg-no-repeat">
          <div className={`bg-primary-blue absolute bottom-0 z-20 p-[32px_0_24px_32px] lg:right-32 lg:-bottom-28`}>
            <div className="space-y-2">
              <q className="block font-semibold text-white uppercase">Đạo đức kinh doanh là nền tảng</q>
              <div className="ml-auto w-fit">
                <Image src="/images/service/service.png" width={400} height={125} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
