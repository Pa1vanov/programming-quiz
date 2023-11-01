import { ActionIcon, Container, Flex, rem, Title } from '@mantine/core'
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'

import classes from './FooterSocial.module.css'

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title color="white">QUIZZ</Title>
        <Flex gap={10} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="transparent">
            <IconBrandTwitter color="white" style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <IconBrandYoutube color="white" style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="transparent">
            <IconBrandInstagram color="white" style={{ width: rem(28), height: rem(108) }} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer
