import Image from 'next/image'

import Container from '@/components/Container'

const ListNews = () => {
  const data = [
    {
      title: 'TẤT TẦN TẬT THÔNG TIN VỀ THIẾT BỊ THỦY LỰC',
      text: 'Thiết bị thủy lực là một trong những dụng cụ công nghiệp vô cùng cần thiết trong đời sống của chúng ta, nhờ có chúng mà mọi hoạt động sản xuất được tốt hơn. Vậy cấu tạo của chúng là gì? Hãy cùng tìm ra câu trả lời nhé.',
    },
    {
      title: 'TÌM HIỂU CÁC THIẾT BỊ KHÍ NÉN THÔNG DỤNG HIỆN NAY',
      text: 'Càng ngày những thiết bị khí nén càng được ứng dụng sâu và rộng rãi hơn không chỉ trong lĩnh vực sản xuất công nghiệp mà còn trong các hoạt động đời sống con người hằng ngày. Vậy bạn biết gì về các thiết bị này? Hãy cùng tìm hiểu thông qua bài viết này nhé.',
    },
    {
      title: 'KHÁI QUÁT CẢM BIẾN (SENSOR) LÀ GÌ? PHÂN LOẠI, ỨNG DỤNG',
      text: 'Cảm biến (sensor) là một thiết bị thông dụng trong cuộc sống, đặc biệt trong công nghiệp cảm biến đóng vai trò hết sức quan trọng. Vậy cảm biến là gì và các loại cảm biến nào thông dụng trong công nghiệp.',
    },
    {
      title: 'Máy nén khí - Định nghĩa và Công dụng',
      text: 'Máy nén khí được ứng dụng rất nhiều vào trong đời sống con người, chế tạo và sản xuất công nghiệp,... Vậy máy nén khí là gì? Nó mang lại lợi ích như thế nào? Các bạn hãy cùng chúng tôi tìm hiểu trong bài viết dưới đây nhé!',
    },
    {
      title: 'Thiết Bị Thủy Lực',
      text: 'Thiết bị thủy lực là một phần của hệ thống thủy lực. Được sử dụng phổ biến trong sản xuất, trong công nghiệp và nông nghiệp. Thiết bị thủy lực đóng vai trò không nhỏ trong việc phục vụ cho đời sống và như cầu làm việc của con người.',
    },
    {
      title: 'TOP 10 LỜI KHUYÊN CHO VIỆC BẢO TRÌ BƠM THỦY LỰC ĐỂ HOẠT ĐỘNG TỐT',
      text: 'Máy bơm thủy lực là một phần chủ yếu của nhiều máy móc trong hệ thống công nghiệp. Chúng có tầm quan trọng tối ưu trong hầu hết các ứng dụng cơ học và không thể bỏ qua.',
    },
    {
      title: 'ỨNG DỤNG XI LANH THỦY LỰC LÀ GÌ?',
      text: 'Xi lanh thủy lực được sử dụng trong vô số ứng dụng. Chúng thường được nhìn thấy trong các ứng dụng công nghiệp (bao gồm máy ép thuỷ lực, cần cẩu, ... ) và các ứng dụng di động (như máy nông nghiệp, xe xây dựng và thiết bị hàng hải).',
    },
    {
      title: 'BƠM THỦY LỰC HOẠT ĐỘNG NHƯ THẾ NÀO?',
      text: 'Máy bơm thủy lực chính xác là làm gì? Chúng ta phải hiểu rõ chúng hoạt động ra sao? Mỗi hệ thống thủy lực phải có một loại máy bơm. Vậy bơm thủy lực hoạt động như thế nào?',
    },
    {
      title: 'Tìm Hiểu Về Ổ Cắm Công Nghiệp - Phân Loại Ổ Cắm Công Nghiệp.',
      text: 'Ổ cắm công nghiệp là gì? Những loại ổ cắm được dùng trong công nghiệp phổ biến là những loại nào? Cùng tìm hiểu sâu hơn về các loại ổ cắm công nghiệp trong bài viết này nhé.',
    },
    {
      title: 'Ổ cắm điện công nghiệp là gì? Có bao nhiêu loại? Khác gì với ổ cắm dân dụng?',
      text: 'Ổ cắm điện công nghiệp là gì? Có bao nhiêu loại? Ổ cắm điện công nghiệp khác gì với ổ cắm điện dân dụng chúng ta sử dụng trong gia đình hàng ngày? Các bạn cùng tìm hiểu nhé!',
    },
  ]
  return (
    <section className="mt-10 space-y-6">
      <Container>
        <div className="mb-4 flex items-center gap-x-2">
          <p className="text-title shrink-0">Tin tức & Sự kiện</p>
          <div className="bg-primary-blue mt-1.5 h-px w-full" />
        </div>

        <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">
          {data.map(({ title, text }, i) => (
            <div key={i} className="flex flex-col gap-y-2">
              <div className="mb-2">
                <div className="relative">
                  <Image src={`/images/news/news-${i + 1}.png`} width={512} height={337} alt="" />
                  <div className="absolute right-0 bottom-0 z-[1]">
                    <Image src="/icons/arrow.svg" width={32} height={32} alt="" />
                  </div>
                  <div className="absolute right-0 bottom-0 z-0 h-7 w-7 bg-white" />
                </div>
              </div>
              <p className="text-title flex-1">{title}</p>
              <p className="line-clamp-3">{text}</p>
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
