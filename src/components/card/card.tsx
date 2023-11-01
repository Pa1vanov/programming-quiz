import React from 'react'
import { Button } from '@mantine/core'

import './card.scss'

interface ICard {
  id: string
  title: string
  image: string
  description: string
  operation: () => void
}
function Card({ id, title, image, description, operation }: ICard) {
  return (
    <div key={id} className="nft">
      <div className="main">
        <img className="tokenImage" src={image} alt="logo" />
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <div className="tokenInfo">
          <div className="duration">
            <Button color="grape" onClick={() => operation}>
              Try Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
