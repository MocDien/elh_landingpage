import Image from 'next/image'

import Container from '@/components/Container'

const ListNews = () => {
  const data = [
    {
      title: 'CIRTIFICATE MENNEKES - BIA',
    },
    {
      title: 'AUTHORIZED DISTRIBUTOR CERTIFICATE',
    },
    {
      title: 'CERTIFICATION VALUE ADDED RESELLER',
    },
    {
      title: 'CERTIFICATE',
    },
    {
      title: 'CERTIFICATION OF DISTRIBUTOR',
    },
    {
      title: 'CERTIFICATE OF RECOGNITION',
    },
    {
      title: 'AUTHORIZATION LETTER',
    },
    {
      title: 'Authorized Distributor Certificate',
    },
  ]
  return (
    <section className="mt-10 space-y-6">
      <Container>
        <div className="mb-4 flex items-center gap-x-2">
          <p className="text-title shrink-0">Tin nổi bật</p>
          <div className="bg-primary-blue mt-1.5 h-px w-full" />
        </div>

        <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">
          {data.map(({ title }, i) => (
            <div key={i} className="flex flex-col gap-y-2">
              <div className="mb-2">
                <div className="relative">
                  <Image src={`/images/featured/featured-${i + 1}.png`} width={512} height={337} alt="" />
                  <div className="absolute right-0 bottom-0 z-[1]">
                    <Image src="/icons/arrow.svg" width={32} height={32} alt="" />
                  </div>
                  <div className="absolute right-0 bottom-0 z-0 h-7 w-7 bg-white" />
                </div>
              </div>
              <p className="text-title flex-1">{title}</p>
            </div>
          ))}
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
              <div className="pt-1">
                <Image src={`/images/about/brand-5.png`} width={315} height={61} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ListNews
