import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core'
import { useAuth } from 'modules/auth/context'

import './card.scss'

interface ICard {
  id: number
  title: string
  image: string
  description: string
}

function Card({ id, image, title, description }: ICard) {
  const navigate = useNavigate()

  const { user } = useAuth()

  const handleTryClick = () => {
    if (user) {
      navigate(`/quizzes/${id}`)
    } else {
      navigate(`/auth/login`)
    }
  }

  return (
    <div key={id} className="nft">
      <div className="main">
        <img className="tokenImage" src={image} alt={title} />
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <div className="tokenInfo">
          <div className="duration">
            <Button color="grape" onClick={() => handleTryClick()}>
              Try Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
