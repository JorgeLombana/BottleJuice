import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  div {
    display: flex;
    gap: 8px;
    i {
      font-size: 1.4rem;
      transition: 0.25s ease-in-out all;
      cursor: pointer;
      &:hover {
        transform: translate(5px, -5px);
      }
    }
  }
`

const Title = styled.h2`
  font-weight: 600;
  font-size: 1.2rem;
`

const SocialMedia = () => {
  return (
    <Container>
      <div>
        <i class="ri-facebook-box-line"></i>
        <i class="ri-instagram-line"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-mail-send-line"></i>
        <i class="ri-phone-line"></i>
      </div>
    </Container>
  )
}

export default SocialMedia
