import Link from 'next/link'
import React from 'react'

const NotFount = () => {
  return (
    <div className=' mt-60 items-center justify-center text-center'>
      <h1>This does not exit. Go to the home page</h1>
      <Link href={'/'}
      className=' border bg-orange-300 px-4 py-1'
      >Home</Link>
    </div>
  )
}

export default NotFount
