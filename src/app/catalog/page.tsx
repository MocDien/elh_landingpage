import { Suspense } from 'react'

import CatalogPage from '@/modules/CatalogPage'

export default function Catalog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatalogPage />
    </Suspense>
  )
}
