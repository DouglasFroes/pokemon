import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--var-color-2);
  @media (max-width: 750px) {
    margin: 0 2vw;
  }
  @media (max-width: 960px) {
    margin: 0 4vw;
  }
`
