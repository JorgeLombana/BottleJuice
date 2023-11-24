import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import OAuth from '../components/OAuth'
import styled from 'styled-components'
import { toast, Toaster } from 'sonner'

const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LoginContainer = styled.div`
  margin-top: 4%;
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
  margin-bottom: 5%;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 468px;
`

const Label = styled.label`
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

const ContinueWithGoogle = styled(OAuth)`
  border: 1px solid rgba(0, 0, 0, 1);
`

const ContainerGoogleRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  gap: 60px;
`

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
const RegisterButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 200px;
  height: 50px;
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(signInFailure(data))
        return
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error))
    }
  }

  const alert = () => {
    {
      error
        ? toast.error(error.message) || toast.error('Something went wrong!')
        : ''
    }
  }

  return (
    <Container>
      <Toaster position="bottom-left" expand={true} />
      <LoginContainer>
        <Title>log in</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email Adress</Label>
          <Input
            type="email"
            placeholder="Your email here!"
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

          <button onClick={alert} style={buttonStyle} disabled={loading}>
            {loading ? 'Loading...' : 'Log in'}
          </button>
          <RegisterDivisor>
            <hr />
            Or
            <hr />
          </RegisterDivisor>
        </Form>

        <ContainerGoogleRegister>
          <ContinueWithGoogle />
          <Link to="/sign-up">
            <RegisterButton>
              Create an account <i class="ri-arrow-right-up-line"></i>
            </RegisterButton>
          </Link>
        </ContainerGoogleRegister>
      </LoginContainer>
    </Container>
  )
}
