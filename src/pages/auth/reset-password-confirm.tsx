import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Flex, InputBase, PasswordInput, Text } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { Api } from 'modules/auth'
import { IForm } from 'modules/auth/types'
import { IoArrowBackSharp } from 'react-icons/io5'
import * as yup from 'yup'

import { success } from '../../utils/alert'

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
      console.log('Update Password', values)

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
      <Flex h="100vh" align="center" justify="center">
        <form onSubmit={form.onSubmit(onSubmit)}>
          <h3 style={{ textAlign: 'center' }}>Reset Password</h3>
          <Text color="#5C5F66" style={{ textAlign: 'center' }}>
            Must be at least 8 characters.
          </Text>
          <br />
          <Flex
            w="350px"
            p="lg"
            sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: '1px solid #878787', borderRadius: '5px' }}
            direction="column"
            gap={15}
          >
            <InputBase type="email" placeholder="Email" label="Email" {...form.getInputProps('email')} />
            <PasswordInput type="password" placeholder="New Password" label="New Password" {...form.getInputProps('newPassword')} />
            <Button color="dark" size="md" loading={loading} type="submit">
              Reset Password
            </Button>

            <p onClick={() => navigate('/auth/login')} style={{ color: '#7D7D7D', cursor: 'pointer', alignSelf: 'center' }}>
              <IoArrowBackSharp /> Back to <span style={{ color: '#000' }}>Login</span>
            </p>
          </Flex>
        </form>
      </Flex>
    </Box>
  )
}

export default ResetPasswordConfirm
