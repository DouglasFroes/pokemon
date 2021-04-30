import Link from 'next/link'
import React from 'react'
import Icon from '../Icon'
import * as Styled from './styled'

interface propsTrPokemon {
  name: string
  type: string
  id: number
  removePokemon(): void
}

export default function TrPokemon(props: propsTrPokemon) {
  const { name, type, id, removePokemon } = props

  return (
    <Styled.Container>
      <td className="image">
        <Styled.ImgPok
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <p className="visible">{name}</p>
      </td>
      <td className="none">
        <p>{name}</p>
      </td>
      <td className="none">
        <div className="type">
          <p>{type}</p>
        </div>
      </td>
      <td>
        <div className="icon">
          <Link href={`/pokemon/${id}`}>
            <div>
              <Icon src="/img/eye.png" />
            </div>
          </Link>
          <Icon
            onClick={removePokemon}
            src="/img/trash.png"
            className="red-icon"
          />
        </div>
      </td>
    </Styled.Container>
  )
}
