import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import productsJson from '../api/Api'
import ProductsCard from '../components/ProductsCard'
import Slider from '../components/Slider'
import Header from '../components/Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Section = styled.section``
const ProductSection = styled.div`
  padding: 50px 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  align-items: center;
  .ourproducts {
    padding-bottom: 50px;
    padding-top: 20px;
    text-align: center;
    font-size: 1.5rem;
  }
`
const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  z-index: 100;
`

const Home = () => {
  return (
    <Container name="divcontainer">
      <Slider />
      {/* <ProductSection name="divproductsection">
        <h2 className="ourproducts">Our products</h2>
        <ProductContainer>
          {productsJson.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
        </ProductContainer>
      </ProductSection> */}
    </Container>
  )
}

export default Home
