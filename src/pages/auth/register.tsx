import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Image, InputBase, PasswordInput, Text } from '@mantine/core'
// import { useForm, yupResolver } from '@mantine/form'
// import { Api } from 'modules/auth'
// import { IForm } from 'modules/auth/types'
import * as yup from 'yup'

import quiz from '../../assets/img/quiz 1.png'

// import { success } from '../../utils/alert'

interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const navigate = useNavigate()
  const schema = useMemo(
    () =>
      yup.object({
        username: yup.string().min(4).label('Username').required(),
        email: yup.string().email().min(5).label('Email').required(),
        password: yup.string().min(5).label('Password').required()
      }),
    []
  )
  const [loading, setLoading] = useState(false)

  // const form = useForm<IForm.Register>({
  //   initialValues: { username: '', email: '', password: ''},
  //   validate: yupResolver(schema)
  // })

  // const onSubmit = async (values: IForm.Register) => {
  //   try {
  //     setLoading(true)
  //     const { data } = await Api.Register(values)
  //     console.log(values)
  //     success('Register successful')
  //     navigate('/auth/login')
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
            <h4 style={{ textAlign: 'center', color: '#3c0452' }}>Create an Account</h4>
            <Text color="#22042e" style={{ textAlign: 'center' }}>
              Welcome! Register to access the Quzz App.
            </Text>
          </Box>
          <br />
          <hr />
          <Flex w="320px" p="lg" justify="center" direction="column" gap={15}>
            <InputBase
              placeholder="Username"
              label="Full Name"
              // {...form.getInputProps('username')}
            />
            <InputBase
              placeholder="Email"
              label="Email"
              //  {...form.getInputProps('email')}
            />

            <PasswordInput
              placeholder="Password"
              label="Password"
              // {...form.getInputProps('password')}
            />
            <Button
              sx={{ margin: 'auto', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
              bg="#A76AE4"
              color="grape"
              w="150px"
              size="md"
              loading={loading}
              type="submit"
            >
              Register
            </Button>
            <p onClick={() => navigate('/auth/login')} style={{ color: '#7D7D7D', cursor: 'pointer', alignSelf: 'center' }}>
              Already have an Account? <span style={{ color: '#000' }}>Login</span>
            </p>
          </Flex>
        </Box>
        {/* </form> */}
      </Flex>
    </Box>
  )
}

export default Register
