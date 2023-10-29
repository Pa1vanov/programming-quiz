import { Box, Button, Flex, Menu, ThemeIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useAuth } from 'modules/auth/context'

import img1 from 'assets/img/Group 1.png'

import './nav.css'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const { methods } = useAuth()

  return (
    <Box className="imgBg">
      <Flex p="50px 50px" h="120px" align="center" justify="space-between">
        <img src={img1} width="100px" height="100px" alt="Logo" />

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
