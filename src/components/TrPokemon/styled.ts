import styled from 'styled-components'
import RenderImg from '../RenderImg'

export const Container = styled.tr`
  margin-bottom: 1rem;
  background: var(--white);
  border-radius: 0.5rem;

  td {
    p {
      color: var(--var-color-6);
      line-height: 2.2rem;
      font-size: 1.3rem;
      font-weight: 500;
      font-family: Poppins;
    }
  }

  .type {
    width: 3.25rem;
    height: 1.9rem;
    background: #f25d52;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 0.75rem;
      font-weight: 400;
      font-family: Poppins;
      line-height: 1.12rem;
      color: var(--var-color-4);
    }
  }

  .icon {
    display: flex;
    .red-icon {
      background: #f25d52;
      margin-left: 1rem;
    }
    @media (max-width: 410px) {
      button {
        width: 2rem;
        height: 2rem;
        img {
          width: 1rem;
        }
      }
    }
  }

  @media (max-width: 410px) {
    td {
      p {
        line-height: 1.5rem;
        font-size: 1rem;
        margin-left: 0.5rem;
      }
    }
  }

  @media (max-width: 350px) {
    .image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`

export const ImgPok = styled(RenderImg)`
  max-width: 4rem;
  max-height: 4rem;
`
