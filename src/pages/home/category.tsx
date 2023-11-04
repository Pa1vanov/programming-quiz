import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, LoadingOverlay } from '@mantine/core'
import { Api } from 'modules/home'

import { Card, Footer } from 'components'

import Navbar from './navbar/navbar'

interface Category {}

const QuizAppCategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<any>([])
  const [loading, setLoading] = useState(true)

  const categoryImageUrls: any = {
    Go: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    Python: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/1200px-Python_logo_01.svg.png',
    Java: 'https://static.vecteezy.com/system/resources/previews/020/109/178/original/java-editorial-logo-free-download-free-vector.jpg',
    JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    C: 'https://crystalpng.com/wp-content/uploads/2023/02/C-Sharp-logo.png',
    Flutter: 'https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png',
    Net: 'https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/dotnetCore.component.complex-narrative-xl.ts=1690481702068.png/content/adobe-cms/us/en/products/instana/supported-technologies/dotnet-core-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage'
  }

  const navigate = useNavigate()

  useEffect(() => {
    async function request() {
      try {
        const { data } = await Api.GetCategory({})

        setCategories(data)
        setLoading(false)
        console.log('RES', data)
      } catch (err: any) {
        console.log('ERR', err)
      }
    }
    request()
  }, [])

  return (
    <Flex className="quiz-app-category-page" direction="column" gap={20}>
      <Navbar />
      <Flex justify="center" direction="row" wrap="wrap" gap={50} p="40px">
        <LoadingOverlay pos="relative" h="500px" visible={loading} overlayBlur={2} loaderProps={{ color: 'pink', type: 'bars' }} />

        {categories.map((category: any) => (
          <Card
            key={category.id}
            id={category.id}
            image={categoryImageUrls[category.title]}
            title={category.title}
            description={category.description}
          />
        ))}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default QuizAppCategoryPage
