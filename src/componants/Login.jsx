import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, useNavigate } from 'react-router-dom'
import { loginUser } from './reduxwork/UserSlice'

const Login = () => {

  let navigator = useNavigate()
  let dispatcher = useDispatch()

  let doLogin = async (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    let loginData = Object.fromEntries(formData.entries())

    try {
      let result = await axios.post('http://localhost:5000/api/dologin', loginData)
      console.log("DATA", result.data.data);
      dispatcher(loginUser(result.data.data))
      // alert("Login successful")
      navigator('/')

    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <Box sx={{
        mt: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        backgroundColor: '#f4f6f8',
      }}>
        <Box
          onSubmit={doLogin}
          component='form'
          sx={{
            width: 400,
            bgcolor: 'white',
            boxShadow: 4,
            borderRadius: 3,
            px: 4,
            py: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' sx={{
            fontWeight: 'bold',
            color: '#424242',
            mb: 1,
          }}>
            Customer Login </Typography>
          <TextField
            type='email'
            name='email'
            label='Enter your email'
            variant='outlined'
            fullWidth />

          <TextField
            type='password'
            name='password'
            label='Enter password'
            variant='outlined'
            fullWidth />

          <Button
            type='submit'
            variant='contained' color='success' sx={{
              width: '100%',
              bgcolor: 'primary', // blue
              py: 1.2,
              fontWeight: 'bold',
              letterSpacing: 1,
              fontSize: '1rem',
              '&:hover': {
                bgcolor: 'darkgreen',
              },
              boxShadow: 2,
            }}
          >Login</Button>

          <Typography variant='body2' onClick={() => {
            navigator('/register')
          }}
            sx={{
              textAlign: 'center',
              mt: 1,
              color: '#1976d2',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Don't have an an account? Register here</Typography>

        </Box>
      </Box>
    </>
  )
}

export default Login