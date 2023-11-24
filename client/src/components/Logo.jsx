import React from 'react'
import styled from 'styled-components'

const LogoText = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
`

const Logo = () => {
  return <LogoText>BottleJuice</LogoText>
}

export default Logo
