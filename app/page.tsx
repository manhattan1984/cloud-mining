import React from 'react'
import Home from './HomePage'
import plans from './(data)/plans'

const page = () => {
  return (
   <Home plans={plans} />
  )
}

export default page