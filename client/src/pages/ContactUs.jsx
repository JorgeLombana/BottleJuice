import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: calc(100vh - 49px);
  iframe {
    height: 100%;
    width: 100%;
    filter: grayscale(1) invert(0.85);
  }
`

const ContactUs = () => {
  return (
    <Container>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.7213594309353!2d-75.6288186304342!3d2.197025099861486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e24d94790db68e1%3A0x124f0d5c576e7467!2sPeter%20Pan!5e0!3m2!1ses!2sco!4v1702279884550!5m2!1ses!2sco"></iframe>
    </Container>
  )
}

export default ContactUs
