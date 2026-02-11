import Image from 'next/image'

import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'

const Service = () => {
  const data = [
    {
      img: '/images/service/service-1.png',
      icon: '/icons/service-1.svg',
      title: 'CÔNG NGHIỆP HÓA 4.0',
      text: 'Bằng việc mang các thiết bị công nghệ mới kết hợp với giải pháp tích hợp phần mềm điều khiến đến tay khách hàng, chúng tôi góp phần thúc đẩy công cuộc công nghiệp hóa 4.0 đi nhanh hơn với xu thế của thời đại.',
    },
    {
      img: '/images/service/service-2.png',
      icon: '/icons/service-2.svg',
      title: 'CUNG CẤP THIẾT BỊ TỰ ĐỘNG HÓA',
      text: 'Chúng tôi hợp tác với các nhà cung cấp uy tín hàng đầu thế giới về lĩnh vực tự động hóa để cung ứng đến khách hàng những sản phẩm chất lượng, đa dạng và hiệu quả trong ứng dụng.',
    },
    {
      img: '/images/service/service-3.png',
      icon: '/icons/service-3.svg',
      title: 'MÁY NÉN KHÍ',
      text: 'ELH cung cấp đầy đủ các chủng loại máy nén khí: từ máy Piston đến trục vít hoặc máy tích hợp sẵn bình chứa khí, từ máy không dầu đến máy có dầu… đáp ứng hầu như mọi yêu cầu hệ thống không khí công nghiệp.',
    },
    {
      img: '/images/service/service-4.png',
      icon: '/icons/service-4.svg',
      title: 'DỊCH VỤ KỸ THUẬT',
      text: 'Tập trung trọng điểm vào bảo dưỡng, sửa chữa, nâng cấp hệ thống thiết bị hiện hữu của khách hàng, giải quyết cho khách hàng từ những sự cố nhỏ nhất.',
    },
  ]
  return (
    <section className="my-20">
      <Container>
        <Breadcrumb title="Dịch vụ" />
        <div className="mt-8 grid-cols-6 gap-20 space-y-6 xl:grid xl:space-y-0">
          <div className="col-span-4 space-y-8">
            <div className="flex items-center gap-x-2">
              <p className="text-title shrink-0">Dịch vụ của ELH</p>
              <div className="bg-primary-blue mt-1.5 h-px w-full" />
            </div>
            <div className="space-y-24">
              {data.map(({ img, icon, title, text }, i) => (
                <div key={i} className="items-end space-y-4 gap-x-10 md:flex md:space-y-0">
                  <div className="shrink-0">
                    <Image src={img} width={404} height={270} alt={title} />
                  </div>
                  <div>
                    <div>
                      <Image src={icon} width={64} height={64} alt={title} />
                    </div>
                    <div className="pt-4">
                      <p className="text-title">{title}</p>
                      <p className="text-lg">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 mt-32 ml-auto h-fit rounded-2xl rounded-br-[80px] bg-white p-[24px_40px_32px_24px] xl:w-[86%]">
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

export default Service
