import React from 'react'
import styled from 'styled-components'
import productsJson from '../api/Api'
import ProductsCard from '../components/ProductsCard'

const ProductSection = styled.div`
  padding: 8vh 0;
  height: calc(100vh - 49px);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  align-items: center;
  @media screen and (max-width: 1439px) {
    padding: 6vh 5vw 15vh 5vw;
    width: 80%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    padding: 6vh 0 15vh;
  }
`
const Title = styled.h1`
  font-size: 2.8rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: -1.9px;
  margin-bottom: 2.5%;
  font-weight: 400;
`
const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 25px;
  z-index: 100;
`
const Products = () => {
  return (
    <>
      <ProductSection>
        <Title>Our Flavors</Title>
        <ProductContainer>
          {productsJson.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
        </ProductContainer>
      </ProductSection>
    </>
  )
}

export default Products
