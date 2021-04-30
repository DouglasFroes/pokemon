import React from 'react'
import Button from '../Button'
import Icon from '../Icon'
import RenderImg from '../RenderImg'
import * as Styled from './styled'

interface propsCard {
  name: string
  id: number
  type: string
}

export default function CardPokemon(props: propsCard) {
  const { name, id, type } = props

  return (
    <Styled.Container>
      <Styled.Column>
        <div className="rotation">
          <p>{id}</p>
        </div>
        <div className={`type ${type}`}>
          <p>{type}</p>
        </div>
      </Styled.Column>
      <RenderImg
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        name={name}
      />
      <div className="card-button">
        <Button label={name} />
      </div>
      <div className="btn-pok">
        <Icon src="/img/eye.png" />
        <Icon
          src="/img/plus.png"
          style={{ background: '#3AA05B', marginLeft: '1rem' }}
        />
      </div>
    </Styled.Container>
  )
}
