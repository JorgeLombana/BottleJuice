import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import {
  logoFake,
  redSlice2,
  redSlice4,
  redSlice0,
  redSlice3,
  redSlice1,
  orangeSlice0,
  orangeSlice1,
  orangeSlice2,
  orangeSlice3,
  appleSlice3,
  appleSlice1,
  appleSlice0,
  appleSlice2,
  leaf2,
} from '../../images'

export const shakeAnimation = keyframes`
  0% { transform: translateX(0); filter:blur(1px); }
  25% { transform: translateX(-10px); filter:blur(3px); }
  50% { transform: translateX(10px); filter:blur(5px); }
  75% { transform: translateX(-10px); filter:blur(3px); }
  100% { transform: translateX(0); filter:blur(1px); }
`
export const levitateAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

export const MainContainer = styled.div`
  position: relative;
  height: calc(100vh - 49px);
  width: 100vw;
  .bottleRelativeContainer {
    width: 100vw;
    height: calc(100vh - 49px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Container = styled.div`
  height: 100%;
  width: 400vw;
  position: relative;
  transition: transform 0.5s ease;
`

export const Slider_ = styled.div`
  transform: translateX(-${(props) => props.slideindex * 100}vw);
  position: relative;
  display: flex;
  transition: transform 0.5s ease;
`

export const Slide = styled.div`
  height: calc(100vh - 49px);
  width: 100vw;
  background-color: ${(props) => props.background};
  position: relative;
  color: white;
`

export const BackgroundText = styled.p`
  /* word-spacing: 100px; */
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 15vw;
  text-transform: uppercase;
  font-family: oswald;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -10px;
  white-space: nowrap;
  span {
    width: 15px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 9rem;
    letter-spacing: 0.7px;
  }
  @media screen and (max-width: 938px) {
    font-size: 8rem;
  }
  @media screen and (max-width: 850px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 710px) {
    font-size: 15.4vw;
  }
  @media screen and (max-width: 426px) {
    display: none;
  }
`

export const BottleImg = styled.img`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  filter: drop-shadow(35px 9px 7px rgba(0, 0, 0, 0.2));
  transition: filter 0.3s ease, transform 1s ease;
`

export const BottleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 376px;
  ${(props) =>
    props.shake &&
    css`
      animation: ${shakeAnimation} 0.5s ease-in-out infinite;
    `}
  .leafsContainer {
    position: absolute;
    width: 376px;
    height: 501px;
  }
`

export const Leaf = styled.div`
  position: absolute;
  transition: all 0.5s ease;

  &.leaf0 {
    &:first-of-type {
      filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2)) hue-rotate(30deg);
      position: absolute;
      top: ${(props) =>
        props.currentSlide === 0 || props.currentSlide === 2 ? '20px' : `70px`};
      right: ${(props) =>
        props.currentSlide === 0 || props.currentSlide === 2
          ? '200px'
          : `140px`};
      height: 110px;
      width: 200px;
      transform: rotate(
        ${(props) =>
          props.currentSlide === 0 || props.currentSlide === 2
            ? '220deg'
            : `100deg`}
      );
      z-index: -1;
    }
    &:nth-of-type(2) {
      filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2)) hue-rotate(30deg);
      position: absolute;
      top: ${(props) =>
        props.currentSlide === 0 || props.currentSlide === 2
          ? '360px'
          : `310px`};
      left: ${(props) =>
        props.currentSlide === 0 || props.currentSlide === 2
          ? '200px'
          : `140px`};
      height: 110px;
      width: 200px;
      transform: scaleX(-1)
        rotate(
          ${(props) =>
            props.currentSlide === 0 || props.currentSlide === 2
              ? '-220deg'
              : `-100deg`}
        );
      z-index: -1;
    }
  }
  &.leaf1 {
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2)) hue-rotate(30deg);
    position: absolute;
    top: ${(props) =>
      props.currentSlide === 1 || props.currentSlide === 3 ? '20px' : `60px`};
    right: ${(props) =>
      props.currentSlide === 1 || props.currentSlide === 3 ? '-20px' : `35px`};
    height: 110px;
    width: 200px;
    transform: scaleX(-1)
      rotate(
        ${(props) =>
          props.currentSlide === 1 || props.currentSlide === 3
            ? '220deg'
            : `100deg`}
      );
    z-index: -1;
  }

  &.leaf1-1 {
    filter: blur(0.3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2))
      hue-rotate(30deg);
    position: absolute;
    bottom: ${(props) =>
      props.currentSlide === 1 || props.currentSlide === 3 ? '20px' : `70px`};

    right: ${(props) =>
      props.currentSlide === 1 || props.currentSlide === 3 ? '200px' : `140px`};
    height: 110px;
    width: 200px;
    object-fit: contain;
    transform: scaleX(-1)
      rotate(
        ${(props) =>
          props.currentSlide === 1 || props.currentSlide === 3
            ? '35deg'
            : `-70deg`}
      );
    z-index: -1;
  }
`
export const LeafImg = styled.img`
  height: 100%;
`

export const Arrow = styled.i`
  z-index: 999;
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

export const Fixed = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 100;
  .leafsContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const FruitAnimated = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100vh - 49px);
  width: 100%;
  overflow: hidden;
`

export const FruitSlide = styled.div`
  height: calc(100vh - 49px);
  position: relative;
`

export const FruitSliceContainer = styled.div`
  transition: all 0.5s ease;
  position: relative;
  z-index: -99;
  @media screen and (max-width: 1280px) {
    img {
      height: 90%;
    }
  }
  @media screen and (max-width: 1024px) {
    &:first-of-type,
    &:nth-of-type(6) {
      margin-left: -10vw;
    }
    &:nth-of-type(4) {
      margin-right: -5vw;
    }
    &&:nth-of-type(8) {
      margin-right: -13vw;
    }
    img {
      margin-top: 5vh;
      height: 80%;
    }
  }
  @media screen and (max-width: 850px) {
    img {
      margin-top: 10vh;
      height: 60%;
    }
  }
  @media screen and (max-width: 710px) {
    img {
      margin-top: 10vh;
      /* height: 55%; */
    }
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
  /*   
  
  

  */
  ${(props) =>
    props.levitation &&
    css`
      animation: ${levitateAnimation} 3s ease-in-out infinite;
    `}

  /* red fruit slices */
  &:first-of-type {
    position: absolute;
    top: ${(props) => (props.currentSlide === 0 ? '1vh' : `-40vh`)};
    left: 15vw;
    height: 270px;

    filter: blur(0.6px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 0 ? '-30deg' : '-180deg')}
      );
    }
  }
  &:nth-of-type(2) {
    display: none;
  }
  &:nth-of-type(3) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 0 ? '20vh' : `-110vh`)};
    left: -10vw;
    height: 600px;
    filter: blur(3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 0 ? '' : '180deg')}
      );
    }
  }
  &:nth-of-type(4) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 0 ? '5vh' : `-30vh`)};
    right: 20vw;
    height: 160px;
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;

      transform: scaleX(-1)
        rotate(${(props) => (props.currentSlide === 0 ? '60deg' : '180deg')});
    }
  }
  &:nth-of-type(5) {
    filter: blur(1.5px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: ${(props) => (props.currentSlide === 0 ? '-10vh' : `120vh`)};
    right: -5vw;
    height: 500px;
    transform: rotate(
      ${(props) => (props.currentSlide === 0 ? '' : '-180deg')}
    );
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 0 ? '' : '180deg')}
      );
    }
  }

  /* yellow fruit slices */
  &:nth-of-type(6) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 1 ? '1vh' : `130vh`)};
    left: 20vw;
    height: 200px;

    filter: blur(0.6px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 1 ? '0deg' : '180deg')}
      );
    }
  }
  &:nth-of-type(7) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 1 ? '45vh' : `100vh`)};
    left: -8vw;
    height: 300px;
    filter: blur(3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    transform: rotate(
      ${(props) => (props.currentSlide === 1 ? '60deg' : '-180deg')}
    );
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 1 ? '60deg' : '180deg')}
      );
    }
  }
  &:nth-of-type(8) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 1 ? '5vh' : `100vh`)};
    right: 10vw;
    height: 180px;
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2)) blur(0.4px);
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 1 ? '180deg' : '-180deg')}
      );
    }
    @media screen and (max-width: 1024px) {
      right: 20vw;
    }
    @media screen and (max-width: 768px) {
      right: 10vw;
    }
  }
  &:nth-of-type(9) {
    filter: blur(1.5px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: ${(props) => (props.currentSlide === 1 ? '0vh' : `-100vh`)};
    right: -5vw;
    height: 350px;

    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 1 ? '-180deg' : '180deg')}
      );
    }
  }

  /* green fruit slices */
  &:nth-of-type(10) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 2 ? '5vh' : `-34vh`)};
    left: 11vw;
    height: 220px;
    filter: blur(0.6px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 2 ? '-30deg' : '180deg')}
      );
    }
    @media screen and (max-width: 1024px) {
      left: 5vw;
    }
    @media screen and (max-width: 768px) {
      left: 0;
    }
  }
  &:nth-of-type(11) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 2 ? '40vh' : `-65vh`)};
    left: -8vw;
    height: 400px;
    filter: blur(3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 2 ? '0deg' : '-180deg')}
      );
    }
  }
  &:nth-of-type(12) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 2 ? '5vh' : `-30vh`)};
    right: 20vw;
    height: 180px;
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 2 ? '0deg' : '180deg')}
      );
    }
    @media screen and (max-width: 1024px) {
      right: 15vw;
    }
    @media screen and (max-width: 768px) {
      right: 8vw;
    }
  }
  &:nth-of-type(13) {
    filter: blur(1.5px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: ${(props) => (props.currentSlide === 2 ? '0vh' : `100vh`)};
    right: -5vw;
    height: 400px;

    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 2 ? '' : '-180deg')}
      );
    }
  }

  /* carrot fruit slices */
  &:nth-of-type(14) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 3 ? '1vh' : `130vh`)};
    left: 20vw;
    height: 200px;

    filter: blur(0.6px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 3 ? '0deg' : '180deg')}
      );
    }
    @media screen and (max-width: 1024px) {
      left: 10vw;
    }
    @media screen and (max-width: 768px) {
      left: 6vw;
    }
  }
  &:nth-of-type(15) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 3 ? '45vh' : `100vh`)};
    left: -8vw;
    height: 300px;
    filter: blur(3px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    transform: rotate(
      ${(props) => (props.currentSlide === 3 ? '60deg' : '-180deg')}
    );
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 3 ? '60deg' : '180deg')}
      );
    }
  }
  &:nth-of-type(16) {
    position: absolute;
    top: ${(props) => (props.currentSlide === 3 ? '5vh' : `100vh`)};
    right: 10vw;
    height: 180px;
    filter: drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2)) blur(0.4px);
    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 3 ? '180deg' : '-180deg')}
      );
    }
    @media screen and (max-width: 1024px) {
      right: 5vw;
    }
    @media screen and (max-width: 768px) {
      right: 0vw;
    }
  }
  &:nth-of-type(17) {
    filter: blur(1.5px) drop-shadow(25px 9px 7px rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: ${(props) => (props.currentSlide === 3 ? '0vh' : `-100vh`)};
    right: -5vw;
    height: 350px;

    img {
      transition: all 0.5s ease;
      transform: rotate(
        ${(props) => (props.currentSlide === 3 ? '-180deg' : '180deg')}
      );
    }
  }
`
export const FakeLogo = styled.img`
  position: absolute;
  height: 450px;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FruitSlice = styled.img`
  width: 100%;
  height: 100%;
`
