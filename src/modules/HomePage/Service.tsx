import Image from 'next/image'

import Container from '@/components/Container'

const Service = () => {
  return (
    <section className="mt-16 mb-32 lg:mt-48">
      <Container>
        <div className="items-end justify-between gap-x-16 lg:flex">
          <div className="relative shrink-0 space-y-4">
            <div className="-top-80 z-20 hidden space-y-4 min-[1920px]:!w-[210%] lg:absolute lg:block lg:w-[140%]">
              <div className="group flex cursor-default items-center">
                <div className="bg-primary-blue group-hover:bg-primary-orange hidden h-2 w-2 shrink-0 rounded-full transition-all duration-300 lg:block" />
                <div className="bg-primary-blue group-hover:bg-primary-orange hidden h-[3px] w-full transition-all duration-300 lg:block" />
                <div className="border-primary-blue bg-primary-blue group-hover:bg-primary-orange group-hover:border-primary-orange w-full shrink-0 rounded-full border px-10 py-2 text-center text-white uppercase transition-all duration-300 lg:w-auto lg:text-left">
                  Công nghiệp hóa 4.0
                </div>
              </div>

              <div className="group flex cursor-default items-center">
                <div className="bg-primary-orange hidden h-2 w-2 shrink-0 rounded-full lg:block" />
                <div className="bg-primary-orange hidden h-[3px] w-full lg:block" />
                <div className="border-primary-orange group-hover:bg-primary-orange w-full shrink-0 rounded-full border bg-white px-10 py-2 text-center uppercase transition-all duration-300 group-hover:text-white lg:w-auto lg:text-left">
                  Cung cấp thiết bị tự động hóa
                </div>
              </div>
            </div>

            <div className="-top-52 hidden space-y-4 min-[1920px]:!w-[210%] lg:absolute lg:block lg:w-[140%]">
              <div className="group flex cursor-default items-center">
                <div className="bg-primary-blue group-hover:bg-primary-orange hidden h-2 w-2 shrink-0 rounded-full transition-all duration-300 lg:block" />
                <div className="bg-primary-blue group-hover:bg-primary-orange hidden h-[3px] w-full transition-all duration-300 lg:block" />
                <div className="border-primary-blue bg-primary-blue group-hover:bg-primary-orange group-hover:border-primary-orange w-full shrink-0 rounded-full border px-10 py-2 text-center text-white uppercase transition-all duration-300 lg:w-auto lg:pr-20 lg:pl-10 lg:text-left">
                  Máy nén khí
                </div>
              </div>

              <div className="group flex cursor-default items-center">
                <div className="bg-primary-orange hidden h-2 w-2 shrink-0 rounded-full lg:block" />
                <div className="bg-primary-orange hidden h-[3px] w-full lg:block" />
                <div className="border-primary-orange group-hover:bg-primary-orange w-full shrink-0 rounded-full border bg-white px-10 py-2 text-center uppercase transition-all duration-300 group-hover:text-white lg:w-auto lg:pr-24 lg:pl-10 lg:text-left">
                  Dịch vụ kỹ thuật
                </div>
              </div>
            </div>

            {/*  */}
            <div>
              <p className="text-2xl font-semibold uppercase">Dịch vụ chính của ELH</p>
              <button className="text-primary-orange">Xem thêm</button>
            </div>
          </div>
          <div>
            <div className="relative hidden h-[300px] max-h-[300px] w-full lg:block">
              <Image
                src="/images/machine.png"
                width={1050}
                height={200}
                alt=""
                className="h-full rounded-xl object-cover"
              />
            </div>

            <div className="mt-4 space-y-4 lg:hidden">
              <div className="border-primary-blue bg-primary-blue hover:bg-primary-orange hover:border-primary-orange w-full shrink-0 rounded-full border px-10 py-2 text-center text-white uppercase transition-all duration-300 lg:w-auto lg:text-left">
                Công nghiệp hóa 4.0
              </div>
              <div className="border-primary-orange hover:bg-primary-orange w-full shrink-0 rounded-full border bg-white px-10 py-2 text-center uppercase transition-all duration-300 hover:text-white lg:w-auto lg:text-left">
                Cung cấp thiết bị tự động hóa
              </div>
              <div className="border-primary-blue bg-primary-blue hover:bg-primary-orange hover:border-primary-orange w-full shrink-0 rounded-full border px-10 py-2 text-center text-white uppercase transition-all duration-300 lg:w-auto lg:pr-20 lg:pl-10 lg:text-left">
                Máy nén khí
              </div>
              <div className="border-primary-orange hover:bg-primary-orange w-full shrink-0 rounded-full border bg-white px-10 py-2 text-center uppercase transition-all duration-300 hover:text-white lg:w-auto lg:pr-24 lg:pl-10 lg:text-left">
                Dịch vụ kỹ thuật
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Service
