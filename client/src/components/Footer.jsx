import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Container = styled.footer`
  background-color: #f2f3f5;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
const BodyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  padding: 0 20px;
  gap: 40px;
  i {
    color: rgba(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 1100px) {
    padding:0 15px ;
    flex-wrap: wrap;
    height: auto;
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    text-align: center;
  }
`

const Copyright = styled.div`
  background-color: #222222;
  color: #ffff;
  text-align: center;
  padding: 5px 0px;
`
const FooterSections = styled.div`
  padding: 15px;

  @media screen and (max-width: 1100px) {
    padding:10px ;
    min-width: 180px;
  }

  @media screen and (max-width: 660px) {
    margin:auto;
  }
`
const StartupInfo = styled.div`
  padding: 15px;
  
  @media screen and (max-width: 500px) {
    padding:10px ;
  }
`

const FooterTitles = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`

const UnordedList = styled.ul`
  list-style-type: none;

  @media screen and (max-width: 515px) {
    display: flex;
    flex-direction: column;
  }
`

const ContactLink = styled.div`
  display: flex;
  gap: 10px;
  i {
    color: black;
  }
  
  @media screen and (max-width: 515px) {
    display: ${(props) => (props.expanded ? 'block' : 'none')};
    float: left;
  }

`

const StyledLInk = styled(Link)`
  @media screen and (max-width: 515px) {
    display: ${(props) => (props.expanded ? 'block' : 'none')};
    float: left;
  }
`;

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
  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`

const Footer = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Container>
      <BodyFooter
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
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
          <StyledLInk to="/" expanded={isExpanded}>
              <li>
                Home
                <i className="ri-arrow-right-up-line" />
              </li>
            </StyledLInk>
            <StyledLInk to="/about" expanded={isExpanded}>
              <li>
                About <i className="ri-arrow-right-up-line" />
              </li>
            </StyledLInk>
            <StyledLInk to="/reviews" expanded={isExpanded}>
              <li>
                Reviews <i className="ri-arrow-right-up-line" />
              </li>
            </StyledLInk>
          </UnordedList>
        </FooterSections>

        <FooterSections>
          <FooterTitles>Policies</FooterTitles>
          <UnordedList>
            <StyledLInk to="/" expanded={isExpanded}>
              <li>
                Privacy Policy <i className="ri-arrow-right-up-line"></i>
              </li>
            </StyledLInk>
            <StyledLInk to="/" expanded={isExpanded}>
              <li>
                Terms and Conditions <i className="ri-arrow-right-up-line"></i>
              </li>
            </StyledLInk>
            <StyledLInk to="/" expanded={isExpanded}>
              <li>
                Return Policy <i className="ri-arrow-right-up-line"></i>
              </li>
            </StyledLInk>
          </UnordedList>
        </FooterSections>

        <FooterSections>
          <FooterTitles>Contact</FooterTitles>
          <ContactLink expanded={isExpanded}>
            <i className="ri-map-pin-2-line"></i>
            <span>Carrera 1 #5-21, Garzón, Huila</span>
          </ContactLink>
          <ContactLink expanded={isExpanded}>
            <i className="ri-phone-line"></i>
            <span>3132742352</span>
          </ContactLink>
          <ContactLink expanded={isExpanded}>
            <i className="ri-mail-send-line"></i>
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
          Copyright <i className="ri-copyright-line"></i> 2023 Bottle Juice. All
          rights reserved.
        </p>
      </Copyright>
    </Container>
  )
}

export default Footer
