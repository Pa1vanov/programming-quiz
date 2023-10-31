import { useNavigate } from 'react-router-dom'
import { Flex } from '@mantine/core'

import { Card, Footer } from 'components'

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
    image:
      'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/dotnetCore.component.complex-narrative-xl.ts=1690481702068.png/content/adobe-cms/us/en/products/instana/supported-technologies/dotnet-core-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage',
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
      <Flex justify="center" direction="row" wrap="wrap" gap={50} p="40px">
        {categories.map(category => (
          <Card
            key={category.id}
            id={category.id}
            title={category.name}
            image={category.image}
            description={category.description}
            operation={() => handleCategoryClick}
          />
        ))}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default QuizAppCategoryPage
