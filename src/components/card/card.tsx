import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core'

import './card.scss'

interface ICard {
  id: string
  title: string
  image: string
  description: string
}
function Card({ id, title, image, description }: ICard) {
  const navigate = useNavigate()

  const handleTryClick = () => {
    navigate(`/quizzes/${id}`)
  }

  return (
    <div key={id} className="nft">
      <div className="main">
        <img className="tokenImage" src={image} alt="logo" />
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <div className="tokenInfo">
          <div className="duration">
            <Button color="blue" onClick={() => handleTryClick()}>
              Try Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
