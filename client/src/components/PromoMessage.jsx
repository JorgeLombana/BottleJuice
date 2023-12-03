import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const ContainerPromoMsg = styled.div`
  height: 30px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  overflow: hidden;

  p {
    animation: slider 25s linear infinite;
    white-space: nowrap;
  }
  @keyframes slider {
    0% {
      transform: translateX(130%);
    }
    100% {
      transform: translateX(-130%);
    }
  }
`

const PromoMessage = () => {
  return (
    <>
      <ContainerPromoMsg>
        <p>
          promo code Georgio - $20.000 off 9 items, $25% off 14 items, or hola
          mundo xd
        </p>
      </ContainerPromoMsg>
    </>
  )
}

export default PromoMessage
