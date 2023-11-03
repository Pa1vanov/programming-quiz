import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex, Text, Title } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { Api } from 'modules/home'

import quizzImg from 'assets/img/Online test-amico.png'

import './quiz.css'

interface Quiz {
  id: string
  question: string
  answers: string[]
}

// const quizzes: Quiz[] = [
//   {
//     id: '1',
//     question: 'What is Python?',
//     answers: ['Python is a high-level', 'Python is a snake.', 'Python is a type of programming bug.', 'Python is a programming framework.']
//   },
//   {
//     id: '2',
//     question: 'What is JavaScript?',

//     answers: ['JavaScript is a versatile ', 'JavaScript is a type of coffee.', 'JavaScript is a snake.', 'JavaScript is a framework ']
//   },
//   {
//     id: '3',
//     question: 'What is C#?',
//     answers: ['C# is a modern, object-oriented ', 'C# is a musical note.', 'C# is a programming language ', 'C# is a type of coffee.']
//   },
//   {
//     id: '4',
//     question: 'What is .NET?',
//     answers: ['.NET is a software framework  ', '.NET is a type of fishing net.', '.NET is a programming language .', '.NET is a type of coffee.']
//   },
//   {
//     id: '5',
//     question: 'What is Flutter?',
//     answers: ['Flutter is an open-source UI  ', 'Flutter is a type of bird.', 'Flutter is a programming language ', 'Flutter is a type of coffee.']
//   },
//   {
//     id: '6',
//     question: 'What is Go (Golang)?',
//     answers: ['Go, also known as Golang', 'Go is a board game.', 'Go is a type of car.', 'Go is a type of coffee.']
//   }
// ]

const QuizCategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // const categoryQuizzes = quizzes.filter(quiz => quiz.id === categoryId)

  // console.log(questions)

  const handleAnswerClick = (answer: string) => {}

  useEffect(() => {
    const request = async () => {
      try {
        const { data: questions } = await Api.Question({ id })

        console.log(questions)

        // setState({ questions })
      } catch (err: any) {
        notifications.show({ message: err?.message, color: 'red' })
      }
    }

    request()
  }, [id])

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
            // key={questions[0].id}
            p="lg"
            bg="white"
          >
            <Box p="sm" sx={{ display: 'grid', placeItems: 'center' }}>
              <Title>Question </Title>
              <Text mt="20px" size="xl" fs="italic">
                {/* {questions[0].question} */}
              </Text>
            </Box>
            <hr />
            <br />
            {/* <div>
              {questions[0]?.answer.map((answer: any, index: number) => (
                <Box key={index!} sx={{ display: 'grid' }}>
                  <Text
                    p="5px"
                    bg="white"
                    w="310px"
                    h="45px"
                    mt="md"
                    onClick={() => handleAnswerClick(answer)}
                    sx={{
                      cursor: 'pointer',
                      color: ' #22042e',
                      borderRadius: '10px',
                      boxShadow: '#E0E0E0 0px 6px 9px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }}
                  >
                    {`${index + 1}. ${answer}`}
                  </Text>
                </Box>
              ))}
              <br />
              <hr />
              <Flex align="center" justify="space-between">
                <Button w="140px" sx={{ borderRadius: '30px' }} color="green" variant="filled">
                  Finish Test
                </Button>
                <Button w="140px" sx={{ borderRadius: '30px' }}>
                  Next
                </Button>
              </Flex>
            </div> */}
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default QuizCategoryPage
