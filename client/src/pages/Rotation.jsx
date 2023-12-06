import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import rojo from '../images/rojo.png'
import pera from '../images/pera.png'
import mango from '../images/mango.png'
import zanahoria from '../images/zanahoria.png'
import redSlice2 from '../images/red-slice-0.png'
import redSlice4 from '../images/red-slice-1.png'
import redSlice0 from '../images/red-slice-2.png'
import redSlice3 from '../images/red-slice-3.png'
import redSlice1 from '../images/red-slice-4.png'
import leaf2 from '../images/leaf-2.png'

const images = [rojo, mango, pera, zanahoria]

const Container = styled.div`
  height: calc(100vh - 79px);
  width: 400vw;
  position: relative;
  transition: transform 0.5s ease-in-out;
`

const Slider = styled.div`
  transform: translateX(-${(props) => props.currentSlide * 100}vw);
  position: relative;
  display: flex;
  transition: transform 0.5s ease;
`

const Slide = styled.div`
  height: calc(100vh - 79px);
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

const BottleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: calc(50% - 190px);
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
  /* transform: rotate(-20deg); */
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
  height: calc(100vh - 79px);
  z-index: 100;
`

const FruitAnimated = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  width: 100%;
  height: 400vh;
`
const FruitSlide = styled.div`
  height: calc(100vh - 79px);
  position: relative;
`
const FruitSliceContainer = styled.div`
  &:first-of-type {
    position: absolute;
    top: 1vh;
    left: 20vw;
    height: 230px;
    transform: rotate(-30deg);
    filter: blur(.6px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
  }
  &:nth-of-type(2) {
    position: absolute;
    bottom: 1vh;
    left: 10vw;
    height: 250px;
    display: none;
  }
  &:nth-of-type(3) {
    position: absolute;
    top: 20vh;
    left: -8vw;
    height: 500px;
    filter: blur(3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
  }
  &:nth-of-type(4) {
    position: absolute;
    top: 5vh;
    right: 20vw;
    height: 180px;
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
  }
  &:nth-of-type(5) {
    filter: blur(1.5px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: 10vh;
    right: 1vw;
    height: 400px;
  }
  &:nth-of-type(6) {
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2)) hue-rotate(30deg);
    position: absolute;
    bottom: 61vh;
    right: 51.5vw;
    height: 110px;
    width: 200px;
    transform: rotate(210deg);
  }
  &:nth-of-type(7) {
    filter: blur(0.3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2))
      hue-rotate(30deg);
    position: absolute;
    bottom: 16vh;
    right: 35vw;
    height: 110px;
    width: 200px;
    object-fit: contain;
    transform: rotate(35deg);
  }
`

const FruitSlice = styled.img`
  width: 100%;
  height: 100%;
`

const Rotation = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const changeImage = (index) => {
    setCurrentSlide((index + images.length) % images.length)
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     changeImage(currentSlide + 1)
  //   }, 4000)

  //   return () => clearInterval(intervalId)
  // }, [currentSlide])

  return (
    <div style={{ overflow: 'hidden' }}>
      <Fixed>
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
        <BottleContainer>
          <BottleImg src={images[currentSlide]} alt="Bottle" />
          {/* <Logo>Buttle Juice</Logo> */}
        </BottleContainer>
        <FruitAnimated>
          <FruitSlide>
            <FruitSliceContainer>
              <FruitSlice src={redSlice0}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer>
              <FruitSlice src={redSlice1}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer>
              <FruitSlice src={redSlice2}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer>
              <FruitSlice src={redSlice3}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer>
              <FruitSlice src={redSlice4}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer>
              <FruitSlice src={leaf2}></FruitSlice>
            </FruitSliceContainer>
            <FruitSliceContainer>
              <FruitSlice src={leaf2}></FruitSlice>
            </FruitSliceContainer>
          </FruitSlide>
          <FruitSlide></FruitSlide>
          <FruitSlide></FruitSlide>
          <FruitSlide></FruitSlide>
        </FruitAnimated>
      </Fixed>
      <Container>
        <Slider currentSlide={currentSlide}>
          <Slide name="rojos" background="#c62d37">
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
        </Slider>
      </Container>
    </div>
  )
}

export default Rotation
