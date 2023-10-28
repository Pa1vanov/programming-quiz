import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Image, InputBase, PasswordInput, Text } from '@mantine/core'

import quiz from '../../assets/img/quiz 1.png'
// import { useForm, yupResolver } from '@mantine/form'
// import { Api } from 'modules/auth'
// import { useAuth } from 'modules/auth/context'
// import { IForm } from 'modules/auth/types'
// import { setSession } from 'services'
// import * as yup from 'yup'

// import { success } from '../../utils/alert'

interface LoginProps {}

const Login = (props: LoginProps) => {
  // const { methods } = useAuth()
  // const schema = useMemo(
  //   () =>
  //     yup.object({
  //       email: yup.string().email().min(5).label('Email').required(),
  //       password: yup.string().min(5).label('Password').required()
  //     }),
  //   []
  // )
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // const form = useForm<IForm.Login>({
  //   initialValues: { email: '', password: '' },
  //   validate: yupResolver(schema)
  // })

  // const onSubmit = async (values: IForm.Login) => {
  //   try {
  //     setLoading(true)
  //     const { data } = await Api.Login(values)

  //     success('Login successful')

  //     const tokens = {
  //       accessToken: data.accessToken,
  //       refreshToken: data.refreshToken
  //     }

  //     setSession(tokens)

  //     methods.login(data.user)

  //     console.log(tokens)

  //     navigate('/hospitals')
  //   } catch (err: any) {
  //     console.log('ERR', err)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <Box bg="#A76AE4">
      <Box
        m="10px 0 50px 6%"
        w="130px"
        bg="#C7A8FC"
        p="20px"
        sx={{
          borderRadius: '50%',
          position: 'absolute'
        }}
      >
        <Flex
          bg="white"
          p="20px"
          align="center"
          justify="center"
          sx={{
            borderRadius: '50%'
          }}
        >
          <Image width="50px" src={quiz} alt="Image" />
        </Flex>
      </Box>

      <Flex h="100vh" align="center" justify="center">
        {/* <form onSubmit={form.onSubmit(onSubmit)}> */}
        <Box bg="white" p="xl" sx={{ borderRadius: '15px' }}>
          <Box w="320px" p="sm" sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: '1px solid none', borderRadius: '10px' }}>
            <h4 style={{ textAlign: 'center', color: '#3c0452' }}>Login to Your Account</h4>
            <Text color="#22042e" style={{ textAlign: 'center' }}>
              Welcome back! Login to access the Quzz App.
            </Text>
          </Box>
          <br />
          <hr />
          <Flex w="320px" p="lg" justify="center" direction="column" gap={15}>
            <InputBase placeholder="Email" label="Email" />
            <PasswordInput placeholder="Password" label="Password" /> <br />
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
        {/* </form> */}
      </Flex>
    </Box>
  )
}

export default Login
