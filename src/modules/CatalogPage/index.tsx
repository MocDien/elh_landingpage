import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'

import Catalog from './Catalog'

const CatalogPage = () => {
  return (
    <>
      <Container className="my-2">
        <Breadcrumb title="Liên hệ" />
      </Container>
      <Catalog />
    </>
  )
}

export default CatalogPage
