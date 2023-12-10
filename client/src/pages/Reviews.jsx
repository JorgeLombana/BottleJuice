import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  personTestimonial,
  personTestimonial1,
  personTestimonial2,
  personTestimonial3,
  personTestimonial4,
  personTestimonial5,
  personTestimonial6,
  personTestimonial7,
  personTestimonial8,
  personTestimonial9,
  personTestimonial10,
  mango,
} from '../images/'

const testimonialsData = [
  {
    img: personTestimonial,
    name: 'Cristina Torres',
    workplace: 'Celador',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial1,
    name: 'Ana Rodríguez',
    workplace: 'Conductor',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial2,
    name: 'Juana Gómez',
    workplace: 'Bombero',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial3,
    name: 'Laura López',
    workplace: 'Dealer',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial4,
    name: 'Santiago Pérez',
    workplace: 'Enfermero',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial5,
    name: 'Camila Ramírez',
    workplace: 'Ingeniero',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial6,
    name: 'Daniel Herrera',
    workplace: 'Profesor',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial7,
    name: 'Valentina Castro',
    workplace: 'Médico',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial8,
    name: 'Maira Mendoza',
    workplace: 'Abogado',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial9,
    name: 'Nicolas Sánchez',
    workplace: 'Psicólogo',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
  {
    img: personTestimonial10,
    name: 'Isabella Ramírez',
    workplace: 'Policía',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, mollitia! Modi assumenda voluptatem totam dolorem?',
  },
]

const moveLeft = keyframes`
    0% {
      transform: translateX(-315%);
        }
    50% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-315%);
    }
`

const moveRight = keyframes`
    0% {
      transform: translateX(0%);
        }
    50% {
    transform: translateX(-315%);
    }
    100% {
      transform: translateX(0%);
    }
`

const Container = styled.div`
  background: linear-gradient(rgba(231, 231, 227, 0.4), rgba(231, 231, 227, 1));
  height: calc(100vh - 49px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  .titleContainer {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sliderContainer {
    height: 70%;
  }
`
const Row = styled.div`
  display: flex;
  gap: 25px;
  margin: 25px 0 0 0;
  &:first-of-type {
    margin: 0;
    animation: ${moveRight} 200s linear infinite;
    transition: 3s ease-in-out;
  }
  &:nth-of-type(2) {
    animation: ${moveLeft} 200s linear infinite;
    transition: 3s ease-in-out;
  }
`

const Testimony = styled.div`
  min-width: 550px;
  height: 200px;
  display: flex;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 1);
`

const PersonImageContainer = styled.div`
  background-image: url('${(props) => props.item}');
  background-size: cover;
  background-position: center;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: end;
  div {
    padding: 0 0 21px 21px;
    background: linear-gradient(rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.9));
    h3 {
      color: white;
    }
    p {
      color: #ffffff98;
    }
  }
`

const PersonTestimony = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 25px 21px 25px;
  background-color: #202020;
  color: #ffffff98;
`

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`

const ProductImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
`

const ProductName = styled.h4`
  color: #f5f5f5;
`
const Title = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  font-family: oswald;
  letter-spacing: -2px;
  /* text-transform: ca; */
`

const shuffleArray = (array) => {
  const shuffledArray = array.slice()
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

const Reviews = () => {
  const shuffledTestimonials = shuffleArray(testimonialsData)
  return (
    <>
      <Container>
        <div className="titleContainer">
          <Title>What our costumer says</Title>
        </div>
        <div className="sliderContainer">
          <Row>
            {testimonialsData.map((item) => (
              <Testimony>
                <PersonImageContainer item={item.img}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.workplace}</p>
                  </div>
                </PersonImageContainer>
                <PersonTestimony>
                  <p>{item.description}</p>
                  <ProductContainer>
                    <div>
                      <ProductName>Bottle Juice </ProductName>
                      <p>250 ml </p>
                    </div>
                  </ProductContainer>
                </PersonTestimony>
              </Testimony>
            ))}
          </Row>
          <Row>
            {shuffledTestimonials.map((item) => (
              <Testimony>
                <PersonImageContainer item={item.img}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.workplace}</p>
                  </div>
                </PersonImageContainer>
                <PersonTestimony>
                  <p>{item.description}</p>
                  <ProductContainer>
                    <div>
                      <ProductName>Bottle Juice </ProductName>
                      <p>250 ml </p>
                    </div>
                  </ProductContainer>
                </PersonTestimony>
              </Testimony>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Reviews
