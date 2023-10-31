import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Text, Title } from '@mantine/core'

interface Quiz {
  id: string
  image: string
  question: string
  correctAnswer: string
  wrongAnswers: string[]
}

const quizzes: Quiz[] = [
  {
    id: 'python',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/1200px-Python_logo_01.svg.png',
    question: 'What is Python?',
    correctAnswer: 'Python is a high-level, versatile programming language.',
    wrongAnswers: ['Python is a snake.', 'Python is a type of programming bug.', 'Python is a programming framework.']
  },
  {
    id: 'javascript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    question: 'What is JavaScript?',
    correctAnswer: 'JavaScript is a versatile and dynamic language.',
    wrongAnswers: ['JavaScript is a type of coffee.', 'JavaScript is a snake.', 'JavaScript is a framework for building cars.']
  },
  {
    id: 'c',
    image: 'https://crystalpng.com/wp-content/uploads/2023/02/C-Sharp-logo.png',
    question: 'What is C#?',
    correctAnswer: 'C# is a modern, object-oriented programming language developed by Microsoft.',
    wrongAnswers: ['C# is a musical note.', 'C# is a programming language for building robots.', 'C# is a type of coffee.']
  },
  {
    id: '.net',
    image: 'https://i.pinimg.com/564x/f8/db/32/f8db3203ce0d7e90533829056cc09715.jpg',
    question: 'What is .NET?',
    correctAnswer: '.NET is a software framework developed by Microsoft ',
    wrongAnswers: ['.NET is a type of fishing net.', '.NET is a programming language for designing websites.', '.NET is a type of coffee.']
  },
  {
    id: 'flutter',
    image: 'https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png',
    question: 'What is Flutter?',
    correctAnswer: 'Flutter is an open-source UI software development toolkit ',
    wrongAnswers: ['Flutter is a type of bird.', 'Flutter is a programming language for game development.', 'Flutter is a type of coffee.']
  },
  {
    id: 'go',
    image: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
    question: 'What is Go (Golang)?',
    correctAnswer: 'Go, also known as Golang, is an open-source programming language ',
    wrongAnswers: ['Go is a board game.', 'Go is a type of car.', 'Go is a type of coffee.']
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
    <Box className="quiz-category-page">
      <Box h="100vh">
        <br />
        {categoryQuizzes.map((quiz, idx) => (
          <Box
            sx={{
              border: '1px solid white',
              display: 'grid',
              margin: 'auto',
              borderRadius: '20px',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
            }}
            w="350px"
            key={quiz.id}
            p="lg"
            bg="white"
          >
            <img style={{ width: '150px' }} src={quiz.image} alt="img" />
            <Box p="sm" bg="#A76AE4" sx={{ display: 'grid', placeItems: 'center', border: '1px solid #A76AE4', borderRadius: '10px' }}>
              <Title color="white">Question </Title>
              <Text color="white">{quiz.question}</Text>
            </Box>
            <br />
            <div>
              <Text
                align="center"
                p="3px"
                h="55px"
                bg="white"
                onClick={() => handleAnswerClick(quiz.correctAnswer)}
                sx={{
                  cursor: 'pointer',
                  color: ' #22042e',
                  borderRadius: '10px',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                  border: selectedAnswer === quiz.correctAnswer ? '2px solid green' : 'none'
                }}
              >
                {quiz.correctAnswer}
              </Text>
              <br />
              {quiz.wrongAnswers.map((wrongAnswer: any, index) => (
                <Box key={index!} sx={{ display: 'grid' }}>
                  <Text
                    p="5px"
                    bg="white"
                    w="310px"
                    h="45px"
                    onClick={() => handleAnswerClick(wrongAnswer)}
                    sx={{
                      cursor: 'pointer',
                      color: ' #22042e',
                      borderRadius: '10px',
                      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                      border: selectedAnswer === wrongAnswer ? '2px solid red' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {wrongAnswer}
                  </Text>
                </Box>
              ))}
              <br />
              <Button w="160px" sx={{ borderRadius: '30px' }}>
                Next
              </Button>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default QuizCategoryPage
