import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, InputBase, PasswordInput, Text } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { Api } from 'modules/auth'
import { IForm } from 'modules/auth/types'
import { IoArrowBackSharp } from 'react-icons/io5'
import * as yup from 'yup'

import { success } from '../../utils/alert'

import LoginImg from '../../assets/img/Login-amico.png'

interface ResetPasswordConfirmProps {}

const ResetPasswordConfirm = (props: ResetPasswordConfirmProps) => {
  const schema = useMemo(
    () =>
      yup.object({
        email: yup.string().email().label('Email').required(),
        activation_code: yup.string().label('Activation Code').required(),
        new_password: yup.string().min(5).label('Password').required(),
        confirm_password: yup.string().min(5).label('ConfirmPassword').required()
      }),
    []
  )

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const form = useForm<IForm.ResetPasswordConfirm>({
    initialValues: { email: '', activation_code: '', new_password: '', confirm_password: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async (values: IForm.ResetPasswordConfirm) => {
    try {
      setLoading(true)

      await Api.ResetPasswordConfirm(values)

      success('Password update successful')

      navigate('/auth/login')
    } catch (err: any) {
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <Flex className="main" h="100vh" align="center" justify="center">
        <img style={{ width: '500px' }} src={LoginImg} alt="Img" />
        <Box bg="white" p="xl" sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: '1px solid none', borderRadius: '10px' }}>
          <form onSubmit={form.onSubmit(onSubmit)}>
            <h3 style={{ textAlign: 'center', color: '#3c0452' }}>Reset Password</h3>
            <Text color="#22042e" style={{ textAlign: 'center' }}>
              Must be at least 8 characters.
            </Text>
            <br />
            <Flex w="350px" p="lg" direction="column" gap={15}>
              <InputBase type="email" placeholder="Email" label="Email" {...form.getInputProps('email')} />
              <InputBase placeholder="Activate Code" label="Activate Code" {...form.getInputProps('activation_code')} />
              <PasswordInput type="password" placeholder="New Password" label="New Password" {...form.getInputProps('new_password')} />
              <PasswordInput type="password" placeholder="Confirm Password" label="Confirm Password" {...form.getInputProps('confirm_password')} />
              <Button
                sx={{ margin: 'auto', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                bg="#A76AE4"
                color="grape"
                w="165px"
                size="md"
                loading={loading}
                type="submit"
              >
                Reset Password
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

export default ResetPasswordConfirm
