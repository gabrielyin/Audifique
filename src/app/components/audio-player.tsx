'use client'

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export default function AudioPlayer() {
  const searchParams = useSearchParams()
  const audioUrl = searchParams.get('audioUrl')
  
  return (
    <Suspense>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      )}
    </Suspense>
  )
}