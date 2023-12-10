import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

import Footer from './components/Footer'
import Flavors from './pages/Flavors'
import Cart from './pages/Cart'

import About from './pages/About'
import Reviews from './pages/Reviews'
import ContactUs from './pages/ContactUs'
import Products from './pages/Products'
import styled from 'styled-components'

const Container = styled  .div``

const withLayout = (Component, showHeader = true, showFooter = true) => {
  return (props) => (
    <Container>
      {showHeader && <Header />}
      <Component {...props} />
      {showFooter && <Footer />}
    </Container>
  )
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={withLayout(Home, true, false)()} />
          <Route path="/about" element={withLayout(About, true, true)()} />
          <Route path="/reviews" element={withLayout(Reviews, true, true)()} />
          <Route
            path="/products"
            element={withLayout(Products, true, true)()}
          />
          <Route
            path="/contact"
            element={withLayout(ContactUs, true, true)()}
          />
          <Route path="/sign-in" element={withLayout(SignIn, true, true)()} />
          <Route path="/sign-up" element={withLayout(SignUp, true, true)()} />
          <Route path="/cart" element={withLayout(Cart, true, true)()} />
          <Route
            path="/flavors/:id"
            element={withLayout(Flavors, true, true)()}
          />
          <Route element={withLayout(PrivateRoute, true, true)()}>
            <Route
              path="/profile"
              element={withLayout(Profile, false, false)()}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
