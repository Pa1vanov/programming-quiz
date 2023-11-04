import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, InputBase, Text } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { Api } from 'modules/auth'
import { IForm } from 'modules/auth/types'
import { IoArrowBackSharp } from 'react-icons/io5'
import { error } from 'utils/alert'
import * as yup from 'yup'

import LoginImg from '../../assets/img/Login-amico.png'

interface ForgotPasswordProps {}

const ForgotPassword = (props: ForgotPasswordProps) => {
  const schema = useMemo(
    () =>
      yup.object({
        email: yup.string().email().min(5).label('Email').required()
      }),
    []
  )

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const form = useForm<IForm.ForgotPassword>({
    initialValues: { email: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async (values: IForm.ForgotPassword) => {
    try {
      setLoading(true)

      await Api.ForgotPassword(values)

      navigate('/auth/reset-password-confirm')
    } catch (err: any) {
      error(`${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <Flex className="main" h="100vh" align="center" justify="center" gap={40}>
        <img style={{ width: '500px' }} src={LoginImg} alt="Img" />
        <Box bg="white" p="xl" sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: '1px solid none', borderRadius: '10px' }}>
          <form onSubmit={form.onSubmit(onSubmit)}>
            <h3 style={{ textAlign: 'center', color: '#3c0452' }}>Forgot Password?</h3>
            <Text color="#22042e" style={{ textAlign: 'center' }}>
              No worries, We'll send you reset instructions.
            </Text>
            <hr />

            <Flex w="350px" p="lg" direction="column" gap={15}>
              <InputBase placeholder="Email" label="Email" {...form.getInputProps('email')} />
              <br />
              <Button
                sx={{ margin: 'auto', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                bg="#A76AE4"
                color="grape"
                w="165px"
                size="md"
                loading={loading}
                type="submit"
              >
                Continue
              </Button>

              <p onClick={() => navigate('/auth/login')} style={{ color: '#7D7D7D', cursor: 'pointer', alignSelf: 'center' }}>
                <IoArrowBackSharp /> Back to <span style={{ color: '#000' }}>Login</span>
              </p>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default ForgotPassword
