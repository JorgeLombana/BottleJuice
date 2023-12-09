import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../pages/Cart'

const HeaderContainer = styled.header`
  padding: 10px 0;
  background-color: #ffff;
  box-shadow: 0 4px 4px #00000026;
  position: sticky;
  top: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-weight: 500;
  width: 100%;
  z-index: 999;
  color: rgba(0, 0, 0, 0.8);
`

const ContainerLeft = styled.div`
  flex: 1;
  margin-right: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Logo = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 800;
  text-transform: uppercase;
`

const ContainerRight = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  margin-left: 10%;
  justify-content: flex-start;
  align-items: center;
`

const UnordedList = styled.ul`
  display: flex;
  gap: 40px;
`

const ContainerMobile = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const ContainerDesktop = styled.div`
  display: none;
  @media only screen and (min-width: 1025px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`

const UnordedListMobile = styled.ul`
  background-color: white;
  position: absolute;
  left: -500px;
  top: 0;
  width: 45%;
  height: 100vh;
  text-align: center;
  font-size: 1.3rem;
  box-shadow: 15px 0 60px 20px rgba(0, 0, 0, 0.5);
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-weight: 400;
  display: none;
  transition: all 0.35s ease-in-out;
  z-index: 999;
  @media only screen and (max-width: 1024px) {
    left: -550px;
    display: flex;
    transform: translateX(${(props) => (props.open ? '550' : '0')}px);
  }
  @media only screen and (max-width: 837px) {
    width: 55%;
  }
  @media only screen and (max-width: 768px) {
    width: 65%;
  }
  @media only screen and (max-width: 426px) {
    width: 100%;
  }
`

const LogoMobile = styled.h1`
  font-size: 1.5rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin-top: 5px;
  /* margin-right: -50px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 20px;
  font-weight: 600;
`

const Hr = styled.hr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: -40px;
  width: 100%;
  position: absolute;
  top: 87.5px;
  left: 0;
`

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
  width: 20px;
  height: 18px;
  position: relative;
  cursor: pointer;
  display: flex;
  margin-top: 7px;
  overflow-y: visible;
`

const NavIconSpan = styled.span`
  display: block;
  position: absolute;
  height: 1.5px;
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
const StyledIcon = styled.i`
  position: absolute;
  top: 0;
  right: -80px;
  font-size: 35px;
  cursor: pointer;
  @media only screen and (max-width: 837px) {
    right: -60px;
  }
  @media only screen and (max-width: 659px) {
    right: -50px;
  }
  @media only screen and (max-width: 567px) {
    right: -40px;
  }
  @media only screen and (max-width: 426px) {
    right: 0px;
  }
`

const CartContainer = styled.i`
  position: relative;
`

const CartProduct = styled.span`
  width: 15px;
  height: 15px;
  font-size: 0.7rem;
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  margin-left: -15px;
  top: -8px;
  left: 28px;
  padding-top: 1px;
`

const StyledNavIcon = ({ isOpen, onClick }) => (
  <NavIcon id="nav-icon1" open={isOpen} onClick={onClick}>
    <NavIconSpan open={isOpen}></NavIconSpan>
    <NavIconSpan open={isOpen}></NavIconSpan>
    <NavIconSpan open={isOpen}></NavIconSpan>
  </NavIcon>
)

export default function Header() {
  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)
  console.log(productData)

  const closeMenu = () => {
    setOpen(!open)
  }
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen(!open)
  }
  const { currentUser } = useSelector((state) => state.user)

  return (
    <HeaderContainer>
      <ContainerDesktop>
        <ContainerLeft>
          <UnordedList>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about">
              <li>About</li>
            </Link>
            {/* pendiente */}
            <Link to="/reviews">
              <li>Reviews</li>
            </Link>
          </UnordedList>
        </ContainerLeft>

        <ContainerLogo>
          <Link to="/">
            <Logo>Bottle Juice</Logo>
          </Link>
        </ContainerLogo>

        <ContainerRight>
          <UnordedList>
            <Link to="/contact">
              <li>Contact us</li>
            </Link>
            <Link to="/products">
              <li>Products</li>
            </Link>
            <Link to="/products">
              <i className="ri-search-line" style={{ fontSize: 18 }}></i>
            </Link>
            <Link to="/cart">
              <CartContainer
                className="ri-shopping-cart-line"
                style={{
                  fontSize: 18,
                  marginLeft: -20,
                }}
              >
                <CartProduct>{productData.length}</CartProduct>
              </CartContainer>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <div style={{ marginLeft: -25 }}>
                  <img
                    src={currentUser.profilePicture}
                    style={{
                      height: 28,
                      width: 28,
                      borderRadius: 50,
                      objectFit: 'cover',
                    }}
                    alt="profile"
                  />
                </div>
              ) : (
                <i
                  className="ri-user-line"
                  style={{ fontSize: 18, marginLeft: -20 }}
                ></i>
              )}
            </Link>
          </UnordedList>
        </ContainerRight>
      </ContainerDesktop>

      <ContainerMobile>
        <StyledNavIcon isOpen={open} onClick={handleMenu} />

        <ContainerLogo>
          <Link to="/">
            <Logo className="font-bold">Bottle Juice</Logo>
          </Link>
        </ContainerLogo>

        <Link to="/profile">
          {currentUser ? (
            <img
              src={currentUser.profilePicture}
              alt="profile"
              className="h-7 w-7 rounded-full object-cover"
            />
          ) : (
            <i className="ri-user-line" style={{ fontSize: 18 }}></i>
          )}
        </Link>
      </ContainerMobile>

      <UnordedListMobile open={open}>
        <ContainerLogo>
          <Link to="/">
            <LogoMobile>Bottle Juice</LogoMobile>
          </Link>
          <StyledIcon onClick={handleMenu} className="ri-close-line" />
        </ContainerLogo>
        <Hr />

        <Link to="/" onClick={closeMenu}>
          <li>Home</li>
        </Link>

        <Link to="/products" onClick={closeMenu}>
          <li>Products</li>
        </Link>

        <Link to="/cart" onClick={closeMenu}>
          <li>Shopping cart</li>
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          <li>Contact us</li>
        </Link>

        <Link to="/reviews" onClick={closeMenu}>
          <li>Reviews</li>
        </Link>
        
        <Link to="/about" onClick={closeMenu}>
          <li>About</li>
        </Link>

      </UnordedListMobile>
    </HeaderContainer>
  )
}