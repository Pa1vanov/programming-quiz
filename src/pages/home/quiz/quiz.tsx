import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge, Box, Button, Flex, Overlay, Text, Title } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Api, Types } from 'modules/home'
import { http } from 'services'

import quizzImg from 'assets/img/Online test-amico.png'

import './quiz.css'

const QuizCategoryPage: React.FC = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [state, setState] = useState<Types.IApi.Question.Response>()
  const { categoryId = 0 } = useParams()
  const [count, setCount] = useState<number>(0)
  const Cid = +categoryId
  const [fullData, setFullData] = useState<Array<any>>([])
  const [isEnd, setIsEnd] = useState(false)

  function handleSubmit(id: number) {
    const res = {
      question_id: state?.questions[count].id,
      answer_id: id
    }

    if (state && count < state.questions.length - 1) {
      setFullData(prevFullData => [...prevFullData, res])
      setCount((count: number) => count + 1)
    } else {
      setFullData(prevFullData => [...prevFullData, res])
      setIsEnd(true)
      setCount(0)
    }
  }

  const sendDataToBackend = async () => {
    try {
      const ans = {
        category: Cid,
        answers: [...fullData]
      }
      const response = await http.post('/quizes/answer', ans)

      setCorrect(response.data.is_correct)
      console.log(response.data.is_correct)
    } catch (error) {
      console.error('Error sending data to the backend:', error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // @ts-ignore
        const { data } = await Api.Question(Cid)

        setState(data)
      } catch (err: any) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const handleSendDataAndOpen = () => {
    sendDataToBackend()
    setVisible(v => !v)
  }

  return (
    <>
      {visible && (
        <Overlay color="#000" blur={30}>
          <Flex w="100%" h="100vh" direction="column" align="center" justify="center">
            <Box bg="white" p="xl" sx={{ display: 'grid', placeItems: 'center', borderRadius: '10px' }}>
              <Title>You Scored</Title> <br />
              <Badge size="xl" w="100px">
                {correct} / {state && state.questions.length}
              </Badge>{' '}
              <br />
              <Button onClick={() => navigate('/category')} leftIcon={<IconArrowLeft size={14} />} variant="filled" color="grape">
                Back Home
              </Button>
            </Box>
          </Flex>
        </Overlay>
      )}
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
              w="380px"
              key={state?.questions[0].id}
              p="lg"
              bg="white"
            >
              <Box p="sm" sx={{ display: 'grid', placeItems: 'center' }}>
                <Title>Question </Title>
                <Text align="center" mt="20px" size="xl">
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
                      p="15px"
                      bg="white"
                      w="350px"
                      h="60px"
                      mt="md"
                      disabled={isEnd}
                      sx={{
                        userSelect: 'none',
                        cursor: 'pointer',
                        color: ' #22042e',
                        borderRadius: '10px',
                        boxShadow: '#E0E0E0 0px 6px 9px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        overflowWrap: 'break-word',
                        fontSize: '11px',
                        fontWeight: 'bold'
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
                  <Button w="140px" sx={{ borderRadius: '30px' }} onClick={() => handleSendDataAndOpen()} color="grape" variant="filled">
                    Finish Test
                  </Button>
                  <Button
                    w="140px"
                    sx={{ borderRadius: '30px' }}
                    onClick={() => handleSendDataAndOpen()}
                    disabled={!isEnd}
                    color="green"
                    variant="filled"
                  >
                    End
                  </Button>
                </Flex>
              </div>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default QuizCategoryPage
