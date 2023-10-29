import { Box, Button, Flex, Menu, ThemeIcon, Title } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useAuth } from 'modules/auth/context'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const { methods } = useAuth()

  return (
    <Box>
      <Flex p="20px 90px" h="80px" align="center" justify="space-between">
        <Title color="dark">QUIZ APP</Title>

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
              <Button h="40px" sx={{ cursor: 'pointer' }}>
                {/* {user.fullName.charAt(0).toUpperCase()} */}M
              </Button>
            </ThemeIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={() => methods.logout()} color="red" icon={<IconTrash size={14} />}>
              Log Out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Box>
  )
}

export default Navbar
