import { rojo, mango, pera, zanahoria } from '../../images'
import {
  logoFake,
  redSlice2,
  redSlice4,
  redSlice0,
  redSlice3,
  redSlice1,
  leaf2,
  orangeSlice0,
  orangeSlice1,
  orangeSlice2,
  orangeSlice3,
  appleSlice3,
  appleSlice1,
  appleSlice0,
  appleSlice2,
} from '../../images'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MainContainer,
  Container,
  Slider_,
  Slide,
  BackgroundText,
  BottleContainer,
  BottleImg,
  Arrow,
  Fixed,
  FruitAnimated,
  FruitSlide,
  FruitSliceContainer,
  FakeLogo,
  FruitSlice,
  Leaf,
  LeafImg,
} from './slider.styled'

const images = [rojo, mango, pera, zanahoria]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [shake, setShake] = useState(false)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    const loadImage = () => {
      const timer = setTimeout(() => {
        setShowImage(true)
      }, 800)
      return () => clearTimeout(timer)
    }
    const timer = setTimeout(() => {
      setShowImage(true)
    }, 1000)
    window.addEventListener('load', loadImage)
    return () => clearTimeout(timer)
  }, [])

  const changeImage = (index) => {
    setCurrentSlide((index + images.length) % images.length)
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeImage(currentSlide + 1)
    }, 2800)

    return () => clearInterval(intervalId)
  }, [currentSlide])

  return (
    <MainContainer style={{ overflow: 'hidden' }}>
      <Link to="/products">
        <Fixed>
          <div className="bottleRelativeContainer">
            <BottleContainer currentSlide={currentSlide} shake={shake}>
              <BottleImg
                loading="eager"
                currentSlide={currentSlide}
                src={images[currentSlide]}
                alt="Bottle"
              />
              <FakeLogo src={logoFake}></FakeLogo>

              <div className="leafsContainer">
                <Leaf className="leaf0" currentSlide={currentSlide}>
                  {showImage && <LeafImg loading="lazy" src={leaf2} />}
                </Leaf>

                <Leaf className="leaf0" currentSlide={currentSlide}>
                  {showImage && <LeafImg loading="lazy" src={leaf2} />}
                </Leaf>

                <Leaf currentSlide={currentSlide} className="leaf1">
                  {showImage && <LeafImg loading="lazy" src={leaf2} />}
                </Leaf>

                <Leaf currentSlide={currentSlide} className="leaf1-1">
                  {showImage && <LeafImg loading="lazy" src={leaf2} />}
                </Leaf>
              </div>
            </BottleContainer>
          </div>

          <FruitAnimated>
            <FruitSlide>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={redSlice0}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={redSlice1}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={redSlice2}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={redSlice3}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={redSlice4}></FruitSlice>
              </FruitSliceContainer>

              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice0}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice1}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice2}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice3}></FruitSlice>
              </FruitSliceContainer>

              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={appleSlice0}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={appleSlice1}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={appleSlice2}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={appleSlice3}></FruitSlice>
              </FruitSliceContainer>

              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice0}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice1}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice2}></FruitSlice>
              </FruitSliceContainer>
              <FruitSliceContainer
                className={`slider${currentSlide}`}
                levitation
                currentSlide={currentSlide}
              >
                <FruitSlice src={orangeSlice3}></FruitSlice>
              </FruitSliceContainer>
            </FruitSlide>
          </FruitAnimated>
        </Fixed>
      </Link>

      {/* <Arrow
        onClick={() => changeImage(currentSlide - 1)}
        direction="left"
        className="ri-arrow-left-double-line"
      />
      <Arrow
        onClick={() => changeImage(currentSlide + 1)}
        direction="right"
        className="ri-arrow-right-double-line"
      /> */}

      <Container>
        <Slider_ slideindex={currentSlide}>
          <Slide name="rojos" background="#e84550">
            <BackgroundText>Berry Night</BackgroundText>
            <BackgroundText className="smallText">Berry Night</BackgroundText>
            <BackgroundText className="smallText">Berry Night</BackgroundText>
            <BackgroundText className="smallText">Berry Night</BackgroundText>
          </Slide>
          <Slide name="mango" background="#f9b637">
            <BackgroundText>thunder juice</BackgroundText>
          </Slide>
          <Slide name="pera" background="#d3dc99">
            <BackgroundText>Green Juice</BackgroundText>
          </Slide>
          <Slide name="zanahoria" background="#e85d40">
            <BackgroundText>Paradise Juice</BackgroundText>
          </Slide>
        </Slider_>
      </Container>
    </MainContainer>
  )
}

export default Slider
