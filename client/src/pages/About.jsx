import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  /* background-color: white; */
`

const Section = styled.section`
  padding-top: 40px;
  h2 {
    position: relative;
    font-size: 4.5rem;
    font-family: oswald;
    text-align: center;
    letter-spacing: -2px;
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 3.9rem;
      line-height: 4.5rem;
    }
  }
  @media screen and (max-width: 768) {
    h2 {
      /* margin-bottom: -50px; */
    }
  }
`

const HeaderImage = styled.div`
  background-color: #e7e7e3;
  height: 82vh;
  @media screen and (max-width: 1024px) {
    height: 72vh;
  }
  @media screen and (max-width: 768px) {
    height: 62vh;
  }
  @media screen and (max-width: 702px) {
    height: 270vh;
  }
  @media screen and (max-width: 560px) {
    height: 250vh;
  }
  @media screen and (max-width: 528px) {
    height: 230vh;
  }
  @media screen and (max-width: 500px) {
    height: 215vh;
  }
  @media screen and (max-width: 476px) {
    height: 205vh;
  }
  @media screen and (max-width: 426px) {
    height: 195vh;
  }
  @media screen and (max-width: 376px) {
    height: 170vh;
  }
  @media screen and (max-width: 321px) {
    height: 140vh;
  }
`

const ImagesContainer = styled.div`
  overflow-x: hidden;
  margin-top: -55px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-top: -40px;
    &:first-of-type {
      margin-right: -200px;
    }
    &:nth-child(3) {
      margin-left: -200px;
    }
  }
  @media screen and (max-width: 702px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: -70px;
    div {
      margin-bottom: 10vh;
      margin-top: -270px;
      &:first-of-type {
        margin-top: 0px;
        margin-right: 0;
      }
      &:nth-child(2) {
        margin-top: -250px;
      }
      &:nth-child(3) {
        margin-left: 0px;
      }
      img {
        height: 100%;
        margin: 0;
        width: 100%;
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 425px) {
    div {
      margin-bottom: 15vh;
      &:first-of-type {
        margin-top: 40px;
      }
    }
  }
`

const SecondSection = styled(Section)`
  padding-top: 4%;
  height: 100;
  @media screen and (max-width: 703px) {
    padding-bottom: 30%;
  }
  @media screen and (max-width: 577px) {
    padding-bottom: 25%;
  }
  @media screen and (max-width: 520px) {
    padding-bottom: 40%;
  }
  @media screen and (max-width: 426px) {
    padding-bottom: 70%;
  }
  @media screen and (max-width: 348px) {
    padding-bottom: 100%;
  }
  .subtitleContainer {
    width: 600px;
    margin-inline: auto;
    display: flex;
    @media screen and (max-width: 703px) {
      width: 90vw;
      margin-top: 2vh;
    }
    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
      width: 600px;
      text-align: center;
      line-height: 2.5rem;
    }
    svg {
      margin-top: -30px;
      margin-left: -30px;
    }
  }
  .aboutFirstProduct {
    position: relative;
    margin-top: 1%;
    padding-inline: 9vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1300px) {
      padding-inline: 4vw;
    }
    @media screen and (max-width: 703px) {
      flex-direction: column;
    }

    .imageBackground {
      min-width: 450px;
      height: 400px;
      background-color: #f7fafa;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 943px) {
        min-width: 400px;
      }
      @media screen and (max-width: 813px) {
        min-width: 350px;
      }
      @media screen and (max-width: 493px) {
        margin-top: 10vh;
      }
      @media screen and (max-width: 375px) {
        min-width: 90vw;
        margin-top: 20vh;
      }
    }
    @media screen and (max-width: 703px) {
      width: 90%;
      margin-top: 20vh;
      margin-inline: auto;
    }
    .textDescription {
      padding-left: 50px;

      @media screen and (max-width: 943px) {
        padding-left: 20px;
      }
      p {
        font-size: 1.5rem;
        line-height: 2.5rem;
        @media screen and (max-width: 1160px) {
          font-size: 1.3rem;
          line-height: 2rem;
        }
        @media screen and (max-width: 943px) {
          font-size: 1.1rem;
          line-height: 1.9rem;
          padding-top: 5vh;
        }
      }
    }
  }
`

const FirstSection = styled.section`
  height: calc(100vh - 49px);
`

const StyledImage = styled.img`
  transform: scale(0.9);
  &.product1 {
    margin-top: 50px;
    margin-left: 50px;
    width: 50%;
    height: auto;
    z-index: 1;
  }
  @media screen and (max-width: 1024px) {
    transform: scale(0.8);
  }
`

const moveUp = keyframes`
    0% {
      transform: translateY(0);
      filter: blur(3px);
    }
    0.25% {
      transform: translateY(-7%);
      filter: blur(2px);
    }
    0.3% {
      transform: translateY(-8%);
      filter: blur(1px);
    }
    0.35% {
      transform: translateY(-9%); filter: blur(0);
    }
    50% {
      transform: translateY(-94%);
    }
    100% {
      transform: translateY(0);
    }
    
  `
const moveDown = keyframes`
0% {
  transform: translateY(-94%);
  filter: blur(3px);
}
0.25% {
  transform: translateY(-87%);
  filter: blur(2px);
}
0.3% {
  transform: translateY(-86%);
  filter: blur(1px);
}
0.35% {
  transform: translateY(-85%);
  filter: blur(0);
}
50% {
  transform: translateY(0);
}
100% {
  transform: translateY(-94%);
}
`

const moveUpMobile = keyframes`
    0% {
      transform: translateY(-10%);
      filter: blur(3px);
    }
    0.25% {
      transform: translateY(-17%);
      filter: blur(2px);
    }
    0.3% {
      transform: translateY(-18%);
      filter: blur(1px);
    }
    0.35% {
      transform: translateY(-19%); filter: blur(0);
    }
    50% {
      transform: translateY(-84%);
    }
    100% {
      transform: translateY(-10%);
    }
    
  `
const moveDownMobile = keyframes`
0% {
  transform: translateY(-84%);
  filter: blur(3px);
}
0.25% {
  transform: translateY(-77%);
  filter: blur(2px);
}
0.3% {
  transform: translateY(-76%);
  filter: blur(1px);
}
0.35% {
  transform: translateY(-75%);
  filter: blur(0);
}
50% {
  transform: translateY(0);
}
100% {
  transform: translateY(-84%);
}
`

const FadeContainer = styled.div`
  height: calc(100vh - 49px);
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.5) 15%,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0) 80%,
    rgba(255, 255, 255, 0.5) 85%,
    rgba(255, 255, 255, 1) 100%
  );
`

const GridContainer = styled.div`
  top: 0;
  left: -550px;
  position: absolute;
  width: 110%;
  transform: rotate(5deg);
  display: flex;
  gap: 15px;

  z-index: -9;
  @media screen and (max-width: 1024px) {
    /* transform: rotate(5deg) ; */
  }
  @media screen and (max-width: 1024px) {
    transform: scale(0.9) rotate(5deg);
    margin-left: -100px;
  }
  @media screen and (max-width: 769px) {
    transform: scale(0.8) rotate(5deg);
    margin-left: -150px;
  }
  @media screen and (max-width: 426px) {
    transform: scale(0.8) rotate(5deg);
    margin-left: -150px;
  }
  @media screen and (max-width: 376px) {
    transform: scale(0.8) rotate(5deg);
    margin-left: -170px;
  }
  @media screen and (max-width: 321px) {
    margin-left: -200px;
  }
`

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  transition: all ease-in-out;
  &:first-of-type,
  &:nth-of-type(3) {
    animation: ${moveUp} 250s linear infinite;
  }
  &:nth-of-type(2),
  &:nth-of-type(4) {
    animation: ${moveDown} 250s linear infinite;
  }
  div {
    height: 400px;
    background-color: #f2f3f5;
    margin: 15px 0;
  }

  @media screen and (max-width: 769px) {
    &:first-of-type,
    &:nth-of-type(3) {
      animation: ${moveUpMobile} 250s linear infinite;
    }
    &:nth-of-type(2),
    &:nth-of-type(4) {
      animation: ${moveDownMobile} 250s linear infinite;
    }
  }
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 0 -50px;
  margin-left: -8px;
  @media screen and (max-width: 1024px) {
    transform: scale(1.3);
    object-position: 0 10px;
  }
`
const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-size: 4.5rem;
  font-family: oswald;
  letter-spacing: -2px;
  z-index: 1;
  background-color: #000000a5;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    font-size: 3rem;
    letter-spacing: -1px;
  }
  @media screen and (max-width: 427px) {
    font-size: 2.4rem;
    letter-spacing: 0;
  }
  @media screen and (max-width: 427px) {
    font-size: 2rem;
  }
`

const OutroSection = styled(SecondSection)`
  background-color: #e7e7e3;
  text-align: center;
  padding-bottom: 50px;
  button {
    margin-top: 20px;
    margin-inline: auto;
    background-color: black;
    color: white;
    height: 50px;
    padding-inline: 70px;
    i {
      margin-left: 5px;
    }
  }
`
const ProductImg = styled.img``

const images = [
  'https://images.ctfassets.net/iw4cawak30d4/3ktss87HncTdCRmPXvTVbQ/3782adf265d47924b34df39b5fddaef7/a02-carro-carrot-cinnamon-pdp-web.png?fm=avif&q=60&w=600',
  'https://images.ctfassets.net/iw4cawak30d4/1hVmoVK53CpTx3uxJkIXEQ/cdcbb4aaefdf839efe2e52e03c9ee9b1/A34-PKLIME-Dragon-Fruit-Lime-Deconstructed-pdp-web.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/51lc9lEmo6x6dPa1mElX2A/1ea1b4d650b16c4dfb16c2f90fdf52d5/A32-GREEN-Avocado-Greens-Deconstructed-pdp-web.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/3a0gxsoFdHpGThSLFF2TCV/673266ee5323d9d4e319c734729da785/A30-CRAN-Pear-Cranberry-deconstructed.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/24A5nttPGmzLcFmDwYbnQU/253b4ae8a3140a71d6fb1e02e8fa84c5/a11-choblu-deconstructed-pdp-web.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/4kBv8Os24VVsEL8xf9H1wP/1f6364d3a389bdcdf3cb4099c0f1055b/a04-straw-deconstructed-pdp-web.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/3nwR6psSY49pVSyeobu8jn/e19bed55bd56ad360f71d8ea23b0388f/A06-MINT_Mint_Cacao-Product-Shot.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/14SmO54WDBsZxbkzDtBHbq/e2d313098eec41d4e60e54e9f9729f3f/a01-acai-cherry-pdp-web.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/37600SaPqYcHacm0LhGJ9w/fa815981f70f999cc52d652fbf930c44/a08-banana-deconstructed-pdp-web.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/7ccshgg3pWSih2hd6Of4ai/bc355705465e216c1325eecf270aff50/A21-MOCHA_Cold_Brew_Cacao.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/5y3JSX5wO2vovgCJLAK2Wu/b0c5017c99926157c682d158bedcb6f7/A29-Pina_Passionfruit_Pineapple_Product-Shot__1_.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/1IvKZbEPB4h3gaIZya10Pu/9573f7c2526efcaeb018a29038e93835/A28-Skippy_Banana_Almond_Product-Shot__1_.png?fm=avif&q=40&w=491',
  'https://images.ctfassets.net/iw4cawak30d4/1cLldU7m9coiTvH0VlaZuk/9909a059a539c4b9d01fad0c46682d14/a03-papa-deconstructed-pdp-web.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/3fcbAZtKaQU9l6lr44fa4A/f0dc10128449ae6a65c4ca416170ea80/A17-GING_Ginger___Greens-Product-Shot.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/3fcbAZtKaQU9l6lr44fa4A/f0dc10128449ae6a65c4ca416170ea80/A17-GING_Ginger___Greens-Product-Shot.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/45CBcgyw3xZGhX6v6CNFd8/d1701c58a9393ee0675b1f1acf545abb/A14-BLUE_Blueberry___Hemp-Product-Shot.webp?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/rgU5zcg6CevoAzr28hP3e/c092802ae0094d9b228438517a9a4a89/A23-SESA_Black_Sesame___Banana-Product-Shot.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/2fwQEAEc1ODjMojpe5yrAz/d8698e5bb261cbb2219fd94c72c07a69/A15-CHAI_Chai___Coconut-Product-Shot.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/oKHtj5lPLCbHd8vDn2fO7/bbcda0ad0804fa4064bebc7b04a4bcbd/a16-pink-deconstructed-pdp-web.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/2oeCZ8qWdUPGwp5SWvj9C5/27c38ce9816b8afcdb81a5d1df13653f/a12-avoc-deconstructed-pdp-web.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/1YXqDHW0yYiid3J5mAfA1S/ecabe2edab57dc3ba37fe2cfeddfb77e/A05-COLDB_Cold_Brew___Almond-Product-Shot.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/3MKUyxc6WD5U8eaBg6iSN/0e4037b593c8e8cae1423b0b38b20841/a10-mango-deconstructed-pdp-web.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/Ut0EzPhLoR2iNKoViwGy2/cbbfd286852facd2cc2d3819d9f96e57/a19-cook-vanilla-bean-cacao-deconstructed-pdp-web.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/72dh5z0qrKLjXr7S4cWYmm/04ec5f0198a8839e2ae6d4ecbbc7b910/a07-matcha-pineapple-matcha-pdp-web.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/5I18e1un4wmhVbIllcrQHB/e10e8e1171e161fd32a6d1135e1db0d7/A22-PBNJ_Cherry___Almond-Product-Shot.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/1NxG9JdCS3JVvvbRBOE1bF/ee7bb9d31e444960611837bae968edc6/A25_Razz_Tart_Cherry-Product-Shot.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/3ktss87HncTdCRmPXvTVbQ/3782adf265d47924b34df39b5fddaef7/a02-carro-carrot-cinnamon-pdp-web.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/4iQCcokdgtb3LpvFwe4Zpj/39efc05f0bb214342e481af35447f79a/A27-TROPIC_Passion_Fruit___Greens.png?fm=avif&q=40&w=982',
  'https://images.ctfassets.net/iw4cawak30d4/1sHkjny0QMp4B39RqXq5by/b1ad05b8fa612daecdceb121d74b1a5a/A33-DATE-and-Almond-Deconstructed-pdp-web.png?fm=avif&q=40&w=982',
]

const About = () => {
  return (
    <>
      <Container>
        <FirstSection>
          <Title> WHAT WE DRINK AND IT'S INGREDIENTS MATTER</Title>
          <FadeContainer>
            <GridContainer>
              {Array.from({ length: 4 }).map((_, columnIndex) => (
                <Column key={columnIndex}>
                  {columnIndex === 2 || columnIndex === 3
                    ? images
                        .slice()
                        .reverse()
                        .map((imageUrl, index) => (
                          <div key={index}>
                            <Image src={imageUrl} alt={`Image ${index + 1}`} />
                          </div>
                        ))
                    : images.map((imageUrl, index) => (
                        <div key={index}>
                          <Image src={imageUrl} alt={`Image ${index + 1}`} />
                        </div>
                      ))}
                </Column>
              ))}
            </GridContainer>
          </FadeContainer>
        </FirstSection>
        <Section>
          <h2> THE CRUCIAL OF FRESH JUICE AND ITS INGREDIENTS</h2>
          <HeaderImage>
            <ImagesContainer>
              <div>
                <StyledImage
                  src="https://images.ctfassets.net/iw4cawak30d4/4kBv8Os24VVsEL8xf9H1wP/1f6364d3a389bdcdf3cb4099c0f1055b/a04-straw-deconstructed-pdp-web.png?w=600"
                  alt=""
                />
              </div>
              <div>
                <StyledImage
                  src="https://images.ctfassets.net/iw4cawak30d4/oKHtj5lPLCbHd8vDn2fO7/bbcda0ad0804fa4064bebc7b04a4bcbd/a16-pink-deconstructed-pdp-web.png?w=600"
                  alt=""
                />
              </div>
              <div>
                <StyledImage
                  src="https://images.ctfassets.net/iw4cawak30d4/3ktss87HncTdCRmPXvTVbQ/3782adf265d47924b34df39b5fddaef7/a02-carro-carrot-cinnamon-pdp-web.png?w=600"
                  alt=""
                />
              </div>
            </ImagesContainer>
          </HeaderImage>
        </Section>

        <SecondSection>
          <div className="subtitleContainer">
            <h3>
              Our miracles buttle juices are delicious, improve digestion, and
              are made from sustainably sourced.
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 82.6 79.59"
              version="1.1"
              aria-hidden="true"
              class="living-good__spark position-absolute"
            >
              <g>
                <path d="M27.38,45.11c4.36-3.67,8.66-7.43,13.12-11a57.65,57.65,0,0,1,8.12-5.59,41.45,41.45,0,0,1,7.91-3.08,7.51,7.51,0,0,1,3.38.33c.26,0,.63.76.55,1.08-.45,2-1,3.89-2.61,5.28-2.78,2.4-5.59,4.76-8.35,7.18A174.89,174.89,0,0,0,29.94,58.73c-2.24,2.68-5.08,3.81-8.17,4.71-.42.12-1.09-.26-1.5-.59a1.79,1.79,0,0,1-.54-1.19c-.15-2.06-.58-4.19-.21-6.16a9.91,9.91,0,0,1,2.54-4.2c1.78-2,3.79-3.86,5.7-5.78Z"></path>
                <path d="M15.05,3.41c1.43-1.56,2.49-3,4.44-3.34C21-.17,21.56.2,21.18,1.71c-.8,3.27-1.71,6.51-2.65,9.74-1.25,4.3-2.47,8.62-3.9,12.86A124.56,124.56,0,0,1,9.89,36.76a33.58,33.58,0,0,1-4.6,6.51c-1.29,1.61-2.65,1.11-4-.48-1.68-2-1.58-4.29-.67-6.67C3.17,29.55,5.48,22.9,8.16,16.4,9.73,12.59,11.82,9,13.72,5.31A15.69,15.69,0,0,1,15.05,3.41Z"></path>
                <path d="M82.6,64.15a8.15,8.15,0,0,1-1.09.87,67.83,67.83,0,0,1-13.36,6.27c-4.91,1.54-9.75,3.28-14.64,4.88q-5,1.65-10.06,3.13a9.72,9.72,0,0,1-2.64.29A1.9,1.9,0,0,1,39,78a12.9,12.9,0,0,1-.39-3.81c.1-1.4,1.74-2.55,3.42-2.93,2.59-.57,5.16-1.28,7.74-1.91q3-.72,5.94-1.4c3.28-.75,6.54-1.6,9.86-2.18C70,65,74.36,63.9,78.89,64c1.19,0,2.39-.09,3.59-.15Z"></path>
              </g>
            </svg>
          </div>
          <div className="aboutFirstProduct">
            <div className="imageBackground">
              <ProductImg
                className="product1"
                src="https://images.ctfassets.net/iw4cawak30d4/3MKUyxc6WD5U8eaBg6iSN/0e4037b593c8e8cae1423b0b38b20841/a10-mango-deconstructed-pdp-web.png"
                alt=""
              />
            </div>
            <div className="textDescription">
              <p>
                Bottle Juice is unwaveringly devoted to simplifying your journey
                toward a healthier lifestyle through our diverse range of
                natural juices. With a deep commitment to sustainability, we go
                the extra mile in meticulously sourcing a variety of organic
                fruits and vegetables. This not only ensures that every sip
                contributes to your well-being but also reflects our dedication
                to fostering a healthier planet through thoughtful choices in
                the selection of our ingredients.
              </p>
            </div>
          </div>
        </SecondSection>

        <OutroSection>
          <div className="subtitleContainer">
            <h3>The seed to a sustainable future begins with bottle juice</h3>
          </div>

          <Link to="/products">
            <button>
              Get started
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </Link>
        </OutroSection>
      </Container>
    </>
  )
}

export default About
