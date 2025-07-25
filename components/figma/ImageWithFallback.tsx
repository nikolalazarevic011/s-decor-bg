import Image from 'next/image'
import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fallbackSrc?: string
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  width = 800, 
  height = 600,
  fallbackSrc = "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ...props 
}: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageSrc(fallbackSrc)}
      {...props}
    />
  )
}
