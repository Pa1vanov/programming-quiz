import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, InputBase, PasswordInput, Text } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { Api } from 'modules/auth'
import { useAuth } from 'modules/auth/context'
import { IForm } from 'modules/auth/types'
import { IoArrowBackSharp } from 'react-icons/io5'
import { setSession } from 'services'
import * as yup from 'yup'

import { success } from '../../utils/alert'

import LoginImg from '../../assets/img/Login-amico.png'

import './login.css'

interface LoginProps {}

const Login = (props: LoginProps) => {
  const { methods } = useAuth()
  const schema = useMemo(
    () =>
      yup.object({
        username: yup.string().min(5).label('Username').required(),
        password: yup.string().min(5).label('Password').required()
      }),
    []
  )
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const form = useForm<IForm.Login>({
    initialValues: { username: '', password: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async (values: IForm.Login) => {
    try {
      setLoading(true)
      const { data } = await Api.Login(values)

      navigate('/category')

      success('Login successful')

      const tokens = {
        refresh: data.refresh,
        access: data.access
      }

      setSession(tokens)

      methods.login(data.user)
    } catch (err: any) {
      console.log('ERR', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <Flex className="main" align="center" justify="center" gap="xl" wrap="wrap">
        <img style={{ width: '500px' }} src={LoginImg} alt="Img" />
        <Flex h="100vh" align="center" justify="center">
          <form onSubmit={form.onSubmit(onSubmit)}>
            <Box bg="white" p="xl" sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: '1px solid none', borderRadius: '10px' }}>
              <p onClick={() => navigate('/')} style={{ color: '#7D7D7D', cursor: 'pointer', alignSelf: 'center' }}>
                <IoArrowBackSharp /> Back to <span style={{ color: '#000' }}>Home</span>
              </p>
              <Box w="320px" p="sm" sx={{ borderRadius: '10px' }}>
                <h4 style={{ textAlign: 'center', color: '#3c0452' }}>Login to Your Account</h4>
                <Text color="#22042e" style={{ textAlign: 'center' }}>
                  Welcome back! Login to access the Quiz.
                </Text>
              </Box>

              <hr />
              <Flex w="320px" p="lg" justify="center" direction="column" gap={15}>
                <InputBase placeholder="Username" label="Username" {...form.getInputProps('username')} />
                <PasswordInput placeholder="Password" label="Password" {...form.getInputProps('password')} /> <br />
                <Button
                  sx={{ margin: 'auto', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                  bg="#A76AE4"
                  color="grape"
                  w="150px"
                  size="md"
                  loading={loading}
                  type="submit"
                >
                  Login
                </Button>
                <p onClick={() => navigate('/auth/register')} style={{ color: '#7D7D7D', cursor: 'pointer', alignSelf: 'center' }}>
                  Don't have an Account? <span style={{ color: '#000' }}>Register</span>
                </p>
                <p onClick={() => navigate('/auth/forgot-password')} style={{ color: '#4D4D4D', cursor: 'pointer', alignSelf: 'center' }}>
                  Forgot Password?
                </p>
              </Flex>
            </Box>
          </form>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Login
