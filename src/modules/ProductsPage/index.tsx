'use client'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Container from '@/components/Container'

const ProductsPage = ({ slug }: { slug: string }) => {
  const data = [
    {
      image: '/images/xylem6.jpg',
      name: 'Lowara e-IXP',
      model: 'e-IXP',
    },
    {
      image: '/images/xylem4.jpg',
      name: 'Lowara TLCN, TLCHN',
      model: 'TLCN, TLCHN',
    },
    {
      image: '/images/xylem3.jpg',
      name: 'Lowara Ecocirc+',
      model: 'Ecocirc+',
    },
    {
      image: '/images/xylem2.jpg',
      name: 'Lowara SHO',
      model: 'SHO',
    },
    {
      image: '/images/anel4.jpg',
      name: 'GRACO 1250A6 HUSKY 205 PVDF 1/4″ 19 L/min Diaphragm Pump PP NULL PVDF SP (NPT)',
      model: 'GRACO D150A6',
    },
    {
      image: '/images/anel3.jpg',
      name: 'GRACO 647671 HUSKY 1050 Aluminum 1′ 189 L/min Diaphragm Pump A01 A A2 BN BN BN – (BSP)',
      model: 'GRACO 647671',
    },
    {
      image: '/images/anel2.jpg',
      name: 'GRACO 649034 HUSKY 1050 Polypropylene 1′ 189 L/min Diaphragm Pump',
      model: 'GRACO 649034',
    },
    {
      image: '/images/anel1.jpg',
      name: 'GRACO D52911 HUSKY 515 Polypropylene 1/2″ 57L/min Diaphragm Pump',
      model: 'GRACO D52911',
    },
  ]
  return (
    <div className="mt-10">
      <Container>
        <div>
          <div className="items-center space-y-2 gap-x-2 md:flex md:space-y-0">
            <p className="shrink-0 text-xl font-semibold uppercase">
              Van, Bơm <span className="text-primary-orange">»</span> XyLanh
            </p>
            <div className="bg-primary-blue mt-1.5 hidden h-px w-full md:block" />
          </div>
          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            <p>Grundfos | Alfa Laval | XYLEM | Parker |</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-x-4">
            <button className="swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={'100%'}
                height={'100%'}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left-icon lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={'100%'}
                height={'100%'}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="s0 lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            // onInit={(swiper) => {
            //   // @ts-ignore
            //   swiper.params.navigation.prevEl = prevRef1.current
            //   // @ts-ignore
            //   swiper.params.navigation.nextEl = nextRef1.current
            //   swiper.navigation.init()
            //   swiper.navigation.update()
            // }}
            modules={[Navigation]}
          >
            {data.map(({ image, name, model }, i) => (
              <SwiperSlide key={model + i}>
                <div className="hover:border-primary-orange relative grid min-h-[350px] place-items-center rounded-2xl border border-white bg-white p-4 transition-all duration-300">
                  {i === 0 && (
                    <div className="absolute top-4 left-4">
                      <Image src="/images/baohanh.png" width={100} height={100} alt={slug} />
                    </div>
                  )}

                  <div className="flex h-full flex-col">
                    <div className="mx-auto w-fit">
                      <Image src={image} width={217} height={230} alt={model} />
                    </div>
                    <p className="flex-1 text-center">{name}</p>
                    <p className="text-primary-orange text-center text-sm">Mã SP: {model}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="border-primary-blue my-32 grid-cols-6 gap-20 space-y-6 border-t pt-10 xl:grid xl:space-y-0">
          <div className="col-span-4 space-y-8">
            <div className="">
              <Image src="/images/logo_elh.svg" width={326} height={186} alt="ELH" />
            </div>
          </div>
          <div className="col-span-2 ml-auto h-fit rounded-2xl rounded-br-[80px] bg-white p-[24px_40px_32px_24px] xl:w-[86%]">
            <p className="font-semibold uppercase">Danh mục sản phẩm hãng sản xuất</p>
            <div className="bg-primary-blue my-4 h-px w-full" />
            <div className="space-y-8 pt-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <Image src={`/images/about/brand-${i + 1}.svg`} width={315} height={61} alt="" />
                </div>
              ))}
              <div className="pt-6">
                <Image src={`/images/about/brand-5.png`} width={315} height={61} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductsPage
