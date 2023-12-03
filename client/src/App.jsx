import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import styled from 'styled-components'
import Footer from './components/Footer'
import Flavors from './pages/Flavors'
import Cart from './pages/Cart'
import Product from './components/Product'

const Container = styled.div``

const PromoMessage = styled.div`
  height: 30px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  overflow: hidden;

  p {
    animation: slider 25s linear infinite;
    white-space: nowrap;
  }
  @keyframes slider {
    0% {
      transform: translateX(130%);
    }
    100% {
      transform: translateX(-130%);
    }
  }
`

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <PromoMessage>
          <p>
            promo code Georgio - $20.000 off 9 items, $25% off 14 items, or hola
            mundo xd
          </p>
        </PromoMessage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}
