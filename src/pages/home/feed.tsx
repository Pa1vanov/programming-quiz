import { Button, Flex, Grid, Textarea, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useMediaQuery } from '@mantine/hooks'

import { Footer } from 'components'

import Navbar from './navbar/navbar'

export default function GetInTouch() {
  const largeScreen = useMediaQuery('(min-width: 768px)')
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validate: {
      name: value => value.trim().length < 2,
      email: value => !/^\S+@\S+$/.test(value),
      phone: value => value.trim().length === 0
    }
  })

  return (
    <>
      <Navbar />
      <Flex justify="center" h="75vh" align="center">
        <form onSubmit={form.onSubmit(() => {})}>
          <Title
            color="white"
            order={2}
            size="50px"
            mb="50px"
            style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)', wordSpacing: '0.6rem' }}
            fw={900}
            ta="center"
          >
            Get in touch
          </Title>
          <Grid w="80vw" align="flex-start" justify="center">
            <Grid.Col span={largeScreen ? 6 : 12}>
              <Flex gap="23px" direction="column">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  variant="filled"
                  styles={{
                    label: {
                      color: 'white',
                      fontSize: '20px'
                    },
                    input: {
                      color: 'darkgray',
                      backgroundColor: '#131D49'
                    }
                  }}
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  variant="filled"
                  styles={{
                    label: {
                      color: 'white',
                      fontSize: '20px'
                    },
                    input: {
                      color: 'darkgray',
                      backgroundColor: '#131D49'
                    }
                  }}
                  {...form.getInputProps('email')}
                />
                <TextInput
                  label="Phone"
                  placeholder="Your Phone Number"
                  name="phone"
                  variant="filled"
                  styles={{
                    label: {
                      color: 'white',
                      fontSize: '20px'
                    },
                    input: {
                      color: 'darkgray',
                      backgroundColor: '#131D49'
                    }
                  }}
                  {...form.getInputProps('phone')}
                />
              </Flex>
            </Grid.Col>
            <Grid.Col span={largeScreen ? 6 : 12}>
              <Textarea
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={9}
                name="message"
                variant="filled"
                styles={{
                  label: {
                    color: 'white',
                    fontSize: '20px'
                  },
                  input: {
                    color: 'darkgray',
                    backgroundColor: '#131D49'
                  }
                }}
                {...form.getInputProps('message')}
              />
            </Grid.Col>
          </Grid>
          <Flex w="100%" justify="center" mt="30px">
            <Button type="submit" size={largeScreen ? 'md' : 'sm'} m="10px">
              Send message
            </Button>
          </Flex>
        </form>
      </Flex>
      <Footer />
    </>
  )
}
