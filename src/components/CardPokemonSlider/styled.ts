import styled from 'styled-components'

export const Container = styled.div`
  max-width: 14rem;
  max-height: 15.3rem;
  margin: 2rem;
  margin: 2rem auto;
  background: #565256;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card-button {
    z-index: 1;
    position: relative;
    bottom: 2rem;
    text-align: center;
    height: 0;
  }

  .btn-pok {
    display: none;
    position: absolute;
    justify-content: center;
  }
  &:focus,
  &:hover {
    div {
      div,
      img,
      button {
        outline: none;
        filter: brightness(0.7);
      }
    }
    .brightness {
      filter: brightness(0.7);
    }
    .btn-pok {
      display: flex;
      * {
        filter: brightness(1);
      }
    }
  }
`

export const Column = styled.div`
  margin-top: -2.5rem;
  position: absolute;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  .rotation {
    width: 3rem;
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
