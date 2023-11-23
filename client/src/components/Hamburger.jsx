import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const RotateIn = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
`

const RotateOut = keyframes`
  0% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const NavIcon = styled.div`
  /* margin-top: px; */
  width: 20px;
  height: 14px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const NavIconSpan = styled.span`
  display: block;
  position: absolute;
  height: 2.2px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transition: 0.25s ease-in-out;

  &:nth-child(1) {
    top: 0px;
  }

  &:nth-child(2) {
    top: 5px;
  }

  &:nth-child(3) {
    top: 10px;
  }

  ${(props) =>
    props.open &&
    `
    &:nth-child(1) {
      top: 7px;
      transform: rotate(135deg);
    }

    &:nth-child(2) {
      opacity: 0;
      left: -60px;
    }

    &:nth-child(3) {
      top: 7px;
      transform: rotate(-135deg);
    }
  `}
`

const StyledNavIcon = ({ isOpen, onClick }) => (
  <NavIcon id="nav-icon1" open={isOpen} onClick={onClick}>
    <NavIconSpan open={isOpen}></NavIconSpan>
    <NavIconSpan open={isOpen}></NavIconSpan>
    <NavIconSpan open={isOpen}></NavIconSpan>
  </NavIcon>
)

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return <StyledNavIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
}

export default Hamburger
