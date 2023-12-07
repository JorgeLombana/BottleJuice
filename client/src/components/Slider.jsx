import React, { useState, useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import rojo from '../images/rojo.png'
import pera from '../images/pera.png'
import mango from '../images/mango.png'
import zanahoria from '../images/zanahoria.png'
import logoFake from '../images/logo_fake.png'
import redSlice2 from '../images/red-slice-0.png'
import redSlice4 from '../images/red-slice-1.png'
import redSlice0 from '../images/red-slice-2.png'
import redSlice3 from '../images/red-slice-3.png'
import redSlice1 from '../images/red-slice-4.png'
import leaf2 from '../images/leaf-2.png'

const images = [rojo, mango, pera, zanahoria]

const MainContainer = styled.div`
  height: 100vh;
`

const Container = styled.div`
  height: 100%;
  width: 400vw;
  position: relative;
  transition: transform 0.5s ease;
`

const Slider_ = styled.div`
  transform: translateX(-${(props) => props.slideindex * 100}vw);
  position: relative;
  display: flex;
  transition: transform 0.5s ease;
`

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.background};
  position: relative;
  color: white;
`

const BackgroundText = styled.pre`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 15rem;
  text-transform: uppercase;
  font-family: oswald;
  font-weight: 800;
  display: flex;
  margin-top: 150px;
  margin-left: -50px;
  justify-content: center;
  letter-spacing: -10px;
`

const shakeAnimation = keyframes`
  0% { transform: translateX(0); filter:blur(1px); }
  25% { transform: translateX(-10px); filter:blur(3px); }
  50% { transform: translateX(10px); filter:blur(5px); }
  75% { transform: translateX(-10px); filter:blur(3px); }
  100% { transform: translateX(0); filter:blur(1px); }
`

const BottleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: calc(50% - 190px);
  ${(props) =>
    props.shake &&
    css`
      animation: ${shakeAnimation} 0.5s ease-in-out infinite;
    `}
`

const BottleImg = styled.img`
  height: 65vh;
  display: flex;
  align-items: center;
  margin-inline: auto;
  margin-top: 100px;
  z-index: 2;
  filter: drop-shadow(35px 9px 7px rgba(0, 0, 0, 0.2));
  transition: filter 0.3s ease, transform 1s ease;
`

const Arrow = styled.i`
  z-index: 2;
  cursor: pointer;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  font-size: 2rem;
  top: 50%;
  color: rgba(255, 255, 255, 0.3);
  left: ${(props) => (props.direction === 'left' ? '20px' : 'auto')};
  right: ${(props) => (props.direction === 'right' ? '20px' : 'auto')};
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const Logo = styled.h2`
  margin-top: 50px;
  position: absolute;
  z-index: 2;
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  color: white;
  letter-spacing: -1px;
  font-weight: 800;
  text-transform: uppercase;
`

const Fixed = styled.div`
  position: absolute;
  width: 98.9vw;
  height: 100%;
  z-index: 100;
`

const FruitAnimatedContainer = styled.div`
  height: 100vh;
  /* overflow: hidden; */
`

const FruitAnimated = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

const FruitSlide = styled.div`
  height: 100vh;
  position: relative;
`

const FruitSliceContainer = styled.div`
  transition: all 0.5s ease;
  &:first-of-type {
    position: absolute;
    top: ${(props) => (props.currentSlide === 0 ? '1vh' : `-30vh`)};
    left: 20vw;
    height: 230px;
    transform: rotate(
      ${(props) => (props.currentSlide === 0 ? '-30deg' : '180deg')}
    );
    filter: blur(0.6px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
  }
  &:nth-of-type(2) {
    position: absolute;
    bottom: 7vh;
    left: 20vw;
    height: 250px;
    transform: scaleX(-1);
    filter: blur(1.3px);
    display: none;
  }
  &:nth-of-type(3) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 0 ? '20vh' : `-55vh`)};
    left: -8vw;
    height: 500px;
    filter: blur(3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    transform: rotate(
      ${(props) => (props.currentSlide === 0 ? '' : '-180deg')}
    );
  }
  &:nth-of-type(4) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 0 ? '5vh' : `-30vh`)};
    right: 20vw;
    height: 180px;
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    transform: rotate(${(props) => (props.currentSlide === 0 ? '' : '180deg')});
  }
  &:nth-of-type(5) {
    filter: blur(1.5px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: ${(props) => (props.currentSlide === 0 ? '10vh' : `100vh`)};
    right: -5vw;
    height: 400px;
    transform: rotate(
      ${(props) => (props.currentSlide === 0 ? '' : '-180deg')}
    );
  }
  &:nth-of-type(6) {
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2)) hue-rotate(30deg);
    position: absolute;
    top: ${(props) => (props.currentSlide === 0 ? ' 15vh' : `25vh`)};
    right: ${(props) => (props.currentSlide === 0 ? ' 51.5vw' : `45vw`)};
    height: 110px;
    width: 200px;
    transform: rotate(
      ${(props) => (props.currentSlide === 0 ? '220deg' : `100deg`)}
    );
    z-index: -1;
  }
  &:nth-of-type(7) {
    filter: blur(0.3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2))
      hue-rotate(30deg);
    position: absolute;
    bottom: ${(props) => (props.currentSlide === 0 ? ' 24vh' : `30vh`)};
    right: ${(props) => (props.currentSlide === 0 ? ' 35vw' : `45vw`)};
    height: 110px;
    width: 200px;
    object-fit: contain;
    transform: rotate(
      ${(props) => (props.currentSlide === 0 ? '35deg' : `-70deg`)}
    );
    z-index: -1;
  }
`

const FakeLogo = styled.img`
  position: absolute;
  z-index: 3;
  width: 60%;
  top: 15vh;
`

const FruitSlice = styled.img`
  width: 100%;
  height: 100%;
`

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [shake, setShake] = useState(false)

  const changeImage = (index) => {
    setCurrentSlide((index + images.length) % images.length)
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeImage(currentSlide + 1)
    }, 3500)

    return () => clearInterval(intervalId)
  }, [currentSlide])

  return (
    <MainContainer style={{ overflow: 'hidden' }}>
      <Fixed>
        <BottleContainer currentSlide={currentSlide} shake={shake}>
          <BottleImg
            currentSlide={currentSlide}
            src={images[currentSlide]}
            alt="Bottle"
          />
          <FakeLogo src={logoFake}></FakeLogo>
        </BottleContainer>

        <FruitAnimated>
          <FruitSlide>
            <FruitSliceContainer currentSlide={currentSlide}>
              <FruitSlice src={redSlice0}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer currentSlide={currentSlide}>
              <FruitSlice src={redSlice1}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer currentSlide={currentSlide}>
              <FruitSlice src={redSlice2}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer currentSlide={currentSlide}>
              <FruitSlice src={redSlice3}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer currentSlide={currentSlide}>
              <FruitSlice src={redSlice4}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer currentSlide={currentSlide}>
              <FruitSlice src={leaf2}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer currentSlide={currentSlide}>
              <FruitSlice src={leaf2}></FruitSlice>
            </FruitSliceContainer>
          </FruitSlide>

          {/* el otro fruit slide con otro classname :v */}
        </FruitAnimated>

        <Arrow
          onClick={() => changeImage(currentSlide - 1)}
          direction="left"
          className="ri-arrow-left-double-line"
        />
        <Arrow
          onClick={() => changeImage(currentSlide + 1)}
          direction="right"
          className="ri-arrow-right-double-line"
        />
      </Fixed>

      <Container>
        <Slider_ slideindex={currentSlide}>
          <Slide name="rojos" background="#e84550">
            <BackgroundText>Green juice</BackgroundText>
          </Slide>
          <Slide name="mango" background="#f9b637">
            <BackgroundText>Green juice</BackgroundText>
          </Slide>
          <Slide name="pera" background="#d3dc99">
            <BackgroundText>Green juice</BackgroundText>
          </Slide>
          <Slide name="zanahoriaF" background="#e85d40">
            <BackgroundText>Green juice</BackgroundText>
          </Slide>
        </Slider_>
      </Container>
    </MainContainer>
  )
}

export default Slider
