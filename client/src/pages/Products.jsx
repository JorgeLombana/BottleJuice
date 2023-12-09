import React from 'react'
import styled from 'styled-components'
import productsJson from '../api/Api'
import ProductsCard from '../components/ProductsCard'

const ProductSection = styled.div`
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  align-items: center;
  
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
        <Title>Our products</Title>
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
