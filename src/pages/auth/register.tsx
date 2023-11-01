import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, InputBase, PasswordInput, Text } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { Api } from 'modules/auth'
import { IForm } from 'modules/auth/types'
import { IoArrowBackSharp } from 'react-icons/io5'
import * as yup from 'yup'

import { success } from '../../utils/alert'

import LoginImg from '../../assets/img/Login-amico.png'

interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const navigate = useNavigate()
  const schema = useMemo(
    () =>
      yup.object({
        full_name: yup.string().min(5).label('fullName').required(),
        email: yup.string().email().min(5).label('Email').required(),
        username: yup.string().min(4).label('Username').required(),
        password: yup.string().min(5).label('Password').required()
      }),
    []
  )
  const [loading, setLoading] = useState(false)

  const form = useForm<IForm.Register>({
    initialValues: { full_name: '', username: '', email: '', password: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async (values: IForm.Register) => {
    try {
      setLoading(true)
      const { data } = await Api.Register(values)

      console.log(values)
      success('Register successful')
      navigate('/auth/activate-code')
    } catch (err: any) {
      console.log('ERR', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <Flex className="main" h="100vh" align="center" justify="center" wrap="wrap" gap="xl">
        <img style={{ width: '500px' }} src={LoginImg} alt="Img" />
        <Flex
          align="center"
          justify="center"
          sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: '1px solid none', borderRadius: '10px' }}
        >
          <form onSubmit={form.onSubmit(onSubmit)}>
            <Box bg="white" p="md" sx={{ borderRadius: '15px' }}>
              <Box w="320px" p="sm">
                <p onClick={() => navigate('/')} style={{ color: '#7D7D7D', cursor: 'pointer', alignSelf: 'center' }}>
                  <IoArrowBackSharp /> Back to <span style={{ color: '#000' }}>Home</span>
                </p>
                <h4 style={{ textAlign: 'center', color: '#3c0452' }}>Create an Account</h4>
                <Text color="#22042e" style={{ textAlign: 'center' }}>
                  Welcome! Register to access the Quiz.
                </Text>
              </Box>
              <hr />
              <Flex w="320px" p="md" justify="center" direction="column" gap={15}>
                <InputBase placeholder="FullName" label="Full Name" {...form.getInputProps('full_name')} />
                <InputBase placeholder="Email" label="Email" {...form.getInputProps('email')} />
                <InputBase placeholder="Username" label="UserName" {...form.getInputProps('username')} />
                <PasswordInput placeholder="Password" label="Password" {...form.getInputProps('password')} />
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
          </form>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Register
