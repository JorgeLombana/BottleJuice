import { useSelector } from 'react-redux'
import { useRef, useState, useEffect } from 'react'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { toast, Toaster } from 'sonner'

const Container = styled.div`
  height: 112vh;
`

const ContainerProfile = styled.div`
  position: relative;
  margin-inline: auto;
  margin-top: 1%;
  p {
    margin-top: 40px;
    text-align: center;
  }
  form {
    .inputsAndLabels {
      padding: 5px;
      margin-top: 20px;
      width: 50%;
      margin-inline: auto;
      label {
        display: block;
        .inputs {
          font-weight: 400;
          display: flex;
          margin-inline: auto;
          margin-bottom: 20px;
          padding-left: 15px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          height: 50px;
          width: 100%;
        }
      }
      label:first-of-type {
        margin-top: 40px;
      }
      .updateDelete {
        display: flex;
        justify-content: space-between;
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.3);
          height: 50px;
          width: 40%;
        }
        div {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.3);
          height: 50px;
          width: 40%;
        }
      }
    }
  }
  .signOut {
    font-size: 1.1rem;
    position: absolute;
    top: 214px;
    right: 30px;
    cursor: pointer;
    font-weight: 400;
  }

  @media screen and (max-width: 700px) {
    .updateDelete{
      flex-direction: column;
      gap: 10px;
     align-items: center;
    }

    .updateDelete > *{
      text-align: center;
      padding: 3px;
    }
  }

  @media screen and (max-width: 490px) {
    form > *{
      font-size:0.9rem;
    }

    .signOut{
      top: 150px;
    }
  }
`

const ComeBackContainer = styled.button`
  position: fixed;
  background-color: white;
  top: 100px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 5px 20px 5px 15px;
  &:hover {
    transition: 1s all;
  }
`

const ContainerCoverPhoto = styled.div`
  width: 100%;
  height: 200px;
  background: url('https://images.unsplash.com/photo-1608153917357-33666ba96cd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

  /* background: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position-y: 315px; */
  background-position: center;
  background-size: cover;
`

const StyledImg = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
`

const CamerIconOverlay = styled.i`
  position: absolute;
  top: 33%;
  left: 38%;
  z-index: 10;

  font-size: 40px;
  color: #bbc2bd;
  display: none;
  &:hover {
    ${StyledImg} {
      filter: grayscale(110%);
      cursor: pointer;
    }
  }

`
const ImgContainer = styled.div`
  margin-top: -100px;
  margin-left: 80px;
  position: relative;
  max-width: 18%;
  &:hover {
    ${StyledImg} {
      display: flex;
      cursor: pointer;
      filter: grayscale(100%);
    }
    ${CamerIconOverlay} {
      cursor: pointer;
      display: flex;
    }
  }
  .imgMsg {
    margin-top: 6px;
    margin-left: -60px;
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 60px;
  }
`

const TopProfile = styled.div`
  margin-top: -80px;
  height: 80px;
  position: relative;
  /* border: 1px solid rgba(0, 0, 0, 1); */
  span {
    cursor: pointer;
    font-size: 1.3rem;
    position: absolute;
    right: 40px;
    top: 20px;
  }
`

const Title = styled.h2`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 30%;
  top: 15px;
  font-size: 1.4rem;
  
  @media screen and (max-width: 750px) {
    left: 36%;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    left: 40%;
    font-size: 1rem;
    top: 28px;
  }

  @media screen and (max-width: 400px) {
    left: 45%;
    top: 33px;
  }
`

export default function Profile() {
  const dispatch = useDispatch()
  const fileRef = useRef(null)
  const [image, setImage] = useState(undefined)
  const [imagePercent, setImagePercent] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)

  const { currentUser, loading, error } = useSelector((state) => state.user)
  useEffect(() => {
    if (image) {
      handleFileUpload(image)
    }
  }, [image])
  const handleFileUpload = async (image) => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + image.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setImagePercent(Math.round(progress))
      },
      (error) => {
        setImageError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        )
      }
    )
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUserStart())
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(updateUserFailure(data))
        return
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
    } catch (error) {
      dispatch(updateUserFailure(error))
    }
  }

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart())
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(deleteUserFailure(data))
        return
      }
      dispatch(deleteUserSuccess(data))
    } catch (error) {
      dispatch(deleteUserFailure(error))
    }
  }

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout')
      dispatch(signOut())
    } catch (error) {
      console.log(error)
    }
  }

  const [showImageMessage, setShowImageMessage] = useState(true)

  useEffect(() => {
    if (showImageMessage) {
      const timeoutId = setTimeout(() => {
        setShowImageMessage(false)
      }, 4000)

      return () => clearTimeout(timeoutId)
    }
  }, [showImageMessage])

  return (
    <>
      {/* <ComeBackContainer>
        <i className="ri-arrow-left-line"></i>
        <p>Come back</p>
      </ComeBackContainer> */}
      <Container>
        <Toaster position="bottom-left" expand={true} />
        <ContainerProfile>
          <Link to={'/'}></Link>

          <form onSubmit={handleSubmit}>
            <ContainerCoverPhoto></ContainerCoverPhoto>

            <ImgContainer>
              <CamerIconOverlay
                onClick={() => fileRef.current.click()}
                className="ri-camera-fill "
              />
              <StyledImg
                src={formData.profilePicture || currentUser.profilePicture}
                alt="profile"
                onClick={() => fileRef.current.click()}
              />
              <input
                type="file"
                ref={fileRef}
                hidden
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />

              <p className="imgMsg">
                {imageError ? (
                  <span style={{ color: 'red' }}>
                    Error uploading image (file size must be less than 2 MB)
                  </span>
                ) : imagePercent > 0 && imagePercent < 100 ? (
                  <span
                    style={{ color: 'orange' }}
                  >{`Uploading: ${imagePercent} %`}</span>
                ) : imagePercent === 100 ? (
                  <span style={{ color: 'green' }}>
                    Image uploaded successfully
                  </span>
                ) : (
                  ''
                )}
              </p>
            </ImgContainer>

            <TopProfile>
              <Title>
                {currentUser.username}
                <i className="ri-verified-badge-fill"></i>
              </Title>
            </TopProfile>
            <div className="inputsAndLabels">
              <label htmlFor="username">
                Username
                <input
                  className="inputs"
                  defaultValue={currentUser.username}
                  type="text"
                  id="username"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="email">
                email
                <input
                  className="inputs"
                  defaultValue={currentUser.email}
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="password">
                password
                <input
                  className="inputs"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </label>
              <div className="updateDelete">
                <button>{loading ? 'Loading...' : 'Update'}</button>
                <div>
                  <span onClick={handleDeleteAccount}>Delete Account</span>
                </div>
              </div>
            </div>
          </form>
          <span className="signOut" onClick={handleSignOut}>
          Sign Out<i className="ri-logout-box-r-line"></i>
          </span>
          <p style={{ color: 'red' }}>{error && 'Something went wrong!'}</p>
          <p style={{ color: 'green' }}>
            {updateSuccess && 'User is updated successfully!'}
          </p>
        </ContainerProfile>
      </Container>
    </>
  )
}
