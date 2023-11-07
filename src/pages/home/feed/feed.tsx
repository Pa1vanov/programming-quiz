import { useMemo, useState } from 'react'
import { Button, Container, Flex, Group, Image, InputBase, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { Api } from 'modules/home'
import { IForm } from 'modules/home/types'
import { IMaskInput } from 'react-imask'
import { success } from 'utils/alert'
import * as yup from 'yup'

import { Footer } from 'components'

// import bg from 'assets/img/bg.svg'
import img1 from 'assets/img/Mention-amico.png'

import Navbar from '../navbar/navbar'

import { ContactIconsList } from './components/contact'

import classes from './feed.module.scss'

export default function GetInTouch() {
  const schema = useMemo(
    () =>
      yup.object({
        name: yup.string().min(2).label('Name').required(),
        email: yup.string().email().min(5).label('Email').required(),
        phone: yup.string().min(5).label('PhoneNumber').required(),
        message: yup.string().min(5).label('Message').required()
      }),
    []
  )
  const [loading, setLoading] = useState(false)

  const form = useForm<IForm.Feed>({
    initialValues: { name: '', email: '', phone: '', message: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async (values: IForm.Feed) => {
    try {
      setLoading(true)
      const { data } = await Api.Feed(values)

      console.log(values)
      success('Message sent successfully')
    } catch (err: any) {
      console.log('ERR', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <Container
        fluid
        sx={{
          display: 'flex',
          minHeight: '76vh',
          alignItems: 'center'
        }}
      >
        <Paper shadow="lg" radius="lg">
          <Flex justify="center" align="center">
            <div className={classes.wrapper}>
              <div
                className={classes.contacts}
                //  style={{ backgroundImage: `url(${bg})` }}
              >
                <Image className={classes.title} src={img1} />

                <ContactIconsList />
              </div>

              <form className={classes.form} onSubmit={form.onSubmit(onSubmit)}>
                <Text fz="lg" fw={700} className={classes.title}>
                  Get in touch
                </Text>

                <div className={classes.fields}>
                  <SimpleGrid cols={2}>
                    <TextInput label="Your name" placeholder="Your name" {...form.getInputProps('name')} />
                    <TextInput label="Your email" placeholder="example@gmail.com" required {...form.getInputProps('email')} />
                  </SimpleGrid>

                  <InputBase
                    mt="md"
                    label="Phone"
                    component={IMaskInput}
                    mask="+998 (00) 000 00 00"
                    placeholder="Phone"
                    required
                    {...form.getInputProps('phone')}
                  />

                  <Textarea
                    mt="md"
                    label="Your message"
                    placeholder="Please include all relevant information"
                    minRows={3}
                    {...form.getInputProps('message')}
                  />

                  <Group align="flex-end" mt="md">
                    <Button type="submit" color="grape" loading={loading} className={classes.control}>
                      Send message
                    </Button>
                  </Group>
                </div>
              </form>
            </div>
          </Flex>
        </Paper>
      </Container>
      <Footer />
    </>
  )
}
