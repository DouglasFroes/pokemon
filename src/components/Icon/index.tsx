import React from 'react'
import * as Styled from './styled'

interface propsIcon {
  onClick?(): void
  src: string
  style?: any
  className?: any
}

export default function Icon(props: propsIcon) {
  const { onClick, src, ...rest } = props
  return (
    <Styled.Button onClick={onClick} aria-label="button-02" {...rest}>
      <img src={src} />
    </Styled.Button>
  )
}
