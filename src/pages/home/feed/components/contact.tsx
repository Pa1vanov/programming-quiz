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
  { title: 'Email', description: 'abdulboriy0207@gmaii.com', icon: IconAt },
  { title: 'Phone', description: '+998 (95) 019 85 88', icon: IconPhone },
  { title: 'Address', description: 'PDP Academy, 3-uy, Toshkent', icon: IconMapPin }
]

export function ContactIconsList() {
  const items = MOCKDATA.map(item => <ContactIcon key={item.title} {...item} />)

  return <Stack>{items}</Stack>
}
