import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Flex, Text, Title } from '@mantine/core'

import quizzImg from 'assets/img/Online test-amico.png'

import './quiz.css'

interface Quiz {
  id: string
  image: string
  question: string
  answers: string[]
}

const quizzes: Quiz[] = [
  {
    id: 'python',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/1200px-Python_logo_01.svg.png',
    question: 'What is Python?',

    answers: ['Python is a high-level', 'Python is a snake.', 'Python is a type of programming bug.', 'Python is a programming framework.']
  },
  {
    id: 'javascript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    question: 'What is JavaScript?',

    answers: ['JavaScript is a versatile ', 'JavaScript is a type of coffee.', 'JavaScript is a snake.', 'JavaScript is a framework ']
  },
  {
    id: 'c',
    image: 'https://crystalpng.com/wp-content/uploads/2023/02/C-Sharp-logo.png',
    question: 'What is C#?',
    answers: ['C# is a modern, object-oriented ', 'C# is a musical note.', 'C# is a programming language ', 'C# is a type of coffee.']
  },
  {
    id: '.net',
    image: 'https://i.pinimg.com/564x/f8/db/32/f8db3203ce0d7e90533829056cc09715.jpg',
    question: 'What is .NET?',
    answers: ['.NET is a software framework  ', '.NET is a type of fishing net.', '.NET is a programming language .', '.NET is a type of coffee.']
  },
  {
    id: 'flutter',
    image: 'https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png',
    question: 'What is Flutter?',
    answers: ['Flutter is an open-source UI  ', 'Flutter is a type of bird.', 'Flutter is a programming language ', 'Flutter is a type of coffee.']
  },
  {
    id: 'go',
    image: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    question: 'What is Go (Golang)?',
    answers: ['Go, also known as Golang', 'Go is a board game.', 'Go is a type of car.', 'Go is a type of coffee.']
  }
]

const QuizCategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>()
  const categoryQuizzes = quizzes.filter(quiz => quiz.id === categoryId)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer)
  }

  return (
    <Box>
      <Flex className="main" align="center" justify="center" wrap="wrap" gap="60px">
        <img style={{ width: '500px', height: '500px' }} src={quizzImg} alt="img" />
        <Flex h="100vh" align="center" justify="center">
          <br />
          {categoryQuizzes.map((quiz, idx) => (
            <Box
              sx={{
                border: '1px solid white',
                display: 'grid',
                borderRadius: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
              }}
              w="350px"
              key={quiz.id}
              p="lg"
              bg="white"
            >
              <Box p="sm" sx={{ display: 'grid', placeItems: 'center' }}>
                <Title>Question </Title>
                <Text>{quiz.question}</Text>
              </Box>
              <hr />
              <br />
              <div>
                {quiz.answers.map((answer: any, index) => (
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
                        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {answer}
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
              </div>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default QuizCategoryPage
