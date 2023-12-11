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
// const testimonialsData = [
//   {
//     img: personTestimonial,
//     name: 'Cristina Torres',
//     workplace: 'Celador',
//     description:
//       'For me Bottle Juice offers an easy way to get my vitamins & nutrients, or my “5-a-day”, in hectic everyday life. ',
//   },
//   {
//     img: personTestimonial1,
//     name: 'Ana Rodríguez',
//     workplace: 'Conductor',
//     description:
//       ' I know that I can trust the quality of Bottle Juice, because everything is produced freshly and without any additives ',
//   },
//   {
//     img: personTestimonial2,
//     name: 'Juana Gómez',
//     workplace: 'Bombero',
//     description:
//       ' Juices and smoothies can be found in almost every shop by now, but only with Bottle Juice I know that what’s written on the package is actually true.',
//   },
//   {
//     img: personTestimonial3,
//     name: 'Laura López',
//     workplace: 'Dealer',
//     description:
//    ' My personal favorite is the Classic green drink, it provides me with valuable nutrients and tastes super delicious '  ,
//   },
//   {
//     img: personTestimonial4,
//     name: 'Santiago Pérez',
//     workplace: 'Enfermero',
//     description:
//       ' Bottle Juice is lifestyle, health-conscious nutrition, pure deliciousness for in between: For me it is decisive whether a juice is 100% natural – only then I drink it. ',
//   },
//   {
//     img: personTestimonial5,
//     name: 'Camila Ramírez',
//     workplace: 'Ingeniero',
//     description:
//       'What distinguishes Bottle Juice, apart from the high-quality production of the products, is their intensity of taste: paradise Juice for example – have you tried it? My absolute favorite.',
//   },
//   {
//     img: personTestimonial6,
//     name: 'Daniel Herrera',
//     workplace: 'Profesor',
//     description:
//       ' After having subscribed this product since 6 weeks now, I see radical change in my life, health and access to full of nutrients, pure vegetable juice.',
//   },
//   {
//     img: personTestimonial7,
//     name: 'Valentina Castro',
//     workplace: 'Médico',
//     description:
//       ' I am inherently a health conscious person and always thought of a product which should bring 100% natural and purity keeping the nutrients integral and finally this is found in Daily Juice.',
//   },
//   {
//     img: personTestimonial8,
//     name: 'Maira Mendoza',
//     workplace: 'Abogado',
//     description:
//       " It's commendable efforts by Daily Juice team to come up with such vegetable juice which has brought lot of benefits and value personally to my life.",
//   },
//   {
//     img: personTestimonial9,
//     name: 'Nicolas Sánchez',
//     workplace: 'Psicólogo',
//     description:
//       ' This product has a possibilities to bring radical changes in society in terms of improving health and potentially disease free life. Thanks again.',
//   },
//   {
//     img: personTestimonial10,
//     name: 'Isabella Ramírez',
//     workplace: 'Policía',
//     description:
//       ' Bottle Juice is a saviour where health is concerned. I have personally seen positive results in my blood report after consuming the juice for two months.',
//   },
// ]

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
  padding-bottom: 15vh;
  .titleContainer {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sliderContainer {
    height: 80%;
  }
  @media screen and (max-width: 769px) {
    padding-bottom: 5vh;
    .sliderContainer {
      /* margin-top: 10vh; */
    }
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
  @media screen and (max-width: 769px) {
    min-width: 400px;
    height: 180px;
  }
  @media screen and (max-width: 532px) {
    min-width: 300px;
    height: 200px;
  }
  @media screen and (max-width: 426px) {
    min-width: 95vw;
    height: 200px;
  }
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
  @media screen and (max-width: 769px) {
    p {
      height: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
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
  @media screen and (max-width: 769px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 532px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 376px) {
    word-wrap: break-word;
  }
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
          <Title>What our costumers say</Title>
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
