import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Menu, Title } from '@mantine/core'
import { IconLogout, IconUserCircle } from '@tabler/icons-react'
import { useAuth } from 'modules/auth/context'

import './nav.css'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate()
  const { user, methods } = useAuth()

  return (
    <Box className="imgBg">
      <Flex p="50px 50px" h="120px" align="center" justify="space-between" bg="#A76AE4">
        <Flex
          onClick={() => navigate('/category')}
          align="center"
          p="md"
          bg="#fff"
          gap="5px"
          sx={{ border: '1px solid #fff', borderRadius: '100px', cursor: 'pointer' }}
        >
          <Button color="grape" radius="xl">
            QUIZ
          </Button>
          <Title size="md">APP</Title>
        </Flex>
        <Flex gap={40}>
          <Link className="navLinks" to="/category">
            Home
          </Link>
          <Link className="navLinks" to="/aboutUs">
            About Us
          </Link>
          <Link className="navLinks" to="/feedBack">
            Feed Back
          </Link>
        </Flex>
        <Flex align="center" justify="center" gap={30}>
          {user ? (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button variant="transparent">
                  <IconUserCircle color="white" width="35px" height="35px" />
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item color="red" onClick={methods.logout}>
                  <Flex align="center" justify="center" gap="20px">
                    <IconLogout />
                    Log Out
                  </Flex>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button className="buttonLogin" bg="white" size="md" sx={{ color: 'black' }} onClick={() => navigate('/auth/login')}>
              Login
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
