import Image from 'next/image'

import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'

const Info = () => {
  return (
    <section className="my-20">
      <Container>
        <Breadcrumb title="Giới thiệu" />
        <div className="mt-8 grid-cols-6 gap-20 space-y-6 xl:grid xl:space-y-0">
          <div className="col-span-4 space-y-8">
            <p className="text-title">Giới thiệu chung</p>
            <p className="font-semibold">
              <span className="text-primary-orange font-semibold">ELH</span> được hình thành từ những chuyên viên nhiều
              năm kinh nghiệm trong lĩnh vực: công nghiệp hóa, cung cấp thiết bị tự động hóa, thi công lắp đặt máy nén
              khí, dịch vụ kỹ thuật.
            </p>
            <p className="text-justify">
              Với sự đa đang hóa về chủng loại thiết bị và dịch vụ trong nhiều ngành nghề,{' '}
              <span className="text-primary-orange font-semibold">ELH</span> thực sự là đối tác tin cậy luôn sát cánh
              với khách hàng, hỗ trợ khách hàng khắc phục được các sự cố trong sản xuất. Thời gian cung cấp thiết bị
              nhanh, đáp ứng kịp thời cũng là một lợi thế để{' '}
              <span className="text-primary-orange font-semibold">ELH</span> phục vụ được tốt nhu cầu của khách hàng.
              Đến với <span className="text-primary-orange font-semibold">ELH</span>, quý khách hàng luôn nhận được sự
              hài lòng về chất lượng sản phẩm, dịch vụ chuyên nghiệp uy tín nhằm mang lại kết quả hoạt động tốt nhất cho
              khách hàng. <span className="text-primary-orange font-semibold">ELH</span> luôn đề cao “đạo đức kinh doanh
              là nền tảng”. Chính vì vậy, thành công của khách hàng đồng thời là thành công của chúng tôi.
            </p>
            <div className="grid-cols-4 gap-4 space-y-4 md:grid md:space-y-0">
              <div className="flex flex-col bg-white pt-4 pb-10">
                <p className="bg-primary-blue py-2 pl-8 text-white uppercase">Tầm nhìn</p>
                <div className="before:bg-primary-orange relative flex-1 shrink-0 px-6 pt-4 indent-8 before:absolute before:top-[23px] before:left-6 before:h-3 before:w-3">
                  Hòa chung xu hướng công nghiệp hóa 4.0. <span className="text-primary-orange font-semibold">ELH</span>{' '}
                  thành lập để hỗ trợ khách hàng vững bước trong thiên niên kỷ mới.
                </div>
                <div className="mx-auto w-fit pt-10">
                  <Image src="/icons/gt1.svg" width={64} height={64} alt="" />
                </div>
              </div>

              <div className="flex flex-col bg-white pt-4 pb-10">
                <p className="bg-primary-blue py-2 pl-8 text-white uppercase">Sứ mệnh</p>
                <div className="before:bg-primary-orange relative flex-1 shrink-0 px-6 pt-4 indent-8 before:absolute before:top-[23px] before:left-6 before:h-3 before:w-3">
                  <span className="text-primary-orange font-semibold">ELH</span> mở ra để đáp ứng nhu cầu cải tiến sản
                  xuất, nâng cao năng lực, cải tiến công nghệ và nâng tầm doanh nghiệp việt sánh ngang tầm với quốc tế.
                </div>
                <div className="mx-auto w-fit pt-10">
                  <Image src="/icons/gt2.svg" width={64} height={64} alt="" />
                </div>
              </div>

              <div className="flex flex-col bg-white pt-4 pb-10">
                <p className="bg-primary-blue py-2 pl-8 text-white uppercase">Mục tiêu</p>
                <div className="before:bg-primary-orange relative flex-1 shrink-0 px-6 pt-4 indent-8 before:absolute before:top-[23px] before:left-6 before:h-3 before:w-3">
                  Đồng hành cùng hãng sản xuất, nhà chế tạo thiết bị tiên tiến hàng đầu thế giới, đưa công nghệ tiên
                  tiến vào thị trường Việt Nam.
                </div>
                <div className="mx-auto w-fit pt-10">
                  <Image src="/icons/gt3.svg" width={64} height={64} alt="" />
                </div>
              </div>

              <div className="flex flex-col bg-white pt-4 pb-10">
                <p className="bg-primary-blue py-2 pl-8 text-white uppercase">Niềm tin</p>
                <div className="before:bg-primary-orange relative flex-1 shrink-0 px-6 pt-4 indent-8 before:absolute before:top-[23px] before:left-6 before:h-3 before:w-3">
                  Xây dựng niềm tin vững chắc trong tâm thức doanh nghiệp, hướng đến giá trị bền vững và cùng nhau phát
                  triển.
                </div>
                <div className="mx-auto w-fit pt-10">
                  <Image src="/icons/gt4.svg" width={64} height={64} alt="" />
                </div>
              </div>
            </div>

            <div className="bg-primary-blue my-12 h-[2px] w-full" />

            <div className="space-y-8">
              <p className="text-title">Các lĩnh vực kinh doanh chính của ELH</p>
              <div className="space-y-8 text-justify">
                <p className="">
                  <span className="font-semibold">Công nghiệp hóa 4.0:</span> bằng việc mang các thiết bị công nghệ mới
                  kết hợp với giải pháp tích hợp phần mềm điều khiến đến tay khách hàng, chúng tôi góp phần thúc đẩy
                  công cuộc công nghiệp hóa 4.0 đi nhanh hơn với xu thế của thời đại.
                </p>
                <p className="">
                  <span className="font-semibold">Cung cấp thiết bị tự động hóa:</span> chúng tôi hợp tác với các nhà
                  cung cấp uy tín hàng đầu thế giới về lĩnh vực tự động hóa để cung ứng đến khách hàng những sản phẩm
                  chất lượng, đa dạng và hiệu quả trong ứng dụng.
                </p>
                <p className="">
                  <span className="font-semibold">Máy nén khí:</span> ELH cung cấp đầy đủ các chủng loại máy nén khí: từ
                  máy Piston đến trục vít hoặc máy tích hợp sẵn bình chứa khí, từ máy không dầu đến máy có dầu… đáp ứng
                  hầu như mọi yêu cầu hệ thống không khí công nghiệp.
                </p>
                <p className="">
                  <span className="font-semibold">Dịch vụ kỹ thuật:</span> tập trung trọng điểm vào bảo dưỡng, sửa chữa,
                  nâng cấp hệ thống thiết bị hiện hữu của khách hàng, giải quyết cho khách hàng từ những sự cố nhỏ nhất.
                </p>
              </div>

              <div>
                <Image src="/images/about/gt2.png" width={1200} height={375} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-20 ml-auto h-fit rounded-2xl rounded-br-[80px] bg-white p-[24px_40px_32px_24px] xl:w-[86%]">
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

export default Info
