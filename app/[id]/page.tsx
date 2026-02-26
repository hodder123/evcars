import { allTeslas } from '../lib/teslaData'
import TeslaDetailClient from './TeslaDetailClient'

// Generate static paths for all Tesla listings
export function generateStaticParams() {
  return allTeslas.map((tesla) => ({
    id: tesla.id.toString(),
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function TeslaDetailPage({ params }: PageProps) {
  const { id } = await params
  return <TeslaDetailClient id={id} />
}
