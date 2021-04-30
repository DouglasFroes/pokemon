import styled from 'styled-components'

export const View = styled.div`
  width: 85%;
  margin: 0 auto;
  transition: all 0.5s;

  .cardPokemon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 2.5rem;
    padding-left: 0.5rem;
  }

  .left {
    left: -25px;
  }
  .right {
    right: -25px;
  }
  .slick-dots {
    .slick-active {
      div {
        background: #535662;
      }
    }
  }
`
export const bottom = styled.div`
  width: 2.5rem;
  height: 2.62rem;
  border-radius: 5rem;
  border: 2px solid #100b16;
  background: var(--var-color-3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  cursor: pointer;
  outline: 0;
  @media (max-width: 300px) {
    display: none;
  }
`

export const customPaging = styled.div`
  height: 1.25rem;
  width: 1.19rem;
  border: 2px solid #100b16;
  border-radius: 5rem;
  background-color: var(--var-color-7);
  @media (max-width: 300px) {
    display: none;
  }
`
