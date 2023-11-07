import { Button, Card, Container, Flex, Image, Text } from '@mantine/core'

import { Footer } from 'components'

import Navbar from '../navbar/navbar'

import csharp from '../../../assets/img/csharp-svgrepo-com.png'
import dotNet from '../../../assets/img/dotnet-svgrepo-com.png'
import Flutter from '../../../assets/img/flutter-svgrepo-com.png'
import Go from '../../../assets/img/go-svgrepo-com.png'
import Js from '../../../assets/img/js-svgrepo-com.png'
import Python from '../../../assets/img/python-svgrepo-com.png'

import './about.css'

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Container
        fluid
        sx={{
          minHeight: '76vh'
        }}
      >
        <Flex p="50px 10px" h="100%" justify="center" gap="40px" wrap="wrap" rowGap="40px">
          <Card
            className="Card"
            sx={{ width: '320px', display: 'grid', placeItems: 'center' }}
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=kqtD5dpn9C8"
            target="_blank"
          >
            <Card.Section sx={{ width: '250px', margin: 'auto' }}>
              <Image src={Python} w={50} alt="No way!" />
            </Card.Section>

            <Text align="center" fw={500} size="lg" mt="md">
              Python
            </Text>

            <Text align="center" mt="xs" c="dimmed" size="sm">
              Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum
              and first released.
            </Text>
            <br />
            <Button color="grape">Click to see tutorial</Button>
          </Card>
          <Card
            className="Card"
            sx={{ width: '320px', display: 'grid', placeItems: 'center' }}
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=W6NZfCO5SIk"
            target="_blank"
          >
            <Card.Section sx={{ width: '250px', margin: 'auto' }}>
              <Image src={Js} w={50} alt="No way!" />
            </Card.Section>

            <Text align="center" fw={500} size="lg" mt="md">
              Java-Script
            </Text>

            <Text align="center" mt="xs" c="dimmed" size="sm">
              "JS" typically refers to JavaScript, which is a high-level, interpreted programming language primarily used for front-end web
              development.
            </Text>
            <br />
            <Button color="grape">Click to see tutorial</Button>
          </Card>
          <Card
            className="Card"
            sx={{ width: '320px', display: 'grid', placeItems: 'center' }}
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=gfkTfcpWqAY"
            target="_blank"
          >
            <Card.Section sx={{ width: '250px', margin: 'auto' }}>
              <Image src={csharp} w={50} alt="No way!" />
            </Card.Section>

            <Text align="center" fw={500} size="lg" mt="md">
              C-Sharp
            </Text>

            <Text align="center" mt="xs" c="dimmed" size="sm">
              "C#" (pronounced "C-sharp") is a high-level, statically typed programming language developed by Microsoft. It is part of the Microsoft.
            </Text>
            <br />
            <Button color="grape">Click to see tutorial</Button>
          </Card>
          <Card
            className="Card"
            sx={{ width: '320px', display: 'grid', placeItems: 'center' }}
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=VPvVD8t02U8"
            target="_blank"
          >
            <Card.Section sx={{ width: '250px', margin: 'auto' }}>
              <Image src={Flutter} w={50} alt="No way!" />
            </Card.Section>

            <Text align="center" fw={500} size="lg" mt="md">
              Flutter
            </Text>

            <Text align="center" mt="xs" c="dimmed" size="sm">
              Flutter is an open-source UI (User Interface) software development framework created by Google. It is used to build natively compiled
              applications for mobile.
            </Text>
            <br />
            <Button color="grape">Click to see tutorial</Button>
          </Card>
          <Card
            className="Card"
            sx={{ width: '320px', display: 'grid', placeItems: 'center' }}
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=BfEjDD8mWYg"
            target="_blank"
          >
            <Card.Section sx={{ width: '250px', margin: 'auto' }}>
              <Image src={dotNet} w={50} alt="No way!" />
            </Card.Section>

            <Text align="center" fw={500} size="lg" mt="md">
              .NET
            </Text>

            <Text align="center" mt="xs" c="dimmed" size="sm">
              .NET is a free, open-source, and cross-platform development framework developed by Microsoft. It encompasses a vast ecosystem of tools,
              libraries.
            </Text>
            <br />
            <Button color="grape">Click to see tutorial</Button>
          </Card>
          <Card
            className="Card"
            sx={{ width: '320px', display: 'grid', placeItems: 'center' }}
            shadow="sm"
            padding="xl"
            component="a"
            href="https://www.youtube.com/watch?v=un6ZyFkqFKo"
            target="_blank"
          >
            <Card.Section sx={{ width: '250px', margin: 'auto' }}>
              <Image src={Go} w={50} alt="No way!" />
            </Card.Section>

            <Text align="center" fw={500} size="lg" mt="md">
              Go-Lang
            </Text>

            <Text align="center" mt="xs" c="dimmed" size="sm">
              Go is known for its exceptional support for concurrent programming. Concurrency is an inherent part of the language with the use of
              goroutines and channels.
            </Text>
            <br />
            <Button color="grape">Click to see tutorial</Button>
          </Card>
        </Flex>
      </Container>
      <Footer />
    </>
  )
}
