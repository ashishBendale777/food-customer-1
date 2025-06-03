import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from './reduxwork/UserSlice'
import { useNavigate } from 'react-router-dom'


//User login logout redux user  slice
const Profile = () => {

  let { userData } = useSelector((state) => state.user)

  let dispatcher = useDispatch()
  let navigate = useNavigate()

  return (
    <>
      <Box>
        <Typography variant='h5' sx={{ mt: 9 }}>Profile</Typography>
        <Typography variant='h5'>Name:{userData.name}</Typography>
        <Typography variant='h5'>Email:{userData.email}</Typography>

        <Button variant="contained" onClick={() => {
          dispatcher(logoutUser())
          navigate("/login")
        }}>Logout</Button>
      </Box >
    </>
  )
}

export default Profile