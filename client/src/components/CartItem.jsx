import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from '../redux/bazarSlice'
import { Toaster } from 'sonner'
import styled from 'styled-components'

const CartWrapper = styled.div`
  width: 66.66%;
  height: 70vh;
  padding: 20px;
`
const Hr = styled.hr`
  margin: 10px 0;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`

const CartProductContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`
const ProductImage = styled.img`
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  padding-left: 20px;
  height: 80px;
  object-fit: contain;
`

const RightPart = styled.div`
  flex: 1;
  width: ${(props) => (props.header ? '500px' : '')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(${(props) => (props.header ? '-20px' : '')});
`

const CartItemRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
`

const CloseIcon = styled.i`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.75);

  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  &:hover {
    transform: rotate(180deg);
  }
`

const ProductTitle = styled.h2`
  display: flex;
  align-items: center;
  text-transform: lowercase;
  font-size: 1.1rem;
  margin: 10px;
`

const Price = styled.p`
  width: 10%;
`

const QuantityContainer = styled.div`
  background-color: #f2f3f5;
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  p {
    width: 33.33%;
    text-align: center;
  }
  button {
    height: 100%;
    flex: 1;
    font-weight: 300;
    cursor: pointer;
    padding-inline: 10px;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`

const TotalPrice = styled.p``

const BodyCartContainer = styled.div``

const HeaderLeft = styled.div`
  display: flex;

  width: 400px;
  justify-content: center;
`
const HeaderRight = styled.div`
  display: flex;
  width: 60%;

  justify-content: space-between;
  padding-left: 6%;
  padding-right: 1%;
`

const FooterCartContainer = styled.div`
  margin-top: 35px;
  justify-content: center;
  gap: 15px;
  display: flex;
`
const ResetCartButton = styled.button`
  display: flex;
  width: 154px;
  align-items: center;
  height: 50px;
  padding-inline: 15px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    i {
      color: white;
      transform: rotate(180deg);
    }
  }
  span {
    color: rgba(0, 0, 0, 0.75);
  }
`
const GoShoppingButton = styled(Link)`
  gap: 7px;
  display: flex;
  align-items: center;
  height: 50px;
  padding-inline: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    &:first-child {
      span {
        &:first-child {
          color: white;
          transform: translateX(-5px);
        }
      }
    }
  }
  span {
    color: rgba(0, 0, 0, 0.75);
  }
`

const HiOutlineArrowLeftStyled = styled(HiOutlineArrowLeft)`
  transition: all 0.5s ease-in-out;
`
const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.bazar.productData)

  return (
    <>
      <Toaster position="top-right" expand={false} />
      <CartWrapper>
        <HeaderContainer>
          <HeaderLeft>
            <h2 style={{ justifyContent: 'center' }}>Product</h2>
          </HeaderLeft>
          <HeaderRight>
            <h2>Price</h2>
            <h2 style={{ translate: '15px' }}>Quantity</h2>
            <h2 style={{ translate: '18px' }}>Total</h2>
            <h2>Del</h2>
          </HeaderRight>
        </HeaderContainer>

        <Hr />

        <BodyCartContainer>
          {productData.map((item) => (
            <>
              <CartItemRow key={item._id}>
                <CartProductContainer>
                  <ProductImage src={item.image} alt="productImg" />
                  <ProductTitle>{item.title}</ProductTitle>
                </CartProductContainer>
                <RightPart>
                  <Price>${item.price}</Price>

                  <QuantityContainer>
                    <button
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                    >
                      +
                    </button>
                  </QuantityContainer>

                  <TotalPrice>${item.quantity * item.price}</TotalPrice>

                  <CloseIcon
                    className="ri-close-fill"
                    onClick={() => dispatch(deleteItem(item._id))}
                  ></CloseIcon>
                </RightPart>
              </CartItemRow>
              <Hr />
            </>
          ))}
        </BodyCartContainer>

        <FooterCartContainer>
          <GoShoppingButton to="/">
            <span style={{ transition: 'all 0.5s ease-in-out' }}>
              <HiOutlineArrowLeftStyled />
            </span>
            Go shopping
          </GoShoppingButton>
          <ResetCartButton onClick={() => dispatch(resetCart())}>
            <CloseIcon className="ri-close-fill"></CloseIcon>
            Reset Cart
          </ResetCartButton>
        </FooterCartContainer>
      </CartWrapper>
    </>
  )
}

export default CartItem
