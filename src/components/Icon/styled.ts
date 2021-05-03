import styled from 'styled-components'

export const Button = styled.div`
  width: 2.81rem;
  height: 2.81rem;
  background: #49dbdf;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;

  transition: filter 0.2s;
  transition: font-weight 0.3s;
  &:focus,
  &:hover {
    font-weight: 700;
    outline: none;
    filter: brightness(0.75);
  }
`
