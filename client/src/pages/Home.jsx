import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import productsJson from '../api/Api'
import ProductsCard from '../components/ProductsCard'
import Slider from '../components/slider/Slider'
import Header from '../components/Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Home = () => {
  return (
    <Container name="divcontainer">
      <Slider />
    </Container>
  )
}

export default Home
