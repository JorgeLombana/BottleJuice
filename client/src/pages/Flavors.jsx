import React, { useState } from 'react'
import styled from 'styled-components'
import { mango, pera, rojo, zanahoria } from '../images'

const Container = styled.div`
  height: 90vh;
`

const ProductContainer = styled.div`
  padding: 7% 0;
  width: 70vw;
  margin-inline: auto;
  display: flex;
`

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const ColumnImages = styled.div`
  /* border: 1px solid red; */
`

const ColumnImgContainer = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #f7fafa;
  height: 115px;

  border-radius: 10px;
`

const ImgColumn = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const PrincipalImageContainer = styled.div`
  cursor: pointer;

  margin-left: 15px;
  height: 500px;
`
const MainImageRendering = styled.img`
  width: 100%;
  height: 100%;
  background-color: #f7fafa;
  border-radius: 15px;
  transition: opacity 0.3s ease-in-out;
`

const ProductDescription = styled.div`
  flex: 1;
`

const Title = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
`

const PricesContainer = styled.div``

const OldPrice = styled.span``

const NewPrice = styled.span``

const Reviews = styled.div`
  display: flex;
  align-items: center;
  .ri-star-fill {
    font-size: 1.7rem;
    margin-right: 5px;
  }
  span {
  }
`

const CustomerReviews = styled.span``

const Description = styled.p`
  margin-top: 35px;
  color: rgba(0, 0, 0, 0.8);
`

const AddToCartContainer = styled.div`
  height: 50px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`
const AddToCartButton = styled.button`
  background-color: black;
  color: white;
  width: 250px;
  height: 100%;
  span {
    margin-right: 5px;
  }
`
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 250px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: 100%;
  div {
    width: 100px;

    display: flex;
    justify-content: center;
    gap: 10px;
    display: flex;
    align-items: center;
    button {
      font-size: 1.8rem;
      font-weight: 100;
    }
  }
`

const ExtraInformationContainer = styled.div`
  padding: 0 10%;
  width: 90%;
  margin-top: 7%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
  }
  i {
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.4);
    margin-inline: auto;
  }
  div {
    text-align: center;
  }
`

const Flavors = () => {
  const [selectedImage, setSelectedImage] = useState(mango)
  const [quantity, setQuantity] = useState(0)

  const changeImage = (newImage) => {
    setSelectedImage(newImage)
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  return (
    <>
      <Container>
        <ProductContainer>
          <ImagesContainer>
            <ColumnImages>
              <ColumnImgContainer>
                <ImgColumn
                  onClick={() => {
                    changeImage(mango)
                  }}
                  src={mango}
                  alt="product mango flavor"
                />
              </ColumnImgContainer>
              <ColumnImgContainer>
                <ImgColumn
                  onClick={() => {
                    changeImage(pera)
                  }}
                  src={pera}
                  alt="product pera flavor"
                />
              </ColumnImgContainer>
              <ColumnImgContainer>
                <ImgColumn
                  onClick={() => {
                    changeImage(zanahoria)
                  }}
                  src={zanahoria}
                  alt="product zanahoria flavor"
                />
              </ColumnImgContainer>
              <ColumnImgContainer>
                <ImgColumn
                  onClick={() => {
                    changeImage(rojo)
                  }}
                  src={rojo}
                  alt="product rojo flavor"
                />
              </ColumnImgContainer>
            </ColumnImages>

            <PrincipalImageContainer>
              <MainImageRendering
                src={selectedImage}
                alt="Selected product flavor"
              />
            </PrincipalImageContainer>
          </ImagesContainer>

          <ProductDescription>
            <Title>Bottle Juice mango 300ml improved blood circulation</Title>

            <PricesContainer>
              <OldPrice></OldPrice>
              <NewPrice></NewPrice>
            </PricesContainer>

            <Reviews>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <CustomerReviews>(2 customer reviews)</CustomerReviews>
            </Reviews>

            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              minima ullam consectetur necessitatibus repellat, voluptatibus,
              modi eaque culpa quia neque similique quidem perferendis iste
              saepe consequuntur eveniet, aliquam totam sapiente?
            </Description>

            <AddToCartContainer>
              <CounterContainer>
                <span>Quantity</span>
                <div>
                  <button onClick={decrementQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={incrementQuantity}>+</button>
                </div>
              </CounterContainer>

              <AddToCartButton>
                <span>Add to cart</span>
                <i className="ri-arrow-right-up-line"></i>
              </AddToCartButton>
            </AddToCartContainer>

            <ExtraInformationContainer>
              <div>
                <i className="ri-truck-line"></i>
                <p>Free shipping</p>
              </div>
              <div>
                <i className="ri-inbox-unarchive-line"></i>
                <p>National Shipping</p>
              </div>
              <div>
                <i className="ri-file-list-3-line"></i>
                <p>ready to order</p>
              </div>
              {/* <div>
                <i className="ri-money-dollar-circle-line"></i>
                <p>Payment methods</p>
              </div> */}
            </ExtraInformationContainer>
          </ProductDescription>
        </ProductContainer>
      </Container>
    </>
  )
}

export default Flavors
