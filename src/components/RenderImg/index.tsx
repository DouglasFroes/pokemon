import React, { useState } from 'react'
import Image from 'next/image'
import * as Styled from './styled'

export default function ImgRender({ id, name, ...rest }: any) {
  const [imgErr, setImgErr] = useState(false)

  const srcDefault = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

  return (
    <Styled.Container {...rest}>
      <Image
        src={imgErr ? srcDefault : src}
        {...rest}
        alt={name}
        width={100}
        height={100}
        onError={() => {
          setImgErr(true)
        }}
      />
    </Styled.Container>
  )
}
