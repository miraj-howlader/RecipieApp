import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className=' w-full bg-black min-h-screen'>
      <Skeleton/>
    </div>
  )
}

export default LoadingPage
