'use client'

import { useSearchParams } from "next/navigation"

export default function AudioPlayer() {
  const searchParams = useSearchParams()
  const audioUrl = searchParams.get('audioUrl')
  
  return (
    <>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      )}
    </>
  )
}