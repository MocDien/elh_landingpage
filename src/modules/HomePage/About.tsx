import Image from 'next/image'

import Container from '@/components/Container'

const About = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="relative z-20">
          <div className="absolute bottom-0 -left-8 z-20 hidden h-full w-full lg:block">
            <Image src="/images/kuka.webp" className='rotate-y-180' width={468} height={468} alt="Kuka" />
          </div>
          <div className="absolute right-0 -bottom-32 z-20 hidden grid-cols-2 gap-8 min-[1920px]:!grid-cols-4 2xl:grid">
            <div className="bg-primary-blue relative aspect-[163/338] h-[163px] w-[338px] rounded-3xl min-[1920px]:!aspect-[338/163] min-[1920px]:!h-[338px] min-[1920px]:!w-[163px]">
              <Image className="rounded-3xl object-cover object-[43%_center]" src="/images/about-1.jpg" fill alt="" />
            </div>
            <div className="bg-primary-blue relative -mt-12 aspect-[163/338] h-[163px] w-[338px] rounded-3xl min-[1920px]:!aspect-[338/163] min-[1920px]:!h-[338px] min-[1920px]:!w-[163px]">
              <Image className="rounded-3xl object-cover object-[43%_center]" src="/images/about-2.jpg" fill alt="" />
            </div>
            <div className="bg-primary-blue relative aspect-[163/338] h-[163px] w-[338px] rounded-3xl min-[1920px]:!aspect-[338/163] min-[1920px]:!h-[338px] min-[1920px]:!w-[163px]">
              <Image className="rounded-3xl object-cover" src="/images/machine.png" fill alt="" />
            </div>
            <div className="bg-primary-blue relative -mt-12 aspect-[163/338] h-[163px] w-[338px] rounded-3xl min-[1920px]:!aspect-[338/163] min-[1920px]:!h-[338px] min-[1920px]:!w-[163px]">
              <Image className="rounded-3xl object-cover object-[60%_center]" src="/images/chemical.jpg" fill alt="" />
            </div>
          </div>

          <div style={{ width: 253, height: 85 }}>
            {/* <svg width={253} height={85} viewBox="0 0 253 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_2141_198)">
                <path d="M248.5 0.300049H4.40002V76.8L248.5 0.300049Z" fill="#1C3051" />
                <path d="M245.231 0.800049L4.90002 76.1184V0.800049H245.231Z" stroke="black" />
              </g>
              <defs>
                <filter
                  id="filter0_d_2141_198"
                  x="0.400024"
                  y="0.300049"
                  width="252.1"
                  height="84.5"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={4} />
                  <feGaussianBlur stdDeviation={2} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2141_198" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2141_198" result="shape" />
                </filter>
              </defs>
            </svg> */}
          </div>
          <div className="my-16 grid place-items-center lg:mt-32 2xl:-mb-12 2xl:grid-cols-6">
            <div className="lg:col-span-2 lg:col-start-2">
              <Image src="/images/logo_elh.svg" width={306} height={128} alt="ELH" />
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-primary-orange relative z-10">
        <div className="bg-primary-orange absolute -top-10 left-1/2 z-10 h-px w-4/5 -translate-x-1/2 lg:left-[55%] 2xl:left-1/3 2xl:w-1/3 2xl:-translate-x-1/3" />
        <div className="">
          <Container>
            <div className="grid place-items-center py-4 lg:mt-32 2xl:grid-cols-6">
              <div className="flex items-center gap-x-4 lg:col-span-2 lg:col-start-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <Image src={`/icons/intro-${i + 1}.svg`} width={62} height={62} alt="Intro" />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="bg-white py-4">
        <Container>
          <div className="grid place-items-center 2xl:grid-cols-6">
            <p className="text-center font-semibold lg:col-span-2 lg:col-start-2 2xl:text-left">
              ELH SERVICE TECHNOLOGY TRADING Co.,LTD
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default About
