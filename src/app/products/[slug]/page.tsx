export const runtime = 'edge'

import ProductsPage from '@/modules/ProductsPage'

export default async function ProductsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ProductsPage slug={slug} />
}
