import { Button, Flex, Group, Image, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core'

import { Footer } from 'components'

import bg from 'assets/img/bg.svg'
import img1 from 'assets/img/Mention-amico.png'

import Navbar from '../navbar/navbar'

import { ContactIconsList } from './components/contact'

import classes from './feed.module.scss'

export default function GetInTouch() {
  return (
    <>
      <Navbar />
      <Paper shadow="md" radius="lg">
        <Flex justify="center">
          <div className={classes.wrapper}>
            <div className={classes.contacts} style={{ backgroundImage: `url(${bg})` }}>
              <Image className={classes.title} src={img1} />

              <ContactIconsList />
            </div>

            <form className={classes.form} onSubmit={event => event.preventDefault()}>
              <Text fz="lg" fw={700} className={classes.title}>
                Get in touch
              </Text>

              <div className={classes.fields}>
                <SimpleGrid cols={2}>
                  <TextInput label="Your name" placeholder="Your name" />
                  <TextInput label="Your email" placeholder="example@gmail.com" required />
                </SimpleGrid>

                <TextInput mt="md" label="Subject" placeholder="Subject" required />

                <Textarea mt="md" label="Your message" placeholder="Please include all relevant information" minRows={3} />

                <Group align="flex-end" mt="md">
                  <Button type="submit" className={classes.control}>
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Flex>
      </Paper>
      <Footer />
    </>
  )
}
