import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Flex, LoadingOverlay } from '@mantine/core'
import { Api } from 'modules/home'

import { Card, Footer } from 'components'

import Navbar from './navbar/navbar'

const QuizAppCategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<any>([])
  const [loading, setLoading] = useState(true)

  const categoryImageUrls: any = {
    Go: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    Python: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/1200px-Python_logo_01.svg.png',
    Java: 'https://static.vecteezy.com/system/resources/previews/020/109/178/original/java-editorial-logo-free-download-free-vector.jpg',
    JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    'C#': 'https://crystalpng.com/wp-content/uploads/2023/02/C-Sharp-logo.png',
    'C++': 'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png',
    C: 'https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png',
    Flutter: 'https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png',
    HTML: 'https://thumbs.dreamstime.com/b/astana-kazakhstan-july-html-icon-logo-vector-symbol-198641993.jpg',
    CSS: 'https://p.kindpng.com/picc/s/493-4938086_css-3-hd-png-download.png',
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
    <>
      <Navbar />
      <Container
        fluid
        sx={{
          minHeight: '76vh'
        }}
      >
        <Flex justify="center" h="100%" direction="row" wrap="wrap" gap={50} p="40px">
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
      </Container>
      <Footer />
    </>
  )
}

export default QuizAppCategoryPage
