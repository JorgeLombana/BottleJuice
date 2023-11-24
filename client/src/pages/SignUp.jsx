import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import styled from 'styled-components'
import { Toaster, toast } from 'sonner'

const Container = styled.div`
  margin-top: 2%;
  height: 100vh;
  text-align: center;
`

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 2.8rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: -1.9px;
  margin-bottom: 2%;
`

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 468px;
`

const Label = styled.label`
  text-align: left;
  margin-bottom: 2%;
`
const Input = styled.input`
  padding-left: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: 50px;
  margin-bottom: 5%;
`

const buttonStyle = {
  'background-color': 'rgba(0,0,0,.9)',
  color: 'white',
  height: '60px',
  'margin-top': '5%',
}

const RegisterDivisor = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  hr {
    background-color: rgba(0, 0, 0, 0.3);
    height: 2px;
    width: 28vw;
  }
`

const ContainerGoogleRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  gap: 60px;
`

const ContinueWithGoogle = styled(OAuth)`
  border: 1px solid rgba(0, 0, 0, 1);
`

const LoginButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 200px;
  height: 50px;
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`
export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data)
      setLoading(false)
      if (data.success === false) {
        setError(true)
        return
      }
      navigate('/sign-in')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  const gronwSingUp = () => {
    {
      error && toast.error('Something went wrong!')
    }
  }
  return (
    <Container>
      <Toaster position="bottom-left" expand={true} />
      <SignUpContainer>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          <button onClick={gronwSingUp} style={buttonStyle} disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <RegisterDivisor>
            <hr />
            Or
            <hr />
          </RegisterDivisor>
        </Form>
        <ContainerGoogleRegister>
          <ContinueWithGoogle />
          <Link to="/sign-in">
            <LoginButton>
              Sign in
              <i class="ri-arrow-right-up-line"></i>
            </LoginButton>
          </Link>
        </ContainerGoogleRegister>
      </SignUpContainer>
    </Container>
  )
}
