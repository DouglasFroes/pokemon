import styled from 'styled-components'

export const Container = styled.div`
  max-width: 14rem;
  max-height: 15.3rem;
  margin: 2rem;
  margin: 2rem auto;
  .card-button {
    z-index: 1;
    position: relative;
    bottom: 2rem;
    text-align: center;
    height: 0;
  }

  .btn-pok {
    display: none;
    height: 0;
    position: relative;
    justify-content: center;
    bottom: 60%;
  }
  &:focus,
  &:hover {
    div {
      outline: none;
      filter: brightness(0.75);
    }
    .btn-pok {
      display: flex;
      filter: brightness(1);
    }
  }
`

export const Column = styled.div`
  position: relative;
  right: 1.37rem;
  height: 0;
  top: -0.8rem;
  display: flex;
  z-index: 1;

  .rotation {
    width: 2.9rem;
    height: 3rem;
    transform: rotate(-43deg);
    background: var(--var-color-6);
    border: 2px solid #100b16;
    border-radius: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      transform: rotate(43deg);
      font-family: Poppins;
      font-size: 1.37rem;
      font-weight: 400;
      line-height: 2rem;
    }
  }
  .type {
    width: 3.25rem;
    height: 1.87rem;
    margin-left: 8.37rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-family: Poppins;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.12rem;
    }
  }
`
