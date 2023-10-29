import { useNavigate } from 'react-router-dom'
import { Button, Flex, Text, TextInput } from '@mantine/core'

import Navbar from '../navbar'

interface Category {
  id: string
  name: string
}

const categories: Category[] = [
  {
    id: 'python',
    name: 'Python'
  },
  {
    id: 'javascript',
    name: 'JavaScript'
  },
  {
    id: 'c#',
    name: 'C#'
  },
  {
    id: 'flutter',
    name: 'Flutter'
  },
  {
    id: '.net',
    name: '.Net'
  },
  {
    id: 'go',
    name: 'Go'
  }
]

const QuizAppCategoryPage: React.FC = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (category: Category) => {
    navigate(`/quizzes/${category.id}`)
  }

  return (
    <Flex className="quiz-app-category-page" direction="column" gap={20} p={10}>
      <Navbar />
      <Text size="xl" weight="bold">
        Quiz App Categories
      </Text>

      <TextInput placeholder="Search for a category" size="md" variant="filled" />

      <Flex direction="row" wrap="wrap" gap={20}>
        {categories.map(category => (
          <Button key={category.id} onClick={() => handleCategoryClick(category)} size="md">
            {category.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}

export default QuizAppCategoryPage
