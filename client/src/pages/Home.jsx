import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import productsJson from '../api/Api'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <Products products={productsJson} />
    </div>
  )
}

export default Home
