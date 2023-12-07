import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import styled from 'styled-components'
import Footer from './components/Footer'
import Flavors from './pages/Flavors'
import Cart from './pages/Cart'

import PromoMessage from './components/PromoMessage'

export default function App() {
  return (
    <BrowserRouter>
      {/* <PromoMessage /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/flavors/1" element={<Flavors />} />
        <Route path="/flavors/:id" element={<Flavors />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
