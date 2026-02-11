import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'

import ListNews from './ListNews'

const FeaturedNewsPage = () => {
  return (
    <>
      <Container className="my-2">
        <Breadcrumb title="Tin nổi bật" />
      </Container>
      <ListNews />
    </>
  )
}

export default FeaturedNewsPage
