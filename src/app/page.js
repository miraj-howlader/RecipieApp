import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Recipe App</h1>
      <Link href={'/recipe-list'}>Explore Homepage</Link>
    </div>
  )
}

export default Home
