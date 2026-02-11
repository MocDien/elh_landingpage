import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

import Container from '../Container'
import NumberBoxDisplay from '../NumberBoxDisplay'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002244] py-4 text-white">
        <Container>
          <div className="flex flex-wrap items-center gap-x-16 gap-y-4">
            <div>
              <Image src="/images/logo_elh_white.svg" width={153} height={85} alt="ELH" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <div className="rounded bg-white p-1">
                  <FaYoutube className="text-primary-blue" />
                </div>
                <div className="rounded bg-white p-1">
                  <FaFacebookF className="text-primary-blue" />
                </div>
                <div className="rounded bg-white p-1">
                  <FaXTwitter className="text-primary-blue" />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span>Truy cập:</span> <NumberBoxDisplay number={521312} />
                <span>Online: 27</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-primary-blue py-8 text-white">
        <Container>
          <div className="space-y-4 gap-x-16 xl:flex xl:space-y-0">
            <div>
              <p className="text-primary-orange text-lg font-semibold uppercase lg:text-xl">
                Công ty TNHH Thương Mại Kỹ Thuật Dịch Vụ ELH
              </p>
              <div className="mt-2 space-y-2">
                <div className="flex gap-x-4">
                  <div className="shrink-0 pt-1.5">
                    <Image src="/icons/map.svg" width={15} height={15} alt="Map" />
                  </div>
                  <Link
                    href="https://maps.app.goo.gl/Bfk51u4gX9vk5tX8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    Địa chỉ: 23/3a Đường TTH21, Phường Tân Thới Hiệp, TP.HCM
                  </Link>
                </div>
                <div className="flex items-center gap-x-4">
                  <div>
                    <Image src="/icons/phone.svg" width={15} height={15} alt="Phone" />
                  </div>
                  <Link href="tel:+84915706936" className="block">
                    Kinh doanh: (+84) 915 706 936
                  </Link>
                </div>
                <div className="flex items-center gap-x-4">
                  <div>
                    <Image src="/icons/mail.svg" width={15} height={15} alt="Phone" />
                  </div>
                  <div>
                    Email: <Link href="mailto:info@elh.vn">info@elh.vn</Link> /{' '}
                    <Link href="mailto:sales@elh.vn">sales@elh.vn</Link>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div>
                    <Image src="/icons/globe.svg" width={15} height={15} alt="Phone" />
                  </div>
                  <Link href="https://elh.vn" className="block">
                    Web: www.elh.vn
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary-orange text-lg font-semibold uppercase lg:text-xl">Chính sách bán hàng</p>
              <div className="mt-2 space-y-2">
                <ul className="nav [&>li]:relative [&>li]:pb-1 [&>li]:pl-6 [&>li::before]:absolute [&>li::before]:top-0.5 [&>li::before]:left-0 [&>li::before]:content-['»']">
                  <li className="">Chính sách bảo hành sản phẩm</li>
                  <li className="">Chính sách bảo mật thông tin</li>
                  <li className="">Quy trình giao hàng</li>
                  <li className="">Chính sách đổi trả hàng</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-primary-orange text-lg font-semibold uppercase lg:text-xl">Chăm sóc khách hàng</p>
              <div className="mt-2 space-y-2">
                <ul className="nav [&>li]:relative [&>li]:pb-1 [&>li]:pl-6 [&>li::before]:absolute [&>li::before]:top-0.5 [&>li::before]:left-0 [&>li::before]:content-['»']">
                  <li className="">Dịch vụ của ELH </li>
                  <li className="">Hướng dẫn thanh toán</li>
                  <li className="">Các hình thức mua hàng</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16 space-y-2">
            <p className="font-semibold uppercase lg:text-xl">Danh mục sản phẩm được yêu thích</p>
            <p className="text-elh-gray">
              Wurth | Tempco | Schneider | Siemens | Bạc lót , vòng bi nhựa, ray trượt không dầu | Cadivi | IGUS |
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-primary-orange grid border-t border-white py-4 text-white">
        <div className="m-auto flex items-center gap-x-2">
          <p>©Copyright By ELH. Designed By</p>
          <div>
            <Image src="/images/logo-design.png" width={48} height={48} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
