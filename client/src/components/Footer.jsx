import React from 'react'
import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Container = styled.footer`
  background-color: #f2f3f5;
`
const BodyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  padding: 0 30px;
  gap: 40px;
  i {
    color: rgba(0, 0, 0, 0.7);
  }
`

const Copyright = styled.div`
  background-color: #222222;
  color: #ffff;
  text-align: center;
  padding: 5px 0px;
`
const FooterSections = styled.div`
  padding: 20px;
`
const StartupInfo = styled.div`
  padding: 20px;
`

const FooterTitles = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`

const UnordedList = styled.ul`
  list-style-type: none;
`

const ContactLink = styled.div`
  display: flex;
  gap: 10px;
  i {
    color: black;
  }
`

const StyledLInk = styled(Link)`
  display: flex;
`

const PersonalizedButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: black;
  color: white;
  height: 40px;
  width: 80px;
  margin-left: 10px;
`

const Input = styled.input`
  padding: 10px;
  height: 40px;
  width: 220px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

const Footer = () => {
  return (
    <Container>
      <BodyFooter>
        <StartupInfo>
          <Logo />
          <div>
            <p>Stay in touch!</p>
            <SocialMedia />
          </div>
        </StartupInfo>

        <FooterSections>
          <FooterTitles>Quick Links</FooterTitles>
          <UnordedList>
            <StyledLInk to="/">
              <li>
                Home
                <i class="ri-arrow-right-up-line" />
              </li>
            </StyledLInk>
            <StyledLInk to="/about">
              <li>
                About <i class="ri-arrow-right-up-line" />
              </li>
            </StyledLInk>
            <StyledLInk to="/reviews">
              <li>
                Reviews <i class="ri-arrow-right-up-line" />
              </li>
            </StyledLInk>
          </UnordedList>
        </FooterSections>

        <FooterSections>
          <FooterTitles>Policies</FooterTitles>
          <UnordedList>
            <StyledLInk to="/">
              <li>
                Privacy Policy <i class="ri-arrow-right-up-line"></i>
              </li>
            </StyledLInk>
            <StyledLInk to="/">
              <li>
                Terms and Conditions <i class="ri-arrow-right-up-line"></i>
              </li>
            </StyledLInk>
            <StyledLInk to="/">
              <li>
                Return Policy <i class="ri-arrow-right-up-line"></i>
              </li>
            </StyledLInk>
          </UnordedList>
        </FooterSections>

        <FooterSections>
          <FooterTitles>Contact</FooterTitles>
          <ContactLink>
            <i class="ri-map-pin-2-line"></i>
            <span>Carrera 1 #5-21, Garzón, Huila</span>
          </ContactLink>
          <ContactLink>
            <i class="ri-phone-line"></i>
            <span>3132742352</span>
          </ContactLink>
          <ContactLink>
            <i class="ri-mail-send-line"></i>
            <span>bottlejuice@gmail.com</span>
          </ContactLink>
        </FooterSections>

        <FooterSections>
          <div>
            <FooterTitles>Subscribe to our newsletter!</FooterTitles>
            <form action="#" method="post">
              <Input
                type="email"
                name="email"
                placeholder="Your email here!"
                required
              />
              <PersonalizedButton type="submit">Suscribe</PersonalizedButton>
            </form>
          </div>
        </FooterSections>
      </BodyFooter>
      <Copyright>
        <p>
          Copyright <i class="ri-copyright-line"></i> 2023 Bottle Juice. All
          rights reserved.
        </p>
      </Copyright>
    </Container>
  )
}

export default Footer
