import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/bazarSlice'
import styled from 'styled-components'
import { logoFake } from '../images/'

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 75%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => {
    switch (props.productid) {
      case 1:
        return '#f9b53722'
      case 2:
        return '#d3dc994b'
      case 3:
        return '#e845503b'
      case 4:
        return '#e85c4043'
      default:
        return '#f2f3f552'
    }
  }};

  &:hover {
    .product-image {
    }
  }

  .logoFake {
    transition: all 0.5s ease-in-out;
    position: absolute;
    z-index: 1;
    height: 79%;
  }
`

const CardWrapper = styled.div`
  cursor: pointer;
  width: 330px;
  height: 450px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  &:hover {
    ${ImageContainer} {
      :nth-child(1),
      .logoFake {
        filter: drop-shadow(-10px 5px 7px rgba(0, 0, 0, 0.2));
        transform: rotate(5deg) scale(1.15);
      }
      :nth-child(3) {
        top: -5px;
      }
      :nth-child(4) {
        bottom: -5px;
      }
    }
  }
`

const ProductImage = styled.img`
  height: 90%;
  transition: all 0.5s ease-in-out;
  z-index: 1;
`
const DetailsContainer = styled.div`
  height: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  width: 100%;
  button {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    height: 40px;
  }
`

const TitleContainer = styled.div`
  text-transform: lowercase;
  font-size: 1.1rem;
  &::first-letter {
    text-transform: uppercase;
  }
`

const Title = styled.h2``

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p:first-of-type {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
  }
  P:nth-of-type(2) {
    margin-left: 10px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  button {
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: black;
      color: white;
      .cart {
        transform: translate(3px, -3px);
      }
      .details {
        transform: translate(0, -3px);
      }
    }
    i {
      margin-left: 5px;
    }
  }
`

const BackgroundTextImg = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;

  font-weight: 1000;
  text-transform: uppercase;
  z-index: 0;
  top: -250px;
  transition: all 0.5s ease-in-out;
`

const BackgroundTextImg2 = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: 1000;
  text-transform: uppercase;
  z-index: 0;
  bottom: -250px;
  transition: all 0.5s ease-in-out;
`

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const _id = product.title
  const idString = (_id) => String(_id).toLowerCase().split(' ').join('')
  const rootId = idString(_id)

  const handleDetails = () => {
    navigate(`/flavors/${rootId}`, {
      state: {
        item: product,
      },
    })
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
        description: product.description,
      })
    )
  }

  const getDynamicContent = () => {
    switch (product._id) {
      case 1:
        return 'yellow'
      case 2:
        return 'green'
      case 3:
        return 'berry'
      case 4:
        return 'mixed'
      default:
        return ''
    }
  }

  const FontSize = () => {
    switch (product._id) {
      case 1:
        return '5.2rem'
      case 2:
        return '6.4rem'
      case 3:
        return '6.6rem'
      case 4:
        return '6.3rem'
      default:
        return '5.1rem'
    }
  }

  const LineHeight = () => {
    switch (product._id) {
      case 1:
        return '1.06'
      case 2:
        return '0.855'
      case 3:
        return '0.83'
      case 4:
        return '0.845'
      default:
        return '1.05'
    }
  }

  const dynamicContent = getDynamicContent()
  const fontSize = FontSize()
  const lineHeight = LineHeight()
  console.log(product.image);

  return (
    <>
      <CardWrapper>
        <ImageContainer productid={product._id} onClick={handleDetails}>
          <ProductImage
            className="product-image"
            src={product.image}
            alt="productImg"
          />
          <img src={logoFake} alt="logo" className="logoFake" />
          <BackgroundTextImg style={{ fontSize, lineHeight }}>
            {dynamicContent} <br /> {dynamicContent}
          </BackgroundTextImg>
          <BackgroundTextImg2 style={{ fontSize, lineHeight }}>
            {dynamicContent} <br /> {dynamicContent}
          </BackgroundTextImg2>
        </ImageContainer>

        <DetailsContainer>
          <TitleContainer>
            <Title>{product.title.substring(0, 25)}</Title>
          </TitleContainer>
          <PriceContainer>
            <p className="line-through ">${product.oldPrice}</p>

            <p>${product.price}</p>
          </PriceContainer>
          <Buttons>
            <button onClick={handleDetails}>
              Details
              <div
                className="details"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              >
                <i className="ri-arrow-up-line"></i>
              </div>
            </button>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to cart
              <div
                className="cart"
                style={{ transition: 'transform 0.3s ease-in-out' }}
              >
                <i className="ri-arrow-right-up-line"></i>
              </div>
            </button>
          </Buttons>
        </DetailsContainer>
      </CardWrapper>
    </>
  )
}

export default ProductsCard
