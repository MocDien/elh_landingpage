import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'

import ListNews from './ListNews'

const NewsNEventPage = () => {
  return (
    <>
      <Container className="my-2">
        <Breadcrumb title="Tư vấn" />
      </Container>
      <ListNews />
    </>
  )
}

export default NewsNEventPage
