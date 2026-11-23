import Image from 'next/image'
import { Zap } from 'lucide-react'

// Shows the car photo when one is set; otherwise the EVStore logo as a placeholder.
export default function CarImage({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src?: string
  alt: string
  className?: string
  priority?: boolean
}) {
  if (src) {
    return <Image src={src} alt={alt} fill className={`object-cover ${className}`} priority={priority} />
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
    >
      <Zap className="w-14 h-14 text-cyan-400" />
      <span className="mt-2 text-2xl font-bold text-white">EVStore</span>
      <span className="text-xs text-gray-400">Kamloops, BC</span>
    </div>
  )
}
