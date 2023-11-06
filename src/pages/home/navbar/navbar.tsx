import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Drawer, Flex, Menu } from '@mantine/core'
import { IconLogout, IconUserCircle } from '@tabler/icons-react'
import { useAuth } from 'modules/auth/context'

import './nav.css'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate()
  const { user, methods } = useAuth()
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = () => {
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  return (
    <Box className="imgBg">
      <Flex p="50px 50px" h="120px" align="center" justify="space-between" bg="#A76AE4">
        <Flex
          onClick={() => navigate('/category')}
          align="center"
          p="sm"
          bg="#fff"
          gap="5px"
          sx={{ border: '1px solid #fff', borderRadius: '100px', cursor: 'pointer' }}
        >
          <Button color="grape" radius="xl">
            QUIZ
          </Button>
        </Flex>
        <Flex className="sections" gap={40}>
          <Link style={{ color: 'white' }} className="navLinks" to="/category">
            Home
          </Link>
          <Link style={{ color: 'white' }} className="navLinks" to="/aboutUs">
            About Us
          </Link>
          <Link style={{ color: 'white' }} className="navLinks" to="/feedBack">
            Feed Back
          </Link>
        </Flex>
        <Flex className="sections" align="center" justify="center" gap={30}>
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
        <Button className="buttonBurger" bg="white" size="md" sx={{ color: 'black' }} onClick={openDrawer}>
          ☰
        </Button>
        <Drawer position="right" opened={isDrawerOpen} onClose={closeDrawer}>
          <Flex align="center" gap="10px">
            <Link style={{ color: 'black' }} className="navLinks" to="/category">
              Home
            </Link>
            <Link style={{ color: 'black' }} className="navLinks" to="/aboutUs">
              About Us
            </Link>
            <Link style={{ color: 'black' }} className="navLinks" to="/feedBack">
              Feed Back
            </Link>
            {user ? (
              <Button onClick={methods.logout} color="grape">
                Log Out
              </Button>
            ) : (
              <Button color="grape" onClick={() => navigate('/auth/login')}>
                Login
              </Button>
            )}
          </Flex>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Navbar
