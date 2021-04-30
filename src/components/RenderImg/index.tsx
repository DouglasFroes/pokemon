import React from 'react'
import Image from 'next/image'
import * as Styled from './styled'

export default function ImgRender({ src, name, ...rest }: any) {
  return (
    <Styled.Container {...rest}>
      <Image src={src} {...rest} alt={name} width={100} height={100} />
    </Styled.Container>
  )
}
