import React from 'react'
import * as Styled from './styled'

interface propsButton {
  onClick?(): void
  label: string
  style?: any
}

export default function Button(props: propsButton) {
  const { onClick, label, ...rest } = props
  return (
    <Styled.Button onClick={onClick} aria-label="button-01" {...rest}>
      {label}
    </Styled.Button>
  )
}
