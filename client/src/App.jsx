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
import Rotation from './pages/Rotation'
import PromoMessage from './components/PromoMessage'

export default function App() {
  return (
    <BrowserRouter>
      <PromoMessage/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rotation" element={<Rotation />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/product/:id" element={<Product />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
