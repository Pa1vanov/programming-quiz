import { useNavigate } from 'react-router-dom'
import { Badge, Box, Button, Flex, Text } from '@mantine/core'

import Navbar from './navbar/navbar'

interface Category {
  id: string
  name: string
  image: string
  description: string
}

const categories: Category[] = [
  {
    id: 'python',
    name: 'Python',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/1200px-Python_logo_01.svg.png',
    description: 'Python is a high-level, versatile programming language.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    description: 'Java-script is a versatile and dynamic.'
  },
  {
    id: 'c#',
    name: 'C#',
    image: 'https://crystalpng.com/wp-content/uploads/2023/02/C-Sharp-logo.png',
    description: 'C# is a powerful and statically-typed.'
  },
  {
    id: 'flutter',
    name: 'Flutter',
    image: 'https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png',
    description: 'Flutter is an open-source framework.'
  },
  {
    id: '.net',
    name: '.Net',
    image: 'https://i.pinimg.com/564x/f8/db/32/f8db3203ce0d7e90533829056cc09715.jpg',
    description: '.NET is a framework developed by Microsoft.'
  },
  {
    id: 'go',
    name: 'Go',
    image: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    description: ' Go is a statically-typed an efficient.'
  }
]

const QuizAppCategoryPage: React.FC = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (category: Category) => {
    navigate(`/quizzes/${category.id}`)
  }

  return (
    <Flex className="quiz-app-category-page" direction="column" gap={20}>
      <Navbar />
      {/* <Text size="xl" weight="bold">
        Choose Category
      </Text> */}
      <Flex justify="center" direction="row" wrap="wrap" gap={50}>
        {categories.map(category => (
          <Box
            p="xl"
            w="270px"
            bg="white"
            sx={{
              border: '1px solid white',
              display: 'grid',
              borderRadius: '20px',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
            key={category.id}
          >
            <Badge size="lg" w="120px">
              {category.name}
            </Badge>
            <br />
            <img style={{ width: '150px' }} src={category.image} alt="img" /> <br />
            <Text size="md" color="#22042e">
              {category.description}
            </Text>
            <br />
            <Button bg="grape" color="grape" onClick={() => handleCategoryClick(category)}>
              Try
            </Button>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default QuizAppCategoryPage
