import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { toast, Toaster } from 'sonner'

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 50px;
  height: 100vh;
  align-items: center;
  margin-top: -80px;
`

const CartTotals = styled.div`
  background-color: #f2f3f5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 440px;
  padding: 20px;
`
const Hr = styled.hr`
  margin: 10px 0;
`

const CartTotalsHeader = styled.h2`
  font-size: 1.4rem;
`

const CartTotalsText = styled.p`
  display: flex;
  justify-content: space-between;
`

const CartTotalsSubtotal = styled.span``

const CartTotalsShipping = styled.p``

const CartTotalsTotal = styled.p`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`

const CheckoutButton = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;
`

const PaymentMethodsImgs = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  filter: grayscale(100);
`

const PaymentImg = styled.img`
  padding-top: 5px;
  height: 25px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.35s ease-in-out;
  &:hover {
    transform: scale(120%);
  }
`
const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    text-align: center;
    i {
      color: #5c5c5c;
    }
  }
`

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 79px);
`

const EmptyCartText = styled.p`
  margin-top: -50px;
  font-size: 1.7rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1%;
`

const HiOutlineArrowLeftStyled = styled(HiOutlineArrowLeft)`
  transition: all 0.5s ease-in-out;
`

const GoShoppingButton = styled(Link)`
  width: 154px;
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
const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state) => state.bazar.userInfo)
  const [payNow, setPayNow] = useState(false)
  const [totalAmt, setTotalAmt] = useState('')

  useEffect(() => {
    let price = 0
    productData.forEach((item) => {
      price += item.price * item.quantity
    })
    setTotalAmt(price.toFixed(2))
  }, [productData])

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true)
    } else {
      alert('We are working on it.')
    }
  }

  // const payment = async (token) => {
  //   await axios.post('http://localhost:8000/pay', {
  //     amount: totalAmt * 100,
  //     token: token,
  //   })
  // }

  const paymentMethods = [
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_american_express-.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_baloto.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_bancobog-1-200x50.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_bancolombia.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_codensa.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_davivienda.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_DinersClub_PayU.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_efe.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_mastercard.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_mc-debit.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_PSE.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_su_red.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_v-debit.png',
    'https://colombia.payu.com/wp-content/uploads/sites/5/2020/03/CO_Sol_logos_visa.png',
  ]

  return (
    <>
      {productData.length > 0 ? (
        <CartContainer>
          <CartItem />
          <CartTotals>
            <CartTotalsHeader>Order Sumary</CartTotalsHeader>
            <Hr />
            <CartTotalsText>
              Subtotal
              <CartTotalsSubtotal>${totalAmt}</CartTotalsSubtotal>
            </CartTotalsText>
            <Hr />
            <CartTotalsShipping>
              <i
                className="ri-error-warning-line"
                style={{ marginTop: '1.5px', marginRight: '4px' }}
              ></i>
              Costs vary based on destination and package details. Proceed to
              checkout for accurate shipping fees. Thank you for choosing us!
            </CartTotalsShipping>
            <Hr />
            <PaymentMethodsImgs>
              {paymentMethods.map((element) => (
                <PaymentImg src={element} alt="Payment method" />
              ))}
            </PaymentMethodsImgs>
            {/* <PaymentMethods>
                <div>
                  <p>Correspondents</p>
                  <i className="ri-bank-card-fill"></i>
                </div>
                <div>
                  <p>Cash</p>
                  <i className="ri-cash-fill"></i>
                </div>
                <div>
                  <p>Cash on Delivery</p>
                  <i className="ri-truck-line"></i>
                </div>
                <div>
                  <p>Credit card</p>
                  <i className="ri-bank-card-fill"></i>
                </div>
              </PaymentMethods> */}
            <CartTotalsTotal>
              Total <span>${totalAmt}</span>
            </CartTotalsTotal>
            <CheckoutButton onClick={handleCheckout}>checkout</CheckoutButton>
            {payNow && (
              <div>
                <StripeCheckout
                  stripeKey="pk_test_51LXpmzBcfNkwYgIPXd3qq3e2m5JY0pvhaNZG7KSCklYpVyTCVGQATRH8tTWxDSYOnRTT5gxOjRVpUZmOWUEHnTxD00uxobBHkc"
                  name=""
                  amount={totalAmt * 100}
                  label="Pay to bazar"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )}
          </CartTotals>
        </CartContainer>
      ) : (
        <EmptyCartContainer>
          <EmptyCartText>
            Your Cart is Empty.
            <br />
            Please go back to Shopping and add products to Cart.
          </EmptyCartText>
          <Link to="/">
            <GoShoppingButton
              style={{ transition: 'transform 0.5s ease-in-out' }}
              to="/"
            >
              <span style={{ transition: 'transform 0.5s ease-in-out' }}>
                <HiOutlineArrowLeftStyled />
              </span>
              Go shopping
            </GoShoppingButton>
          </Link>
        </EmptyCartContainer>
      )}
    </>
  )
}

export default Cart
