import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Flex, Text, Title } from '@mantine/core'
import { Api, Types } from 'modules/home'

import quizzImg from 'assets/img/Online test-amico.png'

import './quiz.css'

const QuizCategoryPage: React.FC = () => {
  const navigate = useNavigate()
  const [state, setState] = useState<Types.IApi.Question.Response>()
  const { categoryId = 0 } = useParams()
  const [count, setCount] = useState<number>(0)
  const id = +categoryId
  const [fullData, setFullData] = useState<Array<any>>([])
  const [isEnd, setIsEnd] = useState(false)

  function handleSubmit(id: number) {
    const res = {
      category: categoryId,
      answers: [
        {
          question_id: state?.questions[count].id,
          answer_id: id
        }
      ]
    }

    if (state && count < state.questions.length - 1) {
      setFullData([...fullData, res])
      setCount((count: number) => count + 1)
    } else {
      setIsEnd(true)
      setCount(0)
    }
  }

  function handleEnd() {
    console.log(fullData)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const { data } = await Api.Question(id)

        setState(data)
      } catch (err: any) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <Box>
      <Flex className="main" align="center" justify="center" wrap="wrap" gap="60px">
        <img style={{ width: '500px', height: '500px' }} src={quizzImg} alt="img" />
        <Flex h="100vh" align="center" justify="center">
          <br />
          <Box
            sx={{
              border: '1px solid white',
              display: 'grid',
              borderRadius: '20px',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
            w="350px"
            key={state?.questions[0].id}
            p="lg"
            bg="white"
          >
            <Box p="sm" sx={{ display: 'grid', placeItems: 'center' }}>
              <Title>Question </Title>
              <Text mt="20px" size="xl" fs="italic">
                {state?.questions[count].question}
              </Text>
            </Box>
            <hr />
            <br />
            <div>
              {state?.questions[count].answer.map((item, index) => (
                <Box key={index} sx={{ display: 'grid' }}>
                  <Button
                    variant="transparent"
                    p="20px"
                    bg="white"
                    w="310px"
                    h="60px"
                    mt="md"
                    fullWidth
                    disabled={isEnd}
                    sx={{
                      userSelect: 'none',
                      cursor: 'pointer',
                      color: ' #22042e',
                      borderRadius: '10px',
                      boxShadow: '#E0E0E0 0px 6px 9px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }}
                    onClick={() => handleSubmit(item.id)}
                  >
                    {`${index + 1}. ${item.answer}`}
                  </Button>
                </Box>
              ))}
              <br />
              <hr />
              <Flex align="center" justify="space-between">
                <Button w="140px" sx={{ borderRadius: '30px' }} color="green" variant="filled">
                  Finish Test
                </Button>
                <Button w="140px" sx={{ borderRadius: '30px' }} onClick={() => handleEnd()} disabled={!isEnd} color="green" variant="filled">
                  End
                </Button>
              </Flex>
            </div>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default QuizCategoryPage
