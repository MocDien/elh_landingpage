import Image from 'next/image'

import Container from '@/components/Container'

const Hero = () => {
  return (
    <section className="relative mt-8">
      <div className="bg-bg_hero_about relative z-[-2] h-[600px] bg-cover bg-center bg-no-repeat">
        <Container className="relative z-10 h-full">
          <div className={`bg-primary-blue absolute bottom-0 z-20 p-[32px_0_24px_32px] lg:right-32 lg:-bottom-28`}>
            <div className="space-y-2">
              <q className="block font-semibold text-white uppercase">Đạo đức kinh doanh là nền tảng</q>
              <div className="ml-auto w-fit">
                <Image src="/images/about/gt3.png" width={400} height={300} alt="" />
              </div>
            </div>
          </div>
          <div className="space-y-2 pt-9">
            <h1 className="font-semibold">ELH SERVICE TECHNOLOGY TRADING Co.,LTD</h1>
            <blockquote className="before:absolute-center-y before:bg-primary-blue relative pl-4 text-sm uppercase before:left-0 before:mt-[2px] before:h-3/4 before:w-1 lg:w-[630px] lg:text-base">
              Hòa chung xu hướng công nghiệp hóa 4.0. ELH thành lập để hỗ trợ khách hàng vững bước trong thiên niên kỷ
              mới
            </blockquote>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Hero
