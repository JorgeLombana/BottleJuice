import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const CartContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: auto;
  padding: 70px 100px;
`;

const CartTotals = styled.div`
  width: 33.33%;
  background-color: #fafafa;
  padding: 6px 16px;
`;

const CartTotalsHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const CartTotalsText = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
`;

const CartTotalsSubtotal = styled.span`
  font-family: 'titleFont';
  font-weight: bold;
  font-size: 1.125rem;
`;

const CartTotalsShipping = styled.p`
  display: flex;
  align-items: start;
  gap: 4px;
  font-size: 1rem;
`;

const CartTotalsTotal = styled.p`
  font-family: 'titleFont';
  font-weight: bold;
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const CheckoutButton = styled.button`
  font-size: 1rem;
  background-color: black;
  color: white;
  width: 100%;
  padding: 12px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  justify-content: center;
  height: calc(100vh - 79px);
`;

const EmptyCartText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;

const GoShoppingButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1px;
  
  cursor: pointer;
  transition: color 0.3s;
  height: 50px;
  border: 1px solid rgba(0,0,0,.3);
  padding: 0 20px;

  &:hover {
    color: black;
  }
`;

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmt, setTotalAmt] = useState('');

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      alert('Please sign in to Checkout');
    }
  };

  const payment = async (token) => {
    await axios.post('http://localhost:8000/pay', {
      amount: totalAmt * 100,
      token: token,
    });
  };

  return (
    <>
      {productData.length > 0 ? (
        <CartContainer>
          <CartItem />
          <CartTotals>
            <div>
              <CartTotalsHeader>cart totals</CartTotalsHeader>
              <CartTotalsText>
                Subtotal{' '}
                <CartTotalsSubtotal>${totalAmt}</CartTotalsSubtotal>
              </CartTotalsText>
              <CartTotalsShipping>
                Shipping Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Quos, veritatis.
              </CartTotalsShipping>
            </div>
            <CartTotalsTotal>
              Total <span>${totalAmt}</span>
            </CartTotalsTotal>
            <CheckoutButton onClick={handleCheckout}>
              proceed to checkout
            </CheckoutButton>
            {payNow && (
              <div>
                <StripeCheckout
                  stripeKey="pk_test_51LXpmzBcfNkwYgIPXd3qq3e2m5JY0pvhaNZG7KSCklYpVyTCVGQATRH8tTWxDSYOnRTT5gxOjRVpUZmOWUEHnTxD00uxobBHkc"
                  name="Bazar Online Shopping"
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
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </EmptyCartText>
          <Link to="/">
            <GoShoppingButton>
              <span>Go Shopping</span>
            </GoShoppingButton>
          </Link>
        </EmptyCartContainer>
      )}
    </>
  );
};

export default Cart;
