import styled from 'styled-components'

export const Button = styled.button`
  height: 3.56rem;
  width: 9.18rem;
  background: var(--var-color-5);
  border: 2px solid #100b16;
  border-radius: 0.6rem;
  font-size: 1.25rem;
  line-height: 1.68rem;

  transition: filter 0.2s;
  transition: font-weight 0.3s;
  &:focus,
  &:hover {
    font-weight: 700;
    outline: none;
    filter: brightness(0.75);
  }
`
