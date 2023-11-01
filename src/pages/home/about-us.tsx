import { Box, Flex, Text } from '@mantine/core'

import { Footer } from 'components'

import Navbar from './navbar/navbar'

import csharp from '../../assets/img/csharp-svgrepo-com.png'
import dotNet from '../../assets/img/dotnet-svgrepo-com.png'
import Flutter from '../../assets/img/flutter-svgrepo-com.png'
import Go from '../../assets/img/go-svgrepo-com.png'
import Js from '../../assets/img/js-svgrepo-com.png'
import Python from '../../assets/img/python-svgrepo-com.png'

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Box p="50px 100px">
        <Flex align="center" gap={10}>
          <Flex w="40%" align="center" justify="center">
            <img style={{ width: '50%' }} src={Python} alt="img" />
          </Flex>
          <Text size={25} w="60%" color="black">
            Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and
            first released in 1991. Python is widely used in various fields, including web development, data science, artificial intelligence,
            scientific computing, and more.
          </Text>
        </Flex>{' '}
        <br />
        <Flex align="center" gap={10}>
          <Text size={25} w="60%" color="black">
            "JS" typically refers to JavaScript, which is a high-level, interpreted programming language primarily used for front-end web development.
            JavaScript is a key technology for building interactive and dynamic websites.
          </Text>
          <Flex w="40%" align="center" justify="center">
            <img style={{ width: '50%' }} src={Js} alt="img" />
          </Flex>
        </Flex>{' '}
        <br />
        <Flex align="center" gap={10}>
          <Flex w="40%" align="center" justify="center">
            <img style={{ width: '50%' }} src={csharp} alt="img" />
          </Flex>
          <Text size={25} w="60%" color="black">
            "C#" (pronounced "C-sharp") is a high-level, statically typed programming language developed by Microsoft. It is part of the Microsoft
            .NET platform and is commonly used for building a wide range of software applications, including Windows desktop applications, web
            applications, mobile apps, and game development
          </Text>
        </Flex>{' '}
        <br />
        <Flex align="center" gap={10}>
          <Text size={25} w="60%" color="black">
            Flutter is an open-source UI (User Interface) software development framework created by Google. It is used to build natively compiled
            applications for mobile, web, and desktop from a single codebase. Flutter is known for its fast development and expressive, flexible user
            interface, making it a popular choice among developers
          </Text>
          <Flex w="40%" align="center" justify="center">
            <img style={{ width: '50%' }} src={Flutter} alt="img" />
          </Flex>
        </Flex>{' '}
        <br />
        <Flex align="center" gap={10}>
          <Flex w="40%" align="center" justify="center">
            <img style={{ width: '50%' }} src={dotNet} alt="img" />
          </Flex>
          <Text size={25} w="60%" color="black">
            .NET is a free, open-source, and cross-platform development framework developed by Microsoft. It encompasses a vast ecosystem of tools,
            libraries, and languages for building various types of applications, including web applications, desktop applications, mobile apps,
            cloud-based services, and more
          </Text>
        </Flex>{' '}
        <br />
        <Flex align="center" gap={10}>
          <Text size={25} w="60%" color="black">
            Go is known for its exceptional support for concurrent programming. Concurrency is an inherent part of the language with the use of
            goroutines and channels. Goroutines are lightweight threads of execution, and channels facilitate communication and synchronization
            between these goroutines. This makes it easier to write concurrent and parallel code. Go's concurrency model is designed to be efficient
            and approachable.
          </Text>
          <Flex w="40%" align="center" justify="center">
            <img style={{ width: '50%' }} src={Go} alt="img" />
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  )
}
