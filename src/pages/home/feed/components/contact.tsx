import { Box, rem, Stack, Text } from '@mantine/core'
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react'

import classes from './contact.module.css'

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun
  title: React.ReactNode
  description: React.ReactNode
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+998 (12) 345 35 35', icon: IconPhone },
  { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin }
]

export function ContactIconsList() {
  const items = MOCKDATA.map(item => <ContactIcon key={item.title} {...item} />)

  return <Stack>{items}</Stack>
}
