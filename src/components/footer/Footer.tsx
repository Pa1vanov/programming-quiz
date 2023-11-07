import { ActionIcon, Box, Container, Flex, rem, Title } from '@mantine/core'
import { IconBrandInstagram, IconBrandTelegram, IconBrandYoutube } from '@tabler/icons-react'

import classes from './FooterSocial.module.css'

export function Footer() {
  return (
    <Box>
      <Container fluid h="12vh" w="100vw" bg="#A76AE4" className={classes.inner}>
        <Title color="white">QUIZ</Title>
        <Flex gap={5} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="transparent">
            <a href="https://t.me/pdpuz" target="_blank" rel="noreferrer">
              <IconBrandTelegram color="white" style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <a href="https://www.youtube.com/@pdpuz" target="_blank" rel="noreferrer">
              <IconBrandYoutube color="white" style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <a href="https://www.instagram.com/pdpuz/" target="_blank" rel="noreferrer">
              <IconBrandInstagram color="white" style={{ width: rem(28), height: rem(108) }} stroke={1.5} />
            </a>
          </ActionIcon>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
