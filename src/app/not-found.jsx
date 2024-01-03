import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link href="/">Go back home</Link>
    
    </div>
  )
}

export default NotFound