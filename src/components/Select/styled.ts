import styled from 'styled-components'

export const Select = styled.select`
  margin-top: 1rem;
  margin: 10px;
  padding: 0.5rem 3rem;
  border-radius: 1rem;
  text-align-last: center;
  flex: 1 0.5 10rem;
  border-color: var(--var-color-3);
  font-size: 1.1rem;
  transition: font-weight 0.3s;
  overflow: hidden;
  appearance: none;
  display: grid;
  align-items: center;
  background: url('/seta.png') 95% / 5% no-repeat var(--var-color-1-2);
  :after {
    text-align: center;
    grid-area: select;
  }

  &:focus,
  &:hover {
    font-weight: 700;
    outline: none;
  }

  @media (max-width: 440px) {
    width: 80vw;
    margin: 10px 0;
    font-size: 0.9rem;
  }
`
