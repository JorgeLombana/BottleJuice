import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/bazarSlice'
import styled from 'styled-components'

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

const ColumnImages = styled.div``

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

const NewPrice = styled.span`
  font-size: 1.3rem;
`

const Reviews = styled.div`
  display: flex;
  align-items: center;
  .ri-star-fill {
    font-size: 1.7rem;
    margin-right: 5px;
  }
`

const CustomerReviews = styled.span``

const Description = styled.p`
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
  margin-top: 5%;
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

const Product = () => {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({})
  const [baseQty, setBaseQty] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const location = useLocation()

  useEffect(() => {
    setDetails(location.state.item)
  }, [location])

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: details._id,
        title: details.title,
        image: details.images[selectedImageIndex] || details.image,
        price: details.price,
        quantity: baseQty,
        description: details.description,
      })
    )
  }

  const changeImage = (index) => {
    setSelectedImageIndex(index)
  }

  return (
    <Container>
      <ProductContainer>
        <ImagesContainer>
          <ColumnImages>
            <ColumnImgContainer>
              {details.images &&
                details.images.map((image, index) => (
                  <ImgColumn
                    key={index}
                    onClick={() => changeImage(index)}
                    src={image}
                    alt={`product image ${index + 1}`}
                  />
                ))}
            </ColumnImgContainer>
          </ColumnImages>
          <PrincipalImageContainer>
            {details.images && details.images.length > 0 && (
              <MainImageRendering
                src={details.images[selectedImageIndex] || details.image}
                alt="Selected product flavor"
              />
            )}
          </PrincipalImageContainer>
        </ImagesContainer>

        <ProductDescription>
          <Title>{details.title}</Title>
          <PricesContainer></PricesContainer>
          <Reviews>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <CustomerReviews>(1 customer review)</CustomerReviews>
          </Reviews>
          <NewPrice>${details.price}</NewPrice>
          <Description>{details.description}</Description>

          <AddToCartContainer>
            <CounterContainer>
              <span>Quantity</span>
              <div>
                <button
                  onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                >
                  -
                </button>
                {baseQty}
                <button onClick={() => setBaseQty(baseQty + 1)}>+</button>
              </div>
            </CounterContainer>

            <AddToCartButton onClick={handleAddToCart}>
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
  )
}

export default Product
