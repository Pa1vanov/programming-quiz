import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Menu, ThemeIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useAuth } from 'modules/auth/context'

import img1 from 'assets/img/logo.png'

import './nav.css'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate()
  const { methods, user } = useAuth()

  return (
    <Box className="imgBg">
      <Flex p="50px 50px" h="120px" align="center" justify="space-between" bg="#A76AE4">
        <img src={img1} width="50px" height="50px" alt="Logo" />
        <Flex gap={40}>
          <Link style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: 'bold' }} to="/category">
            Home
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: 'bold' }} to="/aboutUs">
            About Us
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: 'bold' }} to="/feedBack">
            Feed Back
          </Link>
        </Flex>
        {user ? (
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                <Button h="40px" sx={{ cursor: 'pointer' }}>
                  {user.full_name.charAt(0).toUpperCase()}
                </Button>
              </ThemeIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={() => methods.logout()} color="red" icon={<IconTrash size={14} />}>
                Log Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Flex align="center" gap={30}>
            <Button onClick={() => navigate('/auth/login')}>Login</Button>
            <Button onClick={() => navigate('/auth/register')}>Register</Button>
          </Flex>
        )}
      </Flex>
    </Box>
  )
}

export default Navbar
